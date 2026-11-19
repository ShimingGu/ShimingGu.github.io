// ============================================================
// 摄影作品 —— 把图片放进 public/photos/，在下面登记即可。
// src 以 /photos/ 开头；caption 选填。
// 当前两张为旧站样片，替换成你自己的作品即可。
// ============================================================

import type { Localized } from './profile';

export interface Photo {
  src: string;
  alt: Localized;
  caption?: Localized;
}

export const photos: Photo[] = [
  {
    src: '/photos/ss01.jpg',
    alt: {
      en: 'Calm harbour at dusk with a crescent moon, birds and silhouetted cranes',
      zh: '暮色中的平静港湾，新月、飞鸟与起重机剪影',
    },
    caption: {
      en: 'Dusk over the harbour.',
      zh: '港湾暮色。',
    },
  },
  {
    src: '/photos/ss02.jpg',
    alt: {
      en: 'Dramatic night clouds above an illuminated vessel and harbour lights',
      zh: '灯火通明的船只与港口灯光上空戏剧性的夜云',
    },
    caption: {
      en: 'Night clouds over the shipyard.',
      zh: '船厂上空的夜云。',
    },
  },
  {
    src: '/photos/ss03.jpg',
    alt: {
      en: 'The ferry Pride of the Tyne in warm evening light',
      zh: '暖色夕照中的渡轮 Pride of the Tyne',
    },
    caption: {
      en: 'Golden hour on the Tyne.',
      zh: '泰恩河上的黄金时刻。',
    },
  },
];