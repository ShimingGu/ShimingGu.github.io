// ============================================================
// 学术沙龙共享看板数据 —— 由组织者维护（或叫 AI 刷新写入）。
// month 键格式 'YYYY-MM'；entries 按登记顺序排列。
// id 是私有修改凭证（不公开显示）；who 是公开显示名。
// talk/food 双语：登记时只填一种语言，另一种留 '' 待翻译刷新。
// 规则：每人 >=10 分钟；全场 20-60 分钟；第一位登记 >=20 分钟。
// 页面上的表单只做校验与报名文本导出，不直接写这里。
// ============================================================

export interface SalonEntry {
  id: string;
  who: string;
  minutes: number;
  talk: { zh: string; en: string };
  food: { zh: string; en: string };
}

// 日历与详情页生成的年份范围；要加年份改这里并重新构建
export const SALON_YEARS = [2025, 2026, 2027];

export const SALON_RULES = { perMin: 10, totalMin: 20, totalMax: 60 };

// TODO: 填组织者邮箱后，报名表单会出现"邮件发给组织者"按钮
export const organizerEmail = '';

// 即时报名后端（Cloudflare Worker + KV + Workers AI 翻译）
export const SALON_API = 'https://salon-api.shiminggu.workers.dev';

export const salon: Record<string, SalonEntry[]> = {
  // 示例（去掉注释并修改即可上线一期阵容）：
  // '2026-12': [
  //   {
  //     id: 'zhangsan',
  //     who: '张三',
  //     minutes: 25,
  //     talk: { zh: '弱透镜里的系统误差从哪来', en: '' },
  //     food: { zh: '披萨', en: '' },
  //   },
  // ],
};