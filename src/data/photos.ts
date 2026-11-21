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
    src: '/photos/paris-pyramid-night.jpg',
    full: '/photos/full/paris-pyramid-night.jpg',
    hdr: true,
    alt: { en: 'The Louvre pyramid glowing symmetrically at night', zh: '夜色里对称发光的卢浮宫玻璃金字塔' },
    caption: { en: 'The pyramid holds the night symmetric.', zh: '夜色里对称的玻璃金字塔。' },
  },
  {
    src: '/photos/bremen-organ.jpg',
    full: '/photos/full/bremen-organ.jpg',
    hdr: true,
    alt: { en: 'Cathedral organ and rose window glowing in warm gold with chandeliers', zh: '暖金光晕中的教堂管风琴与玫瑰窗，吊灯点缀' },
    caption: { en: 'Organ and rose window in warm gold.', zh: '暖金里的管风琴与玫瑰窗。' },
  },
  {
    src: '/photos/banff-rays.jpg',
    full: '/photos/full/banff-rays.jpg',
    alt: { en: 'Crepuscular rays breaking over a forested valley', zh: '林谷上空破云而出的光束' },
    caption: { en: 'Light rays over the valley.', zh: '谷地上空的光束。' },
  },
  {
    src: '/photos/yel-geyser-sunset.jpg',
    full: '/photos/full/yel-geyser-sunset.jpg',
    hdr: true,
    alt: { en: 'Geyser steam glowing against a setting sun', zh: '间歇泉蒸汽在落日里发亮' },
    caption: { en: 'Geyser steam catches the sunset.', zh: '间歇泉的蒸汽接住落日。' },
  },
  {
    src: '/photos/banff-river-bend.jpg',
    full: '/photos/full/banff-river-bend.jpg',
    hdr: true,
    alt: { en: 'A milky green glacial river curving between pine banks below snow peaks', zh: '雪岭下松岸之间弯行的乳绿色冰川河' },
    caption: { en: 'The Bow River runs glacial milk-green.', zh: '弓河淌着冰川乳绿。' },
  },
  {
    src: '/photos/garibaldi-larch-valley.jpg',
    full: '/photos/full/garibaldi-larch-valley.jpg',
    alt: { en: 'A mountain valley of golden larches with a pale river below', zh: '金色落叶松的山谷，下方一条浅色河流' },
    caption: { en: 'Larches turn the valley gold.', zh: '落叶松把山谷染金。' },
  },
  {
    src: '/photos/yel-prismatic.jpg',
    full: '/photos/full/yel-prismatic.jpg',
    hdr: true,
    alt: { en: 'Grand Prismatic Spring blue water and orange rims with tiny figures on the boardwalk', zh: '大棱镜温泉的蓝水橙边，栈道上的人影作比例尺' },
    caption: { en: 'Grand Prismatic, boardwalk scale.', zh: '大棱镜温泉，栈道上的人影作比例尺。' },
  },
  {
    src: '/photos/van-aurora.jpg',
    full: '/photos/full/van-aurora.jpg',
    hdr: true,
    alt: { en: 'Yellow night glow ribbons above a dark treeline with stars', zh: '暗树线之上带星星的黄色夜光带' },
    caption: { en: 'Night glow over the treeline.', zh: '树线之上的夜光。' },
  },
  {
    src: '/photos/hexi-goose.jpg',
    full: '/photos/full/hexi-goose.jpg',
    hdr: true,
    alt: { en: 'A goose coming in to land on glassy water, reflection below', zh: '雁落镜面，倒影相随' },
    caption: { en: 'A goose lands on glass.', zh: '雁落镜面。' },
  },
  {
    src: '/photos/van-blossom-sunstar.jpg',
    full: '/photos/full/van-blossom-sunstar.jpg',
    alt: { en: 'A sunstar shining through pink cherry blossoms', zh: '粉色樱花冠里透出的太阳星芒' },
    caption: { en: 'Sunstar through the cherry canopy.', zh: '樱花冠里透出的星芒。' },
  },
  {
    src: '/photos/garibaldi-fog-spruce.jpg',
    full: '/photos/full/garibaldi-fog-spruce.jpg',
    hdr: true,
    alt: { en: 'A lone spruce standing in thick fog', zh: '浓雾中独立的一棵云杉' },
    caption: { en: 'One spruce in the fog.', zh: '雾里一棵云杉。' },
  },
  {
    src: '/photos/yel-milkyway.jpg',
    full: '/photos/full/yel-milkyway.jpg',
    alt: { en: 'The Milky Way rising over a golden field at night', zh: '夜间金色草甸上升起的银河' },
    caption: { en: 'The Milky Way over a golden field.', zh: '金色草甸上的银河。' },
  },
  {
    src: '/photos/bremen-windmill.jpg',
    full: '/photos/full/bremen-windmill.jpg',
    alt: { en: 'An old windmill above a green bank beside calm water', zh: '静水旁绿坡上的老风车' },
    caption: { en: 'A windmill keeps the water company.', zh: '风车守着水面。' },
  },
  {
    src: '/photos/yel-bison-sparring.jpg',
    full: '/photos/full/yel-bison-sparring.jpg',
    hdr: true,
    alt: { en: 'Two bison locking horns in a grassy field', zh: '草地上顶角相持的两头野牛' },
    caption: { en: 'Two bison lock horns.', zh: '两头野牛顶角相持。' },
  },
  {
    src: '/photos/hexi-crescent-lake.jpg',
    full: '/photos/full/hexi-crescent-lake.jpg',
    hdr: true,
    alt: { en: 'Crescent Lake curled among pink sand dunes with pavilions and green reeds', zh: '粉色沙丘间弯着一牙月牙泉，亭台与绿苇环绕' },
    caption: { en: 'Crescent Lake curled in the singing sands.', zh: '鸣沙山里弯着一牙月牙泉。' },
  },
  {
    src: '/photos/victoria-empress.jpg',
    full: '/photos/full/victoria-empress.jpg',
    hdr: true,
    alt: { en: 'The Empress hotel facade with a Canadian flag above', zh: '旗帜之下的帝后酒店立面' },
    caption: { en: 'The Empress under a flag.', zh: '旗帜下的帝后酒店。' },
  },
  {
    src: '/photos/banff-hoodoos.jpg',
    full: '/photos/full/banff-hoodoos.jpg',
    hdr: true,
    alt: { en: 'Sandstone hoodoos with flat caprocks against a pale blue sky', zh: '淡蓝天空下顶着扁平石帽的砂岩土柱' },
    caption: { en: 'Caprock hoodoos in the badlands.', zh: '劣地上顶着石帽的土柱。' },
  },
  {
    src: '/photos/van-maple-street.jpg',
    full: '/photos/full/van-maple-street.jpg',
    hdr: true,
    alt: { en: 'A street tunnel of red maples with a sunstar through the canopy', zh: '红枫树冠夹道的街道，阳光透过叶隙成星芒' },
    caption: { en: 'Red maples, sunstar, one street.', zh: '红枫、星芒、一条街。' },
  },
  {
    src: '/photos/yel-mist-tetons.jpg',
    full: '/photos/full/yel-mist-tetons.jpg',
    hdr: true,
    alt: { en: 'Mist layering the Teton peaks above dark pines', zh: '雾把提顿峰峦叠成层次，下方是深色松林' },
    caption: { en: 'Mist stacks the Tetons into layers.', zh: '雾把提顿山叠成层次。' },
  },
  {
    src: '/photos/paris-golden-statue.jpg',
    full: '/photos/full/paris-golden-statue.jpg',
    alt: { en: 'A gilded quadriga statue and French flag above the Grand Palais', zh: '大皇宫顶上的金色四马战车与法国国旗' },
    caption: { en: 'Gold quadriga over the Grand Palais.', zh: '大皇宫顶上的金色四马战车。' },
  },
  {
    src: '/photos/yel-chipmunk.jpg',
    full: '/photos/full/yel-chipmunk.jpg',
    alt: { en: 'A chipmunk on a log with a mouthful of seeds, green bokeh behind', zh: '倒木上塞了一嘴种子的花栗鼠，背后绿色虚化' },
    caption: { en: 'A chipmunk with a mouthful of seeds.', zh: '塞了一嘴种子的花栗鼠。' },
  },
  {
    src: '/photos/van-fireworks-purple.jpg',
    full: '/photos/full/van-fireworks-purple.jpg',
    hdr: true,
    alt: { en: 'Purple firework bursts doubled in the bay with boat silhouettes', zh: '紫色烟花在海湾倒影里折成双份，船影点缀' },
    caption: { en: 'Purple bursts, doubled in the bay.', zh: '紫焰在海湾里折成双份。' },
  },
  {
    src: '/photos/banff-mirror.jpg',
    full: '/photos/full/banff-mirror.jpg',
    hdr: true,
    alt: { en: 'Snow peaks doubled in the still water of a mountain lake', zh: '雪山倒影折进平静的高山湖面' },
    caption: { en: 'Still water, doubled mountains.', zh: '静水把山影折成双份。' },
  },
  {
    src: '/photos/xinhuang-tunnel-mist.jpg',
    full: '/photos/full/xinhuang-tunnel-mist.jpg',
    alt: { en: 'An old railway tunnel portal under misty mountains', zh: '雾山下的旧铁路隧道口' },
    caption: { en: 'An old rail tunnel into the mist.', zh: '旧铁路隧道伸进雾里。' },
  },
  {
    src: '/photos/yel-bison-herd.jpg',
    full: '/photos/full/yel-bison-herd.jpg',
    alt: { en: 'A bison herd along a steaming river', zh: '冒着蒸汽的河边的野牛群' },
    caption: { en: 'The herd drinks where the river steams.', zh: '河面冒着蒸汽，野牛群来饮水。' },
  },
  {
    src: '/photos/garibaldi-sunset-river.jpg',
    full: '/photos/full/garibaldi-sunset-river.jpg',
    hdr: true,
    alt: { en: 'A braided river flat under a burning sunset sky between ridges', zh: '燃烧晚霞下两岭之间的辫状河滩' },
    caption: { en: 'A braided river under a burning sky.', zh: '燃烧天空下的辫状河。' },
  },
  {
    src: '/photos/hexi-salt-rails.jpg',
    full: '/photos/full/hexi-salt-rails.jpg',
    hdr: true,
    alt: { en: 'Old rails leading into the mirror-like Chaka Salt Lake', zh: '茶卡盐湖：旧铁轨伸进天空之镜' },
    caption: { en: 'Rails into the sky mirror, Chaka Salt Lake.', zh: '茶卡盐湖：铁轨伸进天空之镜。' },
  },
  {
    src: '/photos/yel-chapel-window.jpg',
    full: '/photos/full/yel-chapel-window.jpg',
    alt: { en: 'A cross and the Tetons framed inside a chapel window', zh: '教堂窗框里的十字架与提顿山' },
    caption: { en: 'A cross framed in the chapel window.', zh: '教堂窗框里的十字架。' },
  },
  {
    src: '/photos/banff-stars.jpg',
    full: '/photos/full/banff-stars.jpg',
    hdr: true,
    alt: { en: 'Star-filled night sky above a rocky riverbed and silhouetted pines', zh: '河滩乱石与松树剪影之上的满天星斗' },
    caption: { en: 'Stars over the river stones.', zh: '河滩乱石之上的星空。' },
  },
  {
    src: '/photos/paris-eiffel-autumn.jpg',
    full: '/photos/full/paris-eiffel-autumn.jpg',
    alt: { en: 'The Eiffel Tower seen through red autumn leaves', zh: '红色秋叶间隙里的埃菲尔铁塔' },
    caption: { en: 'The Eiffel Tower through October leaves.', zh: '十月红叶里的埃菲尔铁塔。' },
  },
  {
    src: '/photos/banff-grizzly.jpg',
    full: '/photos/full/banff-grizzly.jpg',
    hdr: true,
    alt: { en: 'A grizzly bear grazing on grass, undisturbed', zh: '旁若无人觅食的灰熊' },
    caption: { en: 'Grizzly grazing, undisturbed.', zh: '旁若无人觅食的灰熊。' },
  },
  {
    src: '/photos/van-tulips.jpg',
    full: '/photos/full/van-tulips.jpg',
    alt: { en: 'Red tulips above a bed of purple muscari', zh: '紫色葡萄风信子上方的红郁金香' },
    caption: { en: 'Tulips over muscari.', zh: '郁金香与葡萄风信子。' },
  },
  {
    src: '/photos/yel-barn.jpg',
    full: '/photos/full/yel-barn.jpg',
    alt: { en: 'A weathered wooden barn below the Teton range', zh: '提顿山脉下风化的木谷仓' },
    caption: { en: 'An old barn below the Tetons.', zh: '提顿山下的老谷仓。' },
  },
  {
    src: '/photos/van-gull-fight.jpg',
    full: '/photos/full/van-gull-fight.jpg',
    alt: { en: 'Two gulls confronting on rocks, one lunging with spread wings', zh: '礁石上对峙的两只海鸥，一只张翅扑上前' },
    caption: { en: 'Two gulls settle it on the rocks.', zh: '两只海鸥在礁石上解决争端。' },
  },
  {
    src: '/photos/hexi-danxia.jpg',
    full: '/photos/full/hexi-danxia.jpg',
    hdr: true,
    alt: { en: 'Layered Danxia ridges glowing in late afternoon light', zh: '暮光里发亮的丹霞层脊' },
    caption: { en: 'Danxia ridges in late light.', zh: '暮光里的丹霞脊线。' },
  },
  {
    src: '/photos/xinhuang-bridge-dusk.jpg',
    full: '/photos/full/xinhuang-bridge-dusk.jpg',
    hdr: true,
    alt: { en: 'A covered wind-and-rain bridge at dusk reflected in still water', zh: '暮色里的风雨桥映在静水中' },
    caption: { en: 'A wind-and-rain bridge at dusk.', zh: '暮色里的风雨桥。' },
  },
  {
    src: '/photos/victoria-orcas.jpg',
    full: '/photos/full/victoria-orcas.jpg',
    hdr: true,
    alt: { en: 'Orcas surfacing side by side off Victoria', zh: '维多利亚外海并肩浮出的虎鲸' },
    caption: { en: 'Orcas surfacing off Victoria.', zh: '维多利亚外海浮出的虎鲸。' },
  },
  {
    src: '/photos/lucerne-water-tower.jpg',
    full: '/photos/full/lucerne-water-tower.jpg',
    hdr: true,
    alt: { en: 'Lucerne wooden water tower and covered bridge under alpine clouds', zh: '阿尔卑斯云下的卢塞恩木水塔与廊桥' },
    caption: { en: 'Lucerne water tower under alpine clouds.', zh: '阿尔卑斯云下的卢塞恩水塔。' },
  },
  {
    src: '/photos/paris-gilded-gallery.jpg',
    full: '/photos/full/paris-gilded-gallery.jpg',
    hdr: true,
    alt: { en: 'A gilded palace gallery corridor with columns and a hanging lantern', zh: '镀金宫殿长廊，列柱与吊灯' },
    caption: { en: 'A gilded gallery walks into gold.', zh: '镀金长廊走进金色里。' },
  },
  {
    src: '/photos/banff-train.jpg',
    full: '/photos/full/banff-train.jpg',
    hdr: true,
    alt: { en: 'A freight train passing below Castle Mountain', zh: '城堡山下驶过的货运列车' },
    caption: { en: 'A freight train below Castle Mountain.', zh: '城堡山下的货运列车。' },
  },
  {
    src: '/photos/swiss-stairwell.jpg',
    full: '/photos/full/swiss-stairwell.jpg',
    hdr: true,
    alt: { en: 'Concrete stairwell geometry lit in yellow with a single figure', zh: '黄光里的混凝土楼梯几何，一个人影' },
    caption: { en: 'Concrete stairs in yellow light.', zh: '黄光里的混凝土楼梯。' },
  },
  {
    src: '/photos/hexi-stupas.jpg',
    full: '/photos/full/hexi-stupas.jpg',
    hdr: true,
    alt: { en: 'A row of white Buddhist stupas against a pale sky', zh: '淡色天空下一字排开的白塔' },
    caption: { en: 'White stupas in a row.', zh: '一字排开的白塔。' },
  },
];
