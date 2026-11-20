// ============================================================
// 摄影作品 —— 把图片放进 public/photos/，在下面登记即可。
// src  = 网格小图（SDR）
// full = 灯箱加载的全分辨率图（public/photos/full/）
// hdr  = true 表示该全分辨率图带 gain map（Ultra HDR）：
//        支持 HDR 的浏览器/屏幕自动应用高光层，普通屏幕回落 SDR。
// 所有发布图已去除 EXIF/GPS；桌面原图不动。
// 选片来自 Desktop/Photo/processed 五个文件夹，盲挑 24 张。
// ============================================================

import type { Localized } from './profile';

export interface Photo {
  src: string;
  full?: string;
  hdr?: boolean;
  alt: Localized;
  caption?: Localized;
}

export const photos: Photo[] = [
  {
    src: '/photos/van-cottontail.jpg',
    full: '/photos/full/van-cottontail.jpg',
    alt: { en: 'A cottontail rabbit sitting alert on green grass', zh: '绿草地上警觉坐定的棉尾兔' },
    caption: { en: 'A cottontail freezes on the lawn.', zh: '草坪上定住的棉尾兔。' },
  },
  {
    src: '/photos/van-maple-street.jpg',
    full: '/photos/full/van-maple-street.jpg',
    hdr: true,
    alt: { en: 'A street tunnel of red maples with a sunstar through the canopy', zh: '红枫树冠夹道的街道，阳光透过叶隙成星芒' },
    caption: { en: 'Red maples, sunstar, one street.', zh: '红枫、星芒、一条街。' },
  },
  {
    src: '/photos/van-orange-row.jpg',
    full: '/photos/full/van-orange-row.jpg',
    alt: { en: 'A straight row of orange autumn trees along a quiet street', zh: '安静街道旁一排笔直的橙色秋树' },
    caption: { en: 'An orange colonnade into autumn.', zh: '一排橙色树廊走进秋天。' },
  },
  {
    src: '/photos/van-tulips.jpg',
    full: '/photos/full/van-tulips.jpg',
    alt: { en: 'Red tulips above a bed of purple muscari', zh: '紫色葡萄风信子上方的红郁金香' },
    caption: { en: 'Tulips over muscari.', zh: '郁金香与葡萄风信子。' },
  },
  {
    src: '/photos/van-eagle.jpg',
    full: '/photos/full/van-eagle.jpg',
    alt: { en: 'An eagle soaring against a clear blue sky', zh: '纯蓝天空中翱翔的鹰' },
    caption: { en: 'An eagle crosses the blue.', zh: '鹰掠过纯蓝。' },
  },
  {
    src: '/photos/van-fireworks.jpg',
    full: '/photos/full/van-fireworks.jpg',
    hdr: true,
    alt: { en: 'Two firework bursts, orange and gold, over a dark bay', zh: '暗色海湾上空橙金双焰' },
    caption: { en: 'Two bursts over the bay.', zh: '海湾上空的双焰。' },
  },
  {
    src: '/photos/yel-mist-tetons.jpg',
    full: '/photos/full/yel-mist-tetons.jpg',
    hdr: true,
    alt: { en: 'Mist layering the Teton peaks above dark pines', zh: '雾把提顿峰峦叠成层次，下方是深色松林' },
    caption: { en: 'Mist stacks the Tetons into layers.', zh: '雾把提顿山叠成层次。' },
  },
  {
    src: '/photos/yel-chapel-window.jpg',
    full: '/photos/full/yel-chapel-window.jpg',
    alt: { en: 'A cross and the Tetons framed inside a chapel window', zh: '教堂窗框里的十字架与提顿山' },
    caption: { en: 'A cross framed in the chapel window.', zh: '教堂窗框里的十字架。' },
  },
  {
    src: '/photos/yel-barn.jpg',
    full: '/photos/full/yel-barn.jpg',
    alt: { en: 'A weathered wooden barn below the Teton range', zh: '提顿山脉下风化的木谷仓' },
    caption: { en: 'An old barn below the Tetons.', zh: '提顿山下的老谷仓。' },
  },
  {
    src: '/photos/yel-milkyway.jpg',
    full: '/photos/full/yel-milkyway.jpg',
    alt: { en: 'The Milky Way rising over a golden field at night', zh: '夜间金色草甸上升起的银河' },
    caption: { en: 'The Milky Way over a golden field.', zh: '金色草甸上的银河。' },
  },
  {
    src: '/photos/yel-bison-jam.jpg',
    full: '/photos/full/yel-bison-jam.jpg',
    hdr: true,
    alt: { en: 'A bison walking down the road between stopped cars', zh: '野牛在停摆的车流之间沿公路走来' },
    caption: { en: 'Bison jam: the road belongs to them.', zh: '野牛堵路：路权归它们。' },
  },
  {
    src: '/photos/yel-bison-sparring.jpg',
    full: '/photos/full/yel-bison-sparring.jpg',
    hdr: true,
    alt: { en: 'Two bison locking horns in a grassy field', zh: '草地上顶角相持的两头野牛' },
    caption: { en: 'Two bison lock horns.', zh: '两头野牛顶角相持。' },
  },
  {
    src: '/photos/yel-prismatic.jpg',
    full: '/photos/full/yel-prismatic.jpg',
    hdr: true,
    alt: { en: 'Grand Prismatic Spring blue water and orange rims with tiny figures on the boardwalk', zh: '大棱镜温泉的蓝水橙边，栈道上的人影作比例尺' },
    caption: { en: 'Grand Prismatic, boardwalk scale.', zh: '大棱镜温泉，栈道上的人影作比例尺。' },
  },
  {
    src: '/photos/yel-geyser-sunset.jpg',
    full: '/photos/full/yel-geyser-sunset.jpg',
    hdr: true,
    alt: { en: 'Geyser steam glowing against a setting sun', zh: '间歇泉蒸汽在落日里发亮' },
    caption: { en: 'Geyser steam catches the sunset.', zh: '间歇泉的蒸汽接住落日。' },
  },
  {
    src: '/photos/banff-mirror.jpg',
    full: '/photos/full/banff-mirror.jpg',
    hdr: true,
    alt: { en: 'Snow peaks doubled in the still water of a mountain lake', zh: '雪山倒影折进平静的高山湖面' },
    caption: { en: 'Still water, doubled mountains.', zh: '静水把山影折成双份。' },
  },
  {
    src: '/photos/banff-stars.jpg',
    full: '/photos/full/banff-stars.jpg',
    hdr: true,
    alt: { en: 'Star-filled night sky above a rocky riverbed and silhouetted pines', zh: '河滩乱石与松树剪影之上的满天星斗' },
    caption: { en: 'Stars over the river stones.', zh: '河滩乱石之上的星空。' },
  },
  {
    src: '/photos/banff-rays.jpg',
    full: '/photos/full/banff-rays.jpg',
    alt: { en: 'Crepuscular rays breaking over a forested valley', zh: '林谷上空破云而出的光束' },
    caption: { en: 'Light rays over the valley.', zh: '谷地上空的光束。' },
  },
  {
    src: '/photos/banff-grizzly.jpg',
    full: '/photos/full/banff-grizzly.jpg',
    hdr: true,
    alt: { en: 'A grizzly bear grazing on grass, undisturbed', zh: '旁若无人觅食的灰熊' },
    caption: { en: 'Grizzly grazing, undisturbed.', zh: '旁若无人觅食的灰熊。' },
  },
  {
    src: '/photos/banff-train.jpg',
    full: '/photos/full/banff-train.jpg',
    hdr: true,
    alt: { en: 'A freight train passing below Castle Mountain', zh: '城堡山下驶过的货运列车' },
    caption: { en: 'A freight train below Castle Mountain.', zh: '城堡山下的货运列车。' },
  },
  {
    src: '/photos/banff-river-bend.jpg',
    full: '/photos/full/banff-river-bend.jpg',
    hdr: true,
    alt: { en: 'A milky green glacial river curving between pine banks below snow peaks', zh: '雪岭下松岸之间弯行的乳绿色冰川河' },
    caption: { en: 'The Bow River runs glacial milk-green.', zh: '弓河淌着冰川乳绿。' },
  },
  {
    src: '/photos/banff-hoodoos.jpg',
    full: '/photos/full/banff-hoodoos.jpg',
    hdr: true,
    alt: { en: 'Sandstone hoodoos with flat caprocks against a pale blue sky', zh: '淡蓝天空下顶着扁平石帽的砂岩土柱' },
    caption: { en: 'Caprock hoodoos in the badlands.', zh: '劣地上顶着石帽的土柱。' },
  },
  {
    src: '/photos/garibaldi-larch-valley.jpg',
    full: '/photos/full/garibaldi-larch-valley.jpg',
    alt: { en: 'A mountain valley of golden larches with a pale river below', zh: '金色落叶松的山谷，下方一条浅色河流' },
    caption: { en: 'Larches turn the valley gold.', zh: '落叶松把山谷染金。' },
  },
  {
    src: '/photos/garibaldi-sunset-river.jpg',
    full: '/photos/full/garibaldi-sunset-river.jpg',
    hdr: true,
    alt: { en: 'A braided river flat under a burning sunset sky between ridges', zh: '燃烧晚霞下两岭之间的辫状河滩' },
    caption: { en: 'A braided river under a burning sky.', zh: '燃烧天空下的辫状河。' },
  },
  {
    src: '/photos/garibaldi-fog-spruce.jpg',
    full: '/photos/full/garibaldi-fog-spruce.jpg',
    hdr: true,
    alt: { en: 'A lone spruce standing in thick fog', zh: '浓雾中独立的一棵云杉' },
    caption: { en: 'One spruce in the fog.', zh: '雾里一棵云杉。' },
  },
  {
    src: '/photos/hexi-salt-rails.jpg',
    full: '/photos/full/hexi-salt-rails.jpg',
    hdr: true,
    alt: { en: 'Old rails leading into the mirror-like Chaka Salt Lake', zh: '茶卡盐湖：旧铁轨伸进天空之镜' },
    caption: { en: 'Rails into the sky mirror, Chaka Salt Lake.', zh: '茶卡盐湖：铁轨伸进天空之镜。' },
  },
  {
    src: '/photos/hexi-stupas.jpg',
    full: '/photos/full/hexi-stupas.jpg',
    hdr: true,
    alt: { en: 'A row of white Buddhist stupas against a pale sky', zh: '淡色天空下一字排开的白塔' },
    caption: { en: 'White stupas in a row.', zh: '一字排开的白塔。' },
  },
  {
    src: '/photos/hexi-danxia.jpg',
    full: '/photos/full/hexi-danxia.jpg',
    hdr: true,
    alt: { en: 'Layered Danxia ridges glowing in late afternoon light', zh: '暮光里发亮的丹霞层脊' },
    caption: { en: 'Danxia ridges in late light.', zh: '暮光里的丹霞脊线。' },
  },
  {
    src: '/photos/hexi-goose.jpg',
    full: '/photos/full/hexi-goose.jpg',
    hdr: true,
    alt: { en: 'A goose coming in to land on glassy water, reflection below', zh: '雁落镜面，倒影相随' },
    caption: { en: 'A goose lands on glass.', zh: '雁落镜面。' },
  },
  {
    src: '/photos/victoria-orcas.jpg',
    full: '/photos/full/victoria-orcas.jpg',
    hdr: true,
    alt: { en: 'Orcas surfacing side by side off Victoria', zh: '维多利亚外海并肩浮出的虎鲸' },
    caption: { en: 'Orcas surfacing off Victoria.', zh: '维多利亚外海浮出的虎鲸。' },
  },
  {
    src: '/photos/victoria-empress.jpg',
    full: '/photos/full/victoria-empress.jpg',
    hdr: true,
    alt: { en: 'The Empress hotel facade with a Canadian flag above', zh: '旗帜之下的帝后酒店立面' },
    caption: { en: 'The Empress under a flag.', zh: '旗帜下的帝后酒店。' },
  },
];