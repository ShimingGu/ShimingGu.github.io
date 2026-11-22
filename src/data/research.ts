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
  papersLabel?: Localized;
}

export const topics: Topic[] = [
  {
    id: 'lss',
    title: {
      en: 'The large-scale structure of the Universe',
      zh: '宇宙大尺度结构',
    },
    summary: {
      en: 'Gravity draws galaxies into a vast "cosmic web" of clusters, filaments and voids. How clumpy this web is, and how its clumps grow over cosmic time, records what the Universe is made of — from dark matter to dark energy. The subtle bending of light by gravity serves as a scale to count and weigh these structures; reading that scale reliably is the challenge.',
      zh: '引力把星系聚成一张由星系团、纤维结构和空洞组成的巨大"宇宙网"。这张网有多结块、结块如何随宇宙时间长大，记录了宇宙由什么构成——从暗物质到暗能量。引力对光线的微弱弯折可以当作一杆秤，去数清、称准这些结构；而如何可靠地读数，正是问题所在。',
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
        label: { en: 'Intrinsic-alignment stability & diagnostics', zh: '内禀对齐的稳定性与诊断' },
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
      en: 'Sky surveys photograph billions of galaxies, and tiny distortions in those images carry cosmological information. But instruments, the atmosphere and the galaxies themselves leave fingerprints that can mimic or hide the signal. So before we trust the cosmological conclusions, we need diagnostic tools that separate genuine cosmic signals from contamination.',
      zh: '巡天给数十亿星系拍照，图像里极微小的形变携带着宇宙学信息。但仪器、大气和星系自身也会留下指纹，可能模仿或掩盖真实信号。于是在我们相信宇宙学结论之前，我们需要通过诊断工具把真正的宇宙信号与污染分开。',
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
      en: 'Foundation models',
      zh: '基础模型',
    },
    summary: {
      en: 'The recipe behind large language models — pretrain on enormous data, then adapt with a little targeted training — is arriving in astronomy. Through targeted training, general-purpose foundation models can learn to read survey catalogues and images starting from physical intuition, and reason toward astronomical applications.',
      zh: '大语言模型背后的配方——先在海量数据上预训练、再用少量针对性训练适配——这一工作方式正在进入天文。通过针对性训练，可以使得通用基础模型能够从物理直觉出发去阅读巡天星表和图像，以进行以天文应用目的的推理。',
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
      en: 'Whether it is the phase of an interference fringe or the arrival-time difference between unresolved lensed images, the information astronomers want is a path-length difference encoded in the quantum state of light — and the sources are often so faint that every photon counts. Classical detection reads light as intensity and throws away the correlations that carry this information, so loss and photon budgets set hard ceilings. Quantum information processing reframes the measurement: entanglement, quantum memories and collective measurements turn the discarded correlations into resources, and photon-optimal algorithms reach the provable minimum cost of reading a phase or a delay. Interferometric imaging and microlensing time delays are two faces of one question — how much sky information can a single photon carry, and how should it be read?',
      zh: '无论是干涉条纹的相位，还是无法分辨的透镜像之间的到达时间差，天文学家想要的信息都是编码在光量子态里的光程差——而光源往往暗到每一个光子都珍贵。经典探测把光读成强度，丢掉了携带这些信息的光子间关联，于是损耗与光子预算设下硬上限。量子信息处理重新表述这种测量：纠缠、量子存储与集体测量把被丢弃的关联变成资源，光子最优的算法则达到读取一个相位或一个延迟的可证明最小代价。干涉成像与微透镜时间延迟是同一个问题的两面——一个光子能携带多少天空信息，又该如何读取？',
    },
    technical: {
      en: 'The unifying framework is quantum estimation of photonic parameters: fringe phases and lensing time delays are both path-length information imprinted on quantum states of light, and their extraction obeys quantum, not classical, resource limits. The interferometry line removes the loss ceiling with repeaters and memories and beats sequential detection photon-for-photon via collective measurements; the time-delay line saturates a provable lower bound on the photons needed to resolve a delay, using exponentially fewer photons than classical schemes. The two connect concretely: photon-optimal delay estimation is itself a calibration tool for the optical interferometers the first line aims to build.',
      zh: '统一框架是光子参数的量子估计：条纹相位与透镜时间延迟都是印在光量子态上的光程信息，其提取服从量子而非经典的资源极限。干涉一条线用中继与存储移除损耗上限、用集体测量按光子数胜过逐个探测；时间延迟一条线以比经典方案指数级更少的光子，饱和分辨延迟所需光子数的可证明下界。两条线还有具体接口：光子最优的延迟估计本身，就是第一条线所要建造的光学干涉仪的校准工具。',
    },
    tags: ['Quantum limits', 'Interferometry', 'Time delays'],
    papersLabel: { en: 'Related papers', zh: '相关论文' },
    papers: [
      {
        label: { en: 'Lensing time delays with quantum information processing', zh: '量子信息处理测量透镜时间延迟' },
        arxiv: '2510.07898',
      },
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