// ============================================================
// 论文列表 —— 发表/预印本/撰写中的文章都在这里维护。
// - publications: 已发表（或已上 arXiv）的论文，按年份从新到旧排列
// - preprints:    即将挂 arXiv / 撰写中 / 已投稿的文章
// status 可选值: 'published' | 'preprint' | 'inprep' | 'submitted'
// authors 中的 'Shiming Gu' 会自动加粗显示。
// journal / doi 选填；arxiv 填编号即可（如 '2412.14704'）。
// ============================================================

import type { Localized } from './profile';

export type PubStatus = 'published' | 'preprint' | 'inprep' | 'submitted';

export interface Pub {
  title: string;
  authors: string[];
  year: number;
  status: PubStatus;
  arxiv?: string;
  doi?: string;
  journal?: string;
  note?: Localized;
}

export const publications: Pub[] = [
  {
    title:
      'Consistency test of the large-scale structure with Bernardeau-Nishimichi-Taruya transform of the KiDS-Legacy survey',
    authors: [
      'Shiming Gu',
      'Ziang Yan',
      'Ludovic van Waerbeke',
      'Francis Bernardeau',
      'Hendrik Hildebrandt',
      'Angus H. Wright',
      'Maciej Bilicki',
      'Christos Georgiou',
      'Shun-Sheng Li',
      'Laila Linke',
      'Lauro Moscardini',
      'Robert Reischke',
      'Benjamin Stölzner',
    ],
    year: 2026,
    status: 'published',
    arxiv: '2607.04384',
    // TODO: 补充期刊信息，如 journal: 'MNRAS, 520, 1234'
  },
  {
    title:
      'Mitigating Nonlinear Systematics in Weak Lensing Surveys II: Stability and Diagnostics with Intrinsic Alignment',
    authors: ['Shiming Gu', 'Ludovic van Waerbeke', 'Francis Bernardeau', 'Sébastien Fabbro'],
    year: 2025,
    status: 'published',
    arxiv: '2511.09544',
  },
  {
    // 注意：这篇量子信息交叉论文请确认是否为你本人参与的工作，如不是请删除此条目
    title: 'Measuring gravitational lensing time delays with quantum information processing',
    authors: [
      'Zhenning Liu',
      'William DeRocco',
      'Shiming Gu',
      'Emil T. Khabiboulline',
      'Soonwon Choi',
      'Andrew M. Childs',
      'Anson Hook',
      'Alexey V. Gorshkov',
      'Daniel Gottesman',
    ],
    year: 2025,
    status: 'published',
    arxiv: '2510.07898',
  },
  {
    title:
      'Mitigating Nonlinear Systematics in Weak Lensing Surveys: The Bernardeau-Nishimichi-Taruya Approach',
    authors: ['Shiming Gu', 'Ludovic van Waerbeke', 'Francis Bernardeau', 'Roohi Dalal'],
    year: 2024,
    status: 'published',
    arxiv: '2412.14704',
  },
  {
    title: 'On constraining Cosmology and the Halo Mass Function with Weak Gravitational Lensing',
    authors: [
      'Shiming Gu',
      'Marc-Antoine Dor',
      'Ludovic van Waerbeke',
      'Marika Asgari',
      'Alexander Mead',
      'Tilman Tröster',
      'Ziang Yan',
    ],
    year: 2023,
    status: 'published',
    arxiv: '2302.00780',
  },
  {
    title:
      'Cosmic star formation history with tomographic cosmic infrared background-galaxy cross-correlation',
    authors: [
      'Ziang Yan',
      'Ludovic van Waerbeke',
      'Angus H. Wright',
      'Maciej Bilicki',
      'Shiming Gu',
      'Hendrik Hildebrandt',
      'Abhishek S. Maniyar',
      'Tilman Tröster',
    ],
    year: 2022,
    status: 'published',
    arxiv: '2204.01649',
  },
  {
    title:
      'Probing galaxy bias and intergalactic gas pressure with KiDS Galaxies-tSZ-CMB lensing cross-correlations',
    authors: [
      'Ziang Yan',
      'Ludovic van Waerbeke',
      'Tilman Tröster',
      'Angus H. Wright',
      'David Alonso',
      'Marika Asgari',
      'Maciej Bilicki',
      'Thomas Erben',
      'Shiming Gu',
      'Catherine Heymans',
      'Hendrik Hildebrandt',
      'Gary Hinshaw',
      'Nick Koukoufilippas',
      'Arun Kannawadi',
      'Konrad Kuijken',
      'Alexander Mead',
      'HuanYuan Shan',
    ],
    year: 2021,
    status: 'published',
    arxiv: '2102.07701',
  },
];

// ============================================================
// 预印本 / 撰写中 / 已投稿的文章（文章上线或确定信息后再登记）。
// 复制下面的示例，去掉注释并修改内容即可显示在“预印本”板块。
// ============================================================
export const preprints: Pub[] = [
  // {
  //   title: 'Your upcoming paper title',
  //   authors: ['Shiming Gu', 'Coauthor One', 'Coauthor Two'],
  //   year: 2026,
  //   status: 'inprep', // 'inprep' 撰写中 | 'submitted' 已投稿 | 'preprint' 已上 arXiv
  //   note: { en: 'Expected on arXiv soon.', zh: '即将上传 arXiv。' },
  // },
];