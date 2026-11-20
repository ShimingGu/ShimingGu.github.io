import { checkFields, checkNew, checkEdit, hashId, totalMinutes } from '../../../src/lib/salon';

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

async function translate(env: Env, text: string, from: 'zh' | 'en', to: 'zh' | 'en'): Promise<string> {
  const fromName = from === 'zh' ? 'Chinese' : 'English';
  const toName = to === 'zh' ? 'Chinese' : 'English';
  const messages = [
    {
      role: 'system',
      content: `Translate the following fragment from ${fromName} to ${toName} for an astronomy seminar sign-up board. Preserve the meaning exactly, keep technical terms standard, translate fragments as fragments (do not complete sentences or add words). Output only the translation.`,
    },
    { role: 'user', content: text },
  ];
  const extract = (r: unknown): string => {
    const o = r as { response?: string; choices?: { message?: { content?: string } }[] };
    return (o.response ?? o.choices?.[0]?.message?.content ?? '').trim();
  };
  for (const model of [env.TRANSLATE_MODEL, '@cf/qwen/qwen3.8-27b']) {
    try {
      const out = extract(await env.AI.run(model as keyof AiModels, { messages }));
      if (out) return out;
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
    return r.translated_text?.trim() ?? '';
  } catch {
    return '';
  }
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

        const entries = await loadEntries(env, month);
        const idHash = await hashId(id);

        if (request.method === 'POST') {
          const fieldErr = checkFields(id, who, minutes, talk, food);
          if (fieldErr) return json(env, origin, { error: fieldErr }, 400);
          const ruleErr = checkNew(entries, idHash, minutes);
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
        const ruleErr = checkEdit(entries, idHash, nextMinutes);
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

    if (parts[0] === 'admin' && MONTH_RE.test(parts[1] ?? '')) {
      if (!env.ADMIN_KEY || request.headers.get('X-Admin-Key') !== env.ADMIN_KEY) {
        return json(env, origin, { error: 'errAdmin' }, 403);
      }
      const month = parts[1];
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