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
      en: 'Concretely, I count the peaks in weak-lensing mass maps — each peak marks a massive dark-matter halo — and compare that count with the halo mass function predicted by theory to constrain cosmology. Nonlinear gravity and the intrinsic alignment of galaxies distort these statistics, so I use the BNT transform to reweight the lensing signal until the nonlinear contributions cancel, and test whether that cancellation stays stable once intrinsic alignments are included.',
      zh: '具体做法是数弱透镜质量图上的峰值——每个峰对应一个大质量暗物质晕——再把计数与理论预言的晕质量函数对比来约束宇宙学。非线性引力和星系内禀 alignment 会扭曲这些统计，所以我用 BNT 变换对透镜信号重新加权、使非线性贡献相互抵消，并检验加入内禀 alignment 后这种抵消是否仍然稳定。',
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
      en: 'In practice, the BNT transform combines tomographic redshift bins so that nonlinear small-scale contributions cancel, isolating the linear large-scale modes. A consistency test then demands that independent combinations of the data agree on those modes; disagreement flags a systematic, and the diagnostics tell us which scales and which bins can be trusted for cosmology.',
      zh: '操作上，BNT 变换把层析红移 bins 组合起来，使非线性小尺度贡献相互抵消，从而分离出线性大尺度模式。一致性检验要求数据的独立组合对这些模式给出相同答案；不一致即标志系统误差，诊断结果则告诉我们哪些尺度、哪些 bins 可以可信地用于宇宙学。',
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
      en: 'The pipeline turns each galaxy\'s catalogue row (and optionally its image) into embeddings with the astronomy foundation model AION and the language model Qwen, then trains a small head that outputs a full redshift probability distribution rather than a single number. A physical likelihood — how probable the observed photometry is under a template spectral energy distribution at redshift z — enters the loss, and sequential Monte Carlo refines the posterior. Adapting to a new survey uses only about a thousand labelled galaxies, updating low-rank adapters (ReLoRA, QLoRA, DoRA) instead of the whole model.',
      zh: '流程上，先用天文基础模型 AION 与语言模型 Qwen 把每个星系的星表行（可选加图像）变成嵌入，再训练一个小输出头，给出完整的红移概率分布而非单个数值。损失中加入物理似然——在红移 z 处模板 SED 下观测到该测光的概率——并用序贯蒙特卡洛细化后验。迁移到新巡天只用约一千个带标签星系，更新低秩适配器（ReLoRA、QLoRA、DoRA）而非整个模型。',
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
      en: 'These proposals store each incoming photon\'s state in a quantum memory at its telescope, then use shared entanglement to perform parity checks between sites: the interference phase is extracted without the photon ever travelling through a lossy link, which is exactly what limits classical baselines. Follow-up work shows that joint measurements on several photons estimate closure phases — the atmosphere-immune combinations of fringe phases — with far fewer photons than sequential detection. My own work applies the same toolbox to the time delays between microlensed images.',
      zh: '这类方案把每个入射光子的量子态存在所在望远镜的量子存储器里，再借助站点间共享纠缠做 parity check：干涉相位被直接提取，而光子不必穿过有损耗的链路——后者正是经典基线长度的限制所在。后续工作表明，对多个光子做联合测量，能以远少于逐个探测的光子数估计闭合相位（即对大气免疫的条纹相位组合）。我自己的工作则把同一套工具用于微透镜像之间的时间延迟。',
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