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

  // TODO: 填写当前职位，例如 'PhD Candidate' / '博士研究生'
  role: { en: '', zh: '' } as Localized,

  // TODO: 填写当前单位，例如 'University of British Columbia' / '英属哥伦比亚大学'
  affiliation: { en: '', zh: '' } as Localized,

  // TODO: 填写所在地（可选），例如 'Vancouver, Canada' / '加拿大 温哥华'
  location: { en: '', zh: '' } as Localized,

  // TODO: 填写公开联系邮箱
  email: '',

  // 个人主页链接（留空则不显示）
  links: {
    github: 'https://github.com/ShimingGu',
    scholar: '', // TODO: Google Scholar 主页链接
    orcid: '', // TODO: ORCID 链接
    arxiv: 'https://arxiv.org/search/?searchtype=author&query=Gu%2C+Shiming',
  },

  // TODO: 个人简介，按需改写
  bio: {
    en: 'I am a cosmologist working on weak gravitational lensing, large-scale structure, and AI methods for cosmological surveys.',
    zh: '我从事宇宙学研究，方向包括弱引力透镜、大尺度结构，以及面向巡天数据的人工智能方法。',
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