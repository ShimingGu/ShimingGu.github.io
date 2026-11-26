import { checkFields, checkNew, checkEdit, hashId, totalMinutes } from '../../../src/lib/salon';
import { mergeVisitors, type VisitorPoint } from '../../../src/lib/visitors';

interface StoredEntry {
  idHash: string;
  who: string;
  minutes: number;
  talk: { zh: string; en: string };
  food: { zh: string; en: string };
  createdAt: string;
}

interface Env {
  SALON_KV: KVNamespace;
  AI: Ai;
  ALLOWED_ORIGINS: string;
  TRANSLATE_MODEL: string;
  ADMIN_KEY?: string;
}

const MONTH_RE = /^\d{4}-\d{2}$/;
const MAX_CHARS = 4000;
const CHUNK_CHARS = 350;

function degenerate(out: string): boolean {
  const s = out.trim();
  if (s.length < 2) return true;
  const punct = (s.match(/[\s,.;:!?、，。；]/g) || []).length;
  if (punct / s.length > 0.5) return true;
  const words = s.split(/\s+/);
  const counts = new Map<string, number>();
  for (let i = 0; i + 3 <= words.length; i++) {
    const g = words.slice(i, i + 3).join(' ');
    const c = (counts.get(g) || 0) + 1;
    counts.set(g, c);
    if (c > 4) return true;
  }
  return false;
}

function corsHeaders(env: Env, origin: string | null): Record<string, string> {
  const allowed = env.ALLOWED_ORIGINS.split(',');
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Key',
    'Access-Control-Max-Age': '86400',
  };
  if (origin && allowed.includes(origin)) headers['Access-Control-Allow-Origin'] = origin;
  return headers;
}

function json(env: Env, origin: string | null, body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(env, origin) },
  });
}

const publicView = (e: StoredEntry) => ({
  who: e.who,
  minutes: e.minutes,
  talk: e.talk,
  food: e.food,
});

async function loadEntries(env: Env, month: string): Promise<StoredEntry[]> {
  const raw = await env.SALON_KV.get(`m:${month}`);
  return raw ? (JSON.parse(raw) as StoredEntry[]) : [];
}

async function translateOnce(env: Env, text: string, from: 'zh' | 'en', to: 'zh' | 'en'): Promise<string> {
  const fromName = from === 'zh' ? 'Chinese' : 'English';
  const toName = to === 'zh' ? 'Chinese' : 'English';
  const messages = [
    {
      role: 'system',
      content: `You translate sign-up board entries from ${fromName} to ${toName}. If the source is classical Chinese poetry, render its meaning in fluent English, keeping place and person names in standard pinyin or conventional English. If the source is a list of items, translate every item exactly once, separated by commas; never repeat items or phrases. Translate fragments as fragments; do not add words. Output only the translation.`,
    },
    { role: 'user', content: text },
  ];
  const extract = (r: unknown): string => {
    const o = r as { response?: string; choices?: { message?: { content?: string } }[] };
    return (o.response ?? o.choices?.[0]?.message?.content ?? '').trim();
  };
  const attempts: Array<[string, Record<string, unknown>]> = [
    [
      env.TRANSLATE_MODEL,
      { max_tokens: 2048, temperature: 0.2, chat_template_kwargs: { enable_thinking: false } },
    ],
    ['@cf/openai/gpt-oss-120b', { max_tokens: 2048, reasoning_effort: 'low' }],
  ];
  for (const [model, extra] of attempts) {
    try {
      const out = extract(await env.AI.run(model as keyof AiModels, { messages, ...extra }));
      if (out && !degenerate(out)) return out;
    } catch {
      // try next model in the chain
    }
  }
  try {
    const r = (await env.AI.run('@cf/meta/m2m100-1.2b', {
      text,
      source_lang: from,
      target_lang: to,
    })) as { translated_text?: string };
    const out = r.translated_text?.trim() ?? '';
    if (out && !degenerate(out)) return out;
  } catch {
    // leave slot empty; signup still succeeds
  }
  return '';
}

async function translate(env: Env, text: string, from: 'zh' | 'en', to: 'zh' | 'en'): Promise<string> {
  if (text.length <= CHUNK_CHARS) return translateOnce(env, text, from, to);
  const items = text.split(/(?<=[、，,;；])/);
  const chunks: string[] = [];
  let cur = '';
  for (const it of items) {
    if (cur && (cur + it).length > CHUNK_CHARS) {
      chunks.push(cur);
      cur = it;
    } else {
      cur += it;
    }
  }
  if (cur) chunks.push(cur);
  const parts: string[] = [];
  for (const c of chunks.slice(0, 8)) {
    parts.push(await translateOnce(env, c, from, to));
  }
  let out = parts.filter(Boolean).join(' ');
  if (chunks.length > 8) out += ' …';
  return out;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin');
    const parts = url.pathname.split('/').filter(Boolean);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(env, origin) });
    }

    if (parts[0] === 'health') return json(env, origin, { ok: true });

    if (parts[0] === 'stats' && request.method === 'GET') {
      const list = await env.SALON_KV.list({ prefix: 'm:' });
      const stats: Record<string, { n: number; total: number }> = {};
      for (const key of list.keys) {
        const entries = await loadEntries(env, key.name.slice(2));
        stats[key.name.slice(2)] = { n: entries.length, total: totalMinutes(entries) };
      }
      return json(env, origin, { stats });
    }

    if (parts[0] === 'visitors' && (request.method === 'GET' || request.method === 'POST')) {
      const raw = await env.SALON_KV.get('v:agg');
      const agg: VisitorPoint[] = raw ? JSON.parse(raw) : [];
      if (request.method === 'POST') {
        const cf = (request as Request & { cf?: { city?: string; region?: string; country?: string; latitude?: string; longitude?: string } }).cf;
        const lat = Math.round(Number(cf?.latitude) * 100) / 100;
        const lng = Math.round(Number(cf?.longitude) * 100) / 100;
        if (cf && Number.isFinite(lat) && Number.isFinite(lng)) {
          const city = cf.city || cf.region || cf.country || '';
          const country = cf.country || '';
          const hit = agg.find((p) => p.city === city && p.country === country);
          if (hit) {
            hit.n += 1;
            hit.lat = lat;
            hit.lng = lng;
          } else {
            agg.push({ city, country, lat, lng, n: 1 });
          }
          await env.SALON_KV.put('v:agg', JSON.stringify(agg));
        }
      }
      return json(env, origin, mergeVisitors(agg));
    }

    if (parts[0] === 'salon' && MONTH_RE.test(parts[1] ?? '')) {
      const month = parts[1];

      if (request.method === 'GET') {
        const entries = await loadEntries(env, month);
        return json(env, origin, { entries: entries.map(publicView), total: totalMinutes(entries) });
      }

      if (request.method === 'POST' || request.method === 'PUT') {
        let body: Record<string, unknown>;
        try {
          body = (await request.json()) as Record<string, unknown>;
        } catch {
          return json(env, origin, { error: 'errBadJson' }, 400);
        }
        const id = String(body.id ?? '').trim();
        const who = String(body.who ?? '');
        const minutes = Number(body.minutes);
        const lang = body.lang === 'en' ? 'en' : 'zh';
        const other = lang === 'zh' ? 'en' : 'zh';
        const talk = String(body.talk ?? '');
        const food = String(body.food ?? '');
        if (talk.length > MAX_CHARS || food.length > MAX_CHARS) {
          return json(env, origin, { error: 'errTooLong' }, 400);
        }

        const entries = await loadEntries(env, month);
        const idHash = await hashId(id);

        if (request.method === 'POST') {
          const fieldErr = checkFields(id, who, minutes, talk, food);
          if (fieldErr) return json(env, origin, { error: fieldErr }, 400);
          const ruleErr = checkNew(entries, idHash, minutes, id);
          if (ruleErr) return json(env, origin, { error: ruleErr }, 409);
          const [talkOther, foodOther] = await Promise.all([
            translate(env, talk, lang, other),
            translate(env, food, lang, other),
          ]);
          const entry: StoredEntry = {
            idHash,
            who: who.trim(),
            minutes,
            talk: { [lang]: talk.trim(), [other]: talkOther } as StoredEntry['talk'],
            food: { [lang]: food.trim(), [other]: foodOther } as StoredEntry['food'],
            createdAt: new Date().toISOString(),
          };
          entries.push(entry);
          await env.SALON_KV.put(`m:${month}`, JSON.stringify(entries));
          return json(env, origin, { entry: publicView(entry), total: totalMinutes(entries) }, 201);
        }

        const idx = entries.findIndex((e) => e.idHash === idHash);
        if (idx === -1) return json(env, origin, { error: 'errIdUnknown' }, 404);
        const current = entries[idx];
        const nextWho = body.who === undefined ? current.who : String(body.who);
        const nextMinutes = body.minutes === undefined ? current.minutes : Number(body.minutes);
        const nextTalk = body.talk === undefined ? current.talk[lang] : String(body.talk);
        const nextFood = body.food === undefined ? current.food[lang] : String(body.food);
        const fieldErr = checkFields(id, nextWho, nextMinutes, nextTalk, nextFood);
        if (fieldErr) return json(env, origin, { error: fieldErr }, 400);
        const ruleErr = checkEdit(entries, idHash, nextMinutes, id);
        if (ruleErr) return json(env, origin, { error: ruleErr }, 409);
        const talkChanged = nextTalk.trim() !== current.talk[lang];
        const foodChanged = nextFood.trim() !== current.food[lang];
        const [talkOther, foodOther] = await Promise.all([
          talkChanged ? translate(env, nextTalk, lang, other) : Promise.resolve(current.talk[other]),
          foodChanged ? translate(env, nextFood, lang, other) : Promise.resolve(current.food[other]),
        ]);
        const entry: StoredEntry = {
          ...current,
          who: nextWho.trim(),
          minutes: nextMinutes,
          talk: { ...current.talk, [lang]: nextTalk.trim(), [other]: talkOther },
          food: { ...current.food, [lang]: nextFood.trim(), [other]: foodOther },
        };
        entries[idx] = entry;
        await env.SALON_KV.put(`m:${month}`, JSON.stringify(entries));
        return json(env, origin, { entry: publicView(entry), total: totalMinutes(entries) });
      }
    }

    if (parts[0] === 'admin' && parts[1] === 'translate' && request.method === 'POST') {
      if (!env.ADMIN_KEY || request.headers.get('X-Admin-Key') !== env.ADMIN_KEY) {
        return json(env, origin, { error: 'errAdmin' }, 403);
      }
      const body = (await request.json()) as { text: string; from: 'zh' | 'en'; to: 'zh' | 'en' };
      const translation = await translate(env, String(body.text ?? ''), body.from, body.to);
      return json(env, origin, { translation });
    }

    if (parts[0] === 'admin' && MONTH_RE.test(parts[1] ?? '')) {
      if (!env.ADMIN_KEY || request.headers.get('X-Admin-Key') !== env.ADMIN_KEY) {
        return json(env, origin, { error: 'errAdmin' }, 403);
      }
      const month = parts[1];
      if (request.method === 'GET') {
        const entries = await loadEntries(env, month);
        return json(env, origin, { entries });
      }
      const body = (await request.json()) as {
        action: 'patch' | 'delete';
        idHash: string;
        patch?: Partial<Pick<StoredEntry, 'who' | 'minutes' | 'talk' | 'food'>>;
      };
      const entries = await loadEntries(env, month);
      const idx = entries.findIndex((e) => e.idHash === body.idHash);
      if (idx === -1) return json(env, origin, { error: 'errIdUnknown' }, 404);
      if (body.action === 'delete') {
        entries.splice(idx, 1);
      } else {
        entries[idx] = { ...entries[idx], ...body.patch };
      }
      await env.SALON_KV.put(`m:${month}`, JSON.stringify(entries));
      return json(env, origin, { entries: entries.map(publicView), total: totalMinutes(entries) });
    }

    return json(env, origin, { error: 'errNotFound' }, 404);
  },
};