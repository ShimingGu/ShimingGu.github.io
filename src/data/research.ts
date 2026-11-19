// ============================================================
// 研究方向与进行中的工作 —— 按需增删改。
// - topics:  首页/研究页的方向卡片（简短）
// - ongoing: “进行中与后续研究”板块的详细条目
// status 可选值: 'published' | 'ongoing' | 'planned'
// ============================================================

import type { Localized } from './profile';

export type TopicStatus = 'published' | 'ongoing' | 'planned';

export interface Topic {
  id: string;
  status: TopicStatus;
  title: Localized;
  summary: Localized;
  tags: string[];
}

export const topics: Topic[] = [
  {
    id: 'bnt',
    status: 'published',
    title: {
      en: 'Nonlinear systematics in weak lensing',
      zh: '弱透镜非线性系统误差',
    },
    summary: {
      en: 'Mitigating nonlinear systematics in weak lensing surveys with the Bernardeau-Nishimichi-Taruya (BNT) transform, with applications to KiDS-Legacy and intrinsic-alignment diagnostics.',
      zh: '利用 Bernardeau-Nishimichi-Taruya（BNT）变换压制弱透镜巡天中的非线性系统误差，应用于 KiDS-Legacy 并发展内禀 alignments 诊断。',
    },
    tags: ['BNT transform', 'KiDS-Legacy', 'Intrinsic alignments'],
  },
  {
    id: 'lss',
    status: 'published',
    title: {
      en: 'Large-scale structure & lensing cosmology',
      zh: '大尺度结构与透镜宇宙学',
    },
    summary: {
      en: 'Consistency tests of the large-scale structure, cosmology and halo mass function from weak lensing, and multi-probe cross-correlations (tSZ, CIB, CMB lensing).',
      zh: '大尺度结构一致性检验、弱透镜宇宙学与晕质量函数约束，以及多探针交叉关联（tSZ、CIB、CMB 透镜）。',
    },
    tags: ['Consistency tests', 'Halo mass function', 'Cross-correlations'],
  },
  {
    id: 'photoz',
    status: 'ongoing',
    title: {
      en: 'Foundation models for photometric redshifts',
      zh: '基于基础模型的光度红移',
    },
    summary: {
      en: 'Physics-informed photo-z PDF inference with astronomy foundation models (AION) and LLMs (Qwen), cross-survey transfer, and parameter-efficient post-training.',
      zh: '结合天文基础模型（AION）与大语言模型（Qwen）的物理融合光度红移 PDF 推断、跨巡天迁移与参数高效后训练。',
    },
    tags: ['AION', 'Qwen', 'ReLoRA', 'Photo-z'],
  },
  {
    id: 'quantum',
    status: 'ongoing',
    title: {
      en: 'Quantum information for gravitational lensing',
      zh: '量子信息与引力透镜',
    },
    summary: {
      en: 'Quantum information processing as a route to measuring gravitational lensing time delays — a cross-disciplinary interest I continue to follow.',
      zh: '以量子信息处理测量引力透镜时间延迟的交叉方向，保持关注与探索。',
    },
    tags: ['Quantum sensing', 'Time delays'],
  },
];

export interface Project {
  id: string;
  status: 'ongoing' | 'planned';
  title: Localized;
  description: Localized;
  highlights?: Localized[];
}

export const ongoing: Project[] = [
  {
    id: 'redfm',
    status: 'ongoing',
    title: {
      en: 'RedFM — physics-informed photometric redshifts',
      zh: 'RedFM —— 融合物理的光度红移推断',
    },
    description: {
      en: 'A photometric-redshift programme built on astronomy foundation models and LLM catalogue embeddings, targeting full redshift PDFs with physical likelihoods rather than point estimates.',
      zh: '基于天文基础模型与大语言模型星表嵌入的光度红移研究计划，目标是带物理似然的完整红移 PDF，而非单点估计。',
    },
    highlights: [
      {
        en: 'Physical redshift inference with SED likelihoods and sequential Monte Carlo',
        zh: '结合 SED 物理似然与序贯蒙特卡洛（SMC）的红移推断',
      },
      {
        en: 'Cross-survey transfer (DESI–Legacy → CLAUDS) under tiny supervision budgets',
        zh: '极小监督预算下的跨巡天迁移（DESI–Legacy → CLAUDS）',
      },
      {
        en: 'ReLoRA / QLoRA post-training of Qwen catalogue embeddings',
        zh: 'Qwen 星表嵌入的 ReLoRA / QLoRA 后训练',
      },
      {
        en: 'High-redshift anchor recovery and multiband morphology catalogues',
        zh: '高红移锚点恢复与多波段形态星表',
      },
    ],
  },
  // 复制上面的条目即可添加新的进行中 / 计划中研究：
  // {
  //   id: 'my-project',
  //   status: 'planned',
  //   title: { en: '...', zh: '...' },
  //   description: { en: '...', zh: '...' },
  // },
];