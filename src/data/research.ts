// ============================================================
// 研究方向与进行中的工作 —— 按需增删改。
// - topics:  研究页的方向卡片。summary 为大众化解释（主），
//            technical 为专业补充（辅，小字显示），
//            papers 为本人论文链接，reading 为背景/延伸阅读（非本人工作）。
// - ongoing: “进行中与后续研究”板块的详细条目
// 注意：论文列表只放已上线的文章；方向描述中不写"即将上线"类承诺。
// ============================================================

import type { Localized } from './profile';

export interface TopicRef {
  label: Localized;
  arxiv: string;
}

export interface Topic {
  id: string;
  title: Localized;
  summary: Localized;
  technical?: Localized;
  tags: string[];
  papers?: TopicRef[];
  reading?: TopicRef[];
}

export const topics: Topic[] = [
  {
    id: 'lss',
    title: {
      en: 'The large-scale structure of the Universe',
      zh: '宇宙大尺度结构',
    },
    summary: {
      en: 'Gravity draws galaxies into a vast "cosmic web" of clusters, filaments and voids. How clumpy this web is, and how its clumps grow over cosmic time, records what the Universe is made of — from dark matter to dark energy. I use the subtle bending of light by gravity as a scale to count and weigh these structures, and study how to read that scale reliably.',
      zh: '引力把星系聚成一张由星系团、纤维结构和空洞组成的巨大"宇宙网"。这张网有多结块、结块如何随宇宙时间长大，记录了宇宙由什么构成——从暗物质到暗能量。我把引力对光线的微弱弯折当作一杆秤，去数清、称准这些结构，并研究如何可靠地读数。',
    },
    technical: {
      en: 'Weak-lensing peak statistics and the halo mass function; cosmological constraints; the BNT transform for nonlinear systematics; intrinsic-alignment stability and diagnostics.',
      zh: '弱透镜峰值统计与晕质量函数；宇宙学约束；BNT 变换压制非线性系统误差；内禀 alignment 的稳定性与诊断。',
    },
    tags: ['Cosmic web', 'Dark matter', 'Weak lensing'],
    papers: [
      {
        label: { en: 'Halo mass function & cosmology from weak lensing', zh: '弱透镜约束晕质量函数与宇宙学' },
        arxiv: '2302.00780',
      },
      {
        label: { en: 'BNT transform for nonlinear systematics', zh: 'BNT 变换压制非线性系统误差' },
        arxiv: '2412.14704',
      },
      {
        label: { en: 'Intrinsic-alignment stability & diagnostics', zh: '内禀 alignment 稳定性与诊断' },
        arxiv: '2511.09544',
      },
    ],
  },
  {
    id: 'systematics',
    title: {
      en: 'Diagnosing survey systematics',
      zh: '巡天系统误差诊断',
    },
    summary: {
      en: 'Sky surveys photograph billions of galaxies, and tiny distortions in those images carry cosmological information. But instruments, the atmosphere and the galaxies themselves leave fingerprints that can mimic or hide the signal. I build the survey\'s "health check": diagnostics that separate genuine cosmic signals from contaminants before we trust the cosmology.',
      zh: '巡天给数十亿星系拍照，图像里极微小的形变携带着宇宙学信息。但仪器、大气和星系自身也会留下指纹，可能模仿或掩盖真实信号。我做的是巡天的"体检"：在相信宇宙学结论之前，用诊断工具把真正的宇宙信号与污染分开。',
    },
    technical: {
      en: 'KiDS-Legacy large-scale-structure consistency tests with the BNT transform.',
      zh: 'KiDS-Legacy 大尺度结构的 BNT 一致性检验。',
    },
    tags: ['KiDS-Legacy', 'Systematics', 'Diagnostics'],
    papers: [
      {
        label: { en: 'KiDS-Legacy consistency test', zh: 'KiDS-Legacy 一致性检验' },
        arxiv: '2607.04384',
      },
    ],
  },
  {
    id: 'fm',
    title: {
      en: 'Foundation models & post-training',
      zh: '基础模型与后训练',
    },
    summary: {
      en: 'The recipe behind large language models — pretrain on enormous data, then adapt with a little targeted training — is arriving in astronomy. I teach general-purpose foundation models to read survey catalogues and images, then specialise them with small labelled datasets (post-training). The current testbed is guessing galaxy distances from their colours; the goal is a reusable AI backbone for many survey tasks. No papers yet — this is where most of my time goes.',
      zh: '大语言模型背后的配方——先在海量数据上预训练、再用少量针对性训练适配——正在进入天文。我教通用基础模型读巡天星表和图像，再用小规模带标签数据做后训练。目前的试验场是从星系颜色猜距离（光度红移），目标是可复用于多种巡天任务的 AI 底座。还没有论文——但这是我目前时间投入最多的方向。',
    },
    technical: {
      en: 'AION + Qwen catalogue/image embeddings; physics-informed photo-z PDFs (SED likelihoods, SMC); cross-survey transfer with ~10³ labels; ReLoRA / QLoRA / DoRA post-training.',
      zh: 'AION + Qwen 星表/图像嵌入；物理融合 photo-z PDF（SED 似然、SMC）；约千级标签的跨巡天迁移；ReLoRA / QLoRA / DoRA 后训练。',
    },
    tags: ['Foundation models', 'Post-training', 'Photo-z'],
  },
  {
    id: 'quantum',
    title: {
      en: 'Quantum information for astronomy',
      zh: '量子信息的天文应用',
    },
    summary: {
      en: 'Telescope arrays act as one giant instrument by combining starlight — but at optical wavelengths, piping photons between telescopes loses almost all of them, capping how sharp our images can be. Quantum information offers a way out: store the quantum state of incoming starlight and use entanglement to compare it across telescopes without shipping the fragile photons themselves, promising arbitrarily long baselines and quantum-enhanced precision. My own entry point is measuring the tiny time delays of gravitational microlensing with quantum information processing.',
      zh: '望远镜阵列通过合并星光等效成一架巨型仪器——但在光学波段，把光子在望远镜之间传输会损失殆尽，限制了成像能有多清晰。量子信息提供了出路：把入射星光的量子态存储下来，借助纠缠在各望远镜之间直接比对，而不必运送脆弱的光子本身，从而有望实现任意长的基线与量子增强的测量精度。我自己的切入点，是用量子信息处理测量引力微透镜的微小时间延迟。',
    },
    technical: {
      en: 'Quantum repeaters and memories for loss-free long-baseline optical interferometry; entanglement-assisted parity checks and quantum Fourier transform imaging; collective measurements for closure-phase estimation; quantum protocols for microlensing time delays.',
      zh: '量子中继与量子存储实现无损耗长基线光学干涉；纠缠辅助 parity check 与量子傅里叶变换成像；闭合相位的集体测量估计；微透镜时间延迟的量子协议。',
    },
    tags: ['Quantum sensing', 'Interferometry', 'Microlensing'],
    papers: [
      {
        label: { en: 'Lensing time delays with quantum information processing', zh: '量子信息处理测量透镜时间延迟' },
        arxiv: '2510.07898',
      },
    ],
    reading: [
      {
        label: { en: 'Longer-baseline telescopes using quantum repeaters (2012)', zh: '量子中继延长望远镜基线（2012）' },
        arxiv: '1107.2939',
      },
      {
        label: { en: 'Optical interferometry with quantum networks (2019)', zh: '量子网络光学干涉（2019）' },
        arxiv: '1809.01659',
      },
      {
        label: { en: 'Quantum-assisted telescope arrays (2019)', zh: '量子辅助望远镜阵列（2019）' },
        arxiv: '1809.03396',
      },
      {
        label: { en: 'Quantum memories eliminate photon transport (2026)', zh: '量子存储免除光子传输（2026）' },
        arxiv: '2608.10078',
      },
      {
        label: { en: 'Quantum-optimized phase closure imaging (2026)', zh: '量子优化闭合相位成像（2026）' },
        arxiv: '2610.06786',
      },
    ],
  },
];

export interface Project {
  id: string;
  title: Localized;
  description: Localized;
  highlights?: Localized[];
}

export const ongoing: Project[] = [
  {
    id: 'redfm',
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
  //   title: { en: '...', zh: '...' },
  //   description: { en: '...', zh: '...' },
  // },
];