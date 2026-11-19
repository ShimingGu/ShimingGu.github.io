// ============================================================
// 研究方向 —— 按需增删改。
// summary 为大众化解释（主），technical 为研究层面 big picture（辅，小字），
// papers 为本人论文链接，reading 为背景/延伸阅读（非本人工作）。
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
      en: 'Weak lensing maps the dark-matter scaffolding of the Universe, but precision cosmology needs more than maps: it needs observables whose theory is under control. The deepest tension is that the most informative scales are also the most nonlinear, where predictions rely on expensive simulations. The conceptual move behind the BNT transform is to recombine the data so that the poorly understood nonlinear part cancels by construction, leaving a signal that perturbation theory can predict — a route to cosmology from lensing that is clean by design rather than calibrated by brute force.',
      zh: '弱透镜描绘出宇宙的暗物质骨架，但精确宇宙学需要的不只是图，而是理论可控的观测量。最深的张力在于：信息量最大的尺度恰恰最非线性，预言依赖昂贵模拟。BNT 变换背后的概念性动作是把数据重新组合，让理解不足的非线性部分按构造相消，留下微扰论就能预言的信号——一条"设计上干净"而非"靠蛮力校准"的透镜宇宙学路线。',
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
      en: 'Every cosmological claim from a survey rests on an assumption: that the measured distortions trace the sky, not the instrument. As surveys reach percent-level precision, systematics — not statistics — become the limiting factor, and they cannot all be modelled from first principles. The guiding idea is internal consistency: the same sky observed in independent ways must tell one story, so contradictions within the data become a detector for unknown systematics. Cosmology then rests on checks the data performs on itself.',
      zh: '巡天的每一个宇宙学结论都依赖一个假设：测到的形变反映的是天空，而不是仪器。当巡天进入百分比精度时代，限制因素是系统误差而非统计误差，且它们无法全部从第一性原理建模。主导思想是内部自洽：同一片天空的独立观测必须讲同一个故事，于是数据内部的矛盾就成了未知系统误差的探测器。宇宙学由此建立在数据对自身的检验之上。',
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
      en: 'Astronomy now produces far more data than labelled examples: every new survey or task traditionally demands its own pipeline and its own expensive training set. The foundation-model question is whether a single pretrained representation of catalogues and images can serve as shared infrastructure, with small adaptations per task — the pattern that transformed language and vision. Photometric redshifts are a decisive test case, being indispensable, label-hungry and bound by physical law; the open question is whether physics can be built into the adaptation so that the model\'s uncertainties remain trustworthy.',
      zh: '天文产生的数据远多于带标签样本：传统上每个新巡天、新任务都要自己的流程和昂贵的训练集。基础模型的问题是：一个预训练的星表与图像表示能否成为共享基础设施、每个任务只做小适配——即改变语言与视觉领域的那个模式。光度红移是决定性的试验场：它不可或缺、吃标签、又受物理定律约束；开放问题是能否把物理嵌入适配过程，使模型的不确定度依然可信。',
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
      en: 'Astronomical measurement is ultimately limited by the quantum nature of light: photons lost between telescopes, and the information ceiling on a fixed photon budget. Quantum information theory asks whether entanglement and collective measurements can lift these ceilings — turning lossless, arbitrarily long-baseline interferometers from impossibility into engineering, and extracting more sky information per photon than any classical strategy. Lensing time delays and closure phases are concrete observables where such quantum advantages can be posed sharply.',
      zh: '天文测量最终受光的量子本性限制：望远镜之间损失的光子，以及固定光子预算的信息上限。量子信息理论问的是：纠缠与集体测量能否抬升这些上限——把无损、任意长基线的干涉仪从不可能变成工程问题，并从每个光子中提取多于任何经典策略的天空信息。透镜时间延迟与闭合相位，是能把这类量子优势提得尖锐的具体观测量。',
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