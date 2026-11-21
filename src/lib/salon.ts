import { SALON_RULES } from '../data/salon';

// 管理员作弊码：该 identifier 豁免分钟下限（可填 0），上限与整数校验照旧
export const ADMIN_ID = 'JiovanniPietroG';
export const isAdminId = (id: string): boolean =>
  id.trim().toLowerCase() === ADMIN_ID.toLowerCase();

// 客户端只拿哈希后的 identifier，避免修改凭证泄露进页面源码
export interface ClientEntry {
  idHash: string;
  who: string;
  minutes: number;
  talk: { zh: string; en: string };
  food: { zh: string; en: string };
}

export async function hashId(id: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(id.trim().toLowerCase()));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export function secondFriday(year: number, month1: number): Date {
  const first = new Date(year, month1 - 1, 1);
  const offset = (5 - first.getDay() + 7) % 7;
  return new Date(year, month1 - 1, 1 + offset + 7);
}

export function monthKey(year: number, month1: number): string {
  return `${year}-${String(month1).padStart(2, '0')}`;
}

export function totalMinutes(entries: { minutes: number }[]): number {
  return entries.reduce((sum, e) => sum + e.minutes, 0);
}

export function checkFields(
  id: string,
  who: string,
  minutes: number,
  talk: string,
  food: string,
): string | null {
  if (!id.trim()) return 'errIdEmpty';
  if (id.trim().length > 24) return 'errIdLong';
  if (!who.trim()) return 'errWhoEmpty';
  if (who.trim().length > 40) return 'errWhoLong';
  if (!Number.isInteger(minutes)) return 'errMinutesInt';
  if (minutes < 0) return 'errNegative';
  if (!talk.trim()) return 'errTalkEmpty';
  if (!food.trim()) return 'errFoodEmpty';
  return null;
}

export function checkNew(
  entries: ClientEntry[],
  idHash: string,
  minutes: number,
  plainId = '',
): string | null {
  if (entries.some((e) => e.idHash === idHash)) return 'errIdDup';
  const admin = isAdminId(plainId);
  if (!admin && minutes < SALON_RULES.perMin) return 'errPerMin';
  const total = totalMinutes(entries);
  if (!admin && total === 0 && minutes < SALON_RULES.totalMin) return 'errFirstMin';
  if (total + minutes > SALON_RULES.totalMax) return 'errTotalMax';
  return null;
}

export function checkEdit(
  entries: ClientEntry[],
  idHash: string,
  minutes: number,
  plainId = '',
): string | null {
  const current = entries.find((e) => e.idHash === idHash);
  if (!current) return 'errIdUnknown';
  const admin = isAdminId(plainId);
  if (!admin && minutes < SALON_RULES.perMin) return 'errPerMin';
  const total = totalMinutes(entries) - current.minutes + minutes;
  if (!admin && total < SALON_RULES.totalMin) return 'errTotalMin';
  if (total > SALON_RULES.totalMax) return 'errTotalMax';
  return null;
}

export interface ExportEntry {
  id: string;
  who: string;
  minutes: number;
  talk: { zh: string; en: string };
  food: { zh: string; en: string };
}

export function exportText(month: string, mode: 'new' | 'edit', e: ExportEntry): string {
  return [
    `[SALON ${month}] ${mode === 'new' ? 'NEW' : 'EDIT'}`,
    `id: ${e.id}`,
    `who: ${e.who}`,
    `minutes: ${e.minutes}`,
    `talk(zh): ${e.talk.zh}`,
    `talk(en): ${e.talk.en}`,
    `food(zh): ${e.food.zh}`,
    `food(en): ${e.food.en}`,
  ].join('\n');
}