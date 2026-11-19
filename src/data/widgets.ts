// ============================================================
// 小工具注册表 —— 新组件放入 src/components/widgets/，
// 在这里登记 id / 标题 / 简介，并在 src/pages/[lang]/widgets.astro
// 的组件映射中加一行即可。
// ============================================================

import type { Localized } from './profile';

export interface WidgetMeta {
  id: string;
  title: Localized;
  desc: Localized;
}

export const widgets: WidgetMeta[] = [
  {
    id: 'cosmo-calc',
    title: { en: 'Cosmology calculator', zh: '宇宙学计算器' },
    desc: {
      en: 'Flat ΛCDM distances and timescales from redshift (Planck 2018 defaults).',
      zh: '由红移计算平坦 ΛCDM 距离与时间尺度（默认 Planck 2018 参数）。',
    },
  },
  {
    id: 'group-picker',
    title: { en: 'Random groups / lottery', zh: '随机分组 / 抽签' },
    desc: {
      en: 'Shuffle a name list into groups, or draw lucky winners — handy for events.',
      zh: '把名单随机分成若干组，或抽取幸运儿——组织活动时用得上。',
    },
  },
];