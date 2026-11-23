// ============================================================
// 个人信息 —— 直接修改下面的字段即可，网站会自动更新。
// 留空（''）的字段不会在页面上显示。
// { en, zh } 表示双语内容，两种语言都要填写。
// ============================================================

export interface Localized {
  en: string;
  zh: string;
}

export const profile = {
  name: { en: 'Shiming Gu', zh: '顾时铭' } as Localized,

  role: { en: 'T.D. Lee Prize Fellow', zh: '李政道博士后学者' } as Localized,

  affiliation: {
    en: 'Tsung-Dao Lee Institute, Shanghai Jiao Tong University',
    zh: '上海交通大学李政道研究所',
  } as Localized,

  location: { en: 'Shanghai, China', zh: '中国 上海' } as Localized,

  // TODO: 填写公开联系邮箱
  email: '',

  // 个人主页链接（留空则不显示）
  links: {
    github: 'https://github.com/ShimingGu',
    linkedin: 'https://www.linkedin.com/in/shiming-gu-00b76416b/',
    scholar: '', // TODO: Google Scholar 主页链接
    ads: 'https://scixplorer.org/search?p=1&q=docs%28library%2Ft_AyUoHWSY2ghMtIurEY5A%29&sort=date+desc&d=astrophysics',
  },

  // 个人简介：两段，\n\n 分段；首页按段渲染
  bio: {
    en: 'I am 顾时铭, romanised and western-name-order-applied as Shiming Gu. 时 Shi means time, and 铭 Ming means imprint — hence the title of my PhD thesis, "[The Cosmic Imprint of Time: …](https://open.library.ubc.ca/media/stream/pdf/24/1.0455542/3)".\n\nI completed my PhD in Astronomy from the University of British Columbia in 2026 with [Ludovic van Waerbeke](https://phas.ubc.ca/~waerbeke/index.html), and spent several months as a research associate at the Herzberg Astronomy and Astrophysics Research Centre, Canadian National Research Council. I am currently a T.D. Lee Prize Fellow in the Astronomy and Astrophysics Division, Tsung-Dao Lee Institute, Shanghai Jiao Tong University. Most of my work revolves around the modelling, observation and pipeline systematics of weak gravitational lensing surveys; I also bring advanced techniques such as foundation models, post-training and quantum information tools into astronomical applications.\n\nOutside research I climb mountains, take photographs, write a little Classical Chinese poetry and Science Fiction, and sometimes walk from UBC to Horseshoe Bay😏.',
    zh: '我2026年博士毕业于加拿大哥伦比亚大学（导师 [Ludovic van Waerbeke](https://phas.ubc.ca/~waerbeke/index.html)），之后在加拿大国家研究委员会赫茨伯格天文与天体物理研究中心做了短期的项目研究助理，现在在上海交通大学李政道研究所工作。我大部分工作围绕弱引力透镜巡天实验的建模、观测与管线系统误差，同时也把基础模型、后训练、量子信息等先进方法带入天文应用。\n\n研究之外，我偶尔会登山、拍照、写一点诗词和科幻，或者从浦东徒步走到虹桥😏。',
  } as Localized,

  // 研究兴趣标签（会显示在首页）
  interests: [
    { en: 'Weak lensing', zh: '弱引力透镜' },
    { en: 'Large-scale structure', zh: '大尺度结构' },
    { en: 'Photometric redshifts', zh: '光度红移' },
    { en: 'Foundation models', zh: '基础模型' },
    { en: 'Astrostatistics', zh: '天文统计' },
  ] as Localized[],

  // CV 文件：把 PDF 放到 public/cv.pdf 后，把这里改为 '/cv.pdf'
  cv: '',
};