// ============================================================
// 摄影作品 —— 把图片放进 public/photos/，在下面登记即可。
// src 为网格小图；hdr 为带 gain map 的 Ultra HDR 原图（灯箱加载，
// 支持 HDR 的浏览器/屏幕会自动应用高光层；普通屏幕回落到 SDR）。
// HDR 原图已去除 EXIF/GPS、保留 gain map 与 ICC；桌面原图不动。
// 选片来自 Desktop/Photo/processed（2026 Banff / Hexi / Victoria）。
// ============================================================

import type { Localized } from './profile';

export interface Photo {
  src: string;
  hdr?: string;
  alt: Localized;
  caption?: Localized;
}

export const photos: Photo[] = [
  {
    src: '/photos/banff-mirror.jpg',
    hdr: '/photos/hdr/banff-mirror.jpg',
    alt: {
      en: 'Snow peaks doubled in the still water of a mountain lake',
      zh: '雪山倒影折进平静的高山湖面',
    },
    caption: { en: 'Still water, doubled mountains.', zh: '静水把山影折成双份。' },
  },
  {
    src: '/photos/banff-stars.jpg',
    hdr: '/photos/hdr/banff-stars.jpg',
    alt: {
      en: 'Star-filled night sky above a rocky riverbed and silhouetted pines',
      zh: '河滩乱石与松树剪影之上的满天星斗',
    },
    caption: { en: 'Stars over the river stones.', zh: '河滩乱石之上的星空。' },
  },
  {
    src: '/photos/banff-chipmunk.jpg',
    hdr: '/photos/hdr/banff-chipmunk.jpg',
    alt: {
      en: 'A chipmunk pausing on a fallen log',
      zh: '倒木上停顿的花栗鼠',
    },
    caption: { en: 'A chipmunk pauses on a fallen log.', zh: '倒木上停顿的花栗鼠。' },
  },
  {
    src: '/photos/banff-grizzly.jpg',
    hdr: '/photos/hdr/banff-grizzly.jpg',
    alt: {
      en: 'A grizzly bear grazing on grass, undisturbed',
      zh: '旁若无人觅食的灰熊',
    },
    caption: { en: 'Grizzly grazing, undisturbed.', zh: '旁若无人觅食的灰熊。' },
  },
  {
    src: '/photos/banff-train.jpg',
    hdr: '/photos/hdr/banff-train.jpg',
    alt: {
      en: 'A freight train passing below Castle Mountain',
      zh: '城堡山下驶过的货运列车',
    },
    caption: { en: 'A freight train below Castle Mountain.', zh: '城堡山下的货运列车。' },
  },
  {
    src: '/photos/banff-bench.jpg',
    hdr: '/photos/hdr/banff-bench.jpg',
    alt: {
      en: 'Two people on a bench beneath a towering rocky peak',
      zh: '高耸岩峰下长椅上的两个人',
    },
    caption: { en: 'Two people, one very big mountain.', zh: '两个人，和一座很大的山。' },
  },
  {
    src: '/photos/hexi-salt-rails.jpg',
    hdr: '/photos/hdr/hexi-salt-rails.jpg',
    alt: {
      en: 'Old rails leading into the mirror-like Chaka Salt Lake',
      zh: '茶卡盐湖：旧铁轨伸进天空之镜',
    },
    caption: { en: 'Rails into the sky mirror, Chaka Salt Lake.', zh: '茶卡盐湖：铁轨伸进天空之镜。' },
  },
  {
    src: '/photos/hexi-stupas.jpg',
    hdr: '/photos/hdr/hexi-stupas.jpg',
    alt: {
      en: 'A row of white Buddhist stupas against a pale sky',
      zh: '淡色天空下一字排开的白塔',
    },
    caption: { en: 'White stupas in a row.', zh: '一字排开的白塔。' },
  },
  {
    src: '/photos/hexi-danxia.jpg',
    hdr: '/photos/hdr/hexi-danxia.jpg',
    alt: {
      en: 'Layered Danxia ridges glowing in late afternoon light',
      zh: '暮光里发亮的丹霞层脊',
    },
    caption: { en: 'Danxia ridges in late light.', zh: '暮光里的丹霞脊线。' },
  },
  {
    src: '/photos/hexi-goose.jpg',
    hdr: '/photos/hdr/hexi-goose.jpg',
    alt: {
      en: 'A goose coming in to land on glassy water, reflection below',
      zh: '雁落镜面，倒影相随',
    },
    caption: { en: 'A goose lands on glass.', zh: '雁落镜面。' },
  },
  {
    src: '/photos/victoria-orcas.jpg',
    hdr: '/photos/hdr/victoria-orcas.jpg',
    alt: {
      en: 'Orcas surfacing side by side off Victoria',
      zh: '维多利亚外海并肩浮出的虎鲸',
    },
    caption: { en: 'Orcas surfacing off Victoria.', zh: '维多利亚外海浮出的虎鲸。' },
  },
  {
    src: '/photos/victoria-empress.jpg',
    hdr: '/photos/hdr/victoria-empress.jpg',
    alt: {
      en: 'The Empress hotel facade with a Canadian flag above',
      zh: '旗帜之下的帝后酒店立面',
    },
    caption: { en: 'The Empress under a flag.', zh: '旗帜下的帝后酒店。' },
  },
];