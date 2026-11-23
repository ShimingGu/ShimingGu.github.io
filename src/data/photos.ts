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
    src: '/photos/yel-prismatic.jpg',
    full: '/photos/full/yel-prismatic.jpg',
    hdr: true,
    alt: { en: 'Grand Prismatic Spring blue water and orange rims with tiny figures on the boardwalk', zh: '大棱镜温泉的蓝水橙边，栈道上的人影作比例尺' },
    caption: { en: 'Grand Prismatic, boardwalk scale.', zh: '大棱镜温泉，栈道上的人影作比例尺。' },
  },
  {
    src: '/photos/banff-grizzly.jpg',
    full: '/photos/full/banff-grizzly.jpg',
    hdr: true,
    alt: { en: 'A grizzly bear grazing on grass, undisturbed', zh: '旁若无人觅食的灰熊' },
    caption: { en: 'Grizzly grazing, undisturbed.', zh: '旁若无人觅食的灰熊。' },
  },
  {
    src: "/photos/2023-vancovuer-dsc-9301.jpg",
    full: "/photos/full/2023-vancovuer-dsc-9301.jpg",
    alt: { en: "夜里投在墙面上的一枚三角光", zh: "夜里投在墙面上的一枚三角光" },
    caption: { en: "A triangle of light on a night wall.", zh: "夜墙上一枚三角光。" },
  },
  {
    src: '/photos/banff-river-bend.jpg',
    full: '/photos/full/banff-river-bend.jpg',
    hdr: true,
    alt: { en: 'A milky green glacial river curving between pine banks below snow peaks', zh: '雪岭下松岸之间弯行的乳绿色冰川河' },
    caption: { en: 'The Bow River runs glacial milk-green.', zh: '弓河淌着冰川乳绿。' },
  },
  {
    src: "/photos/2026-hexi-dsc-0929.jpg",
    full: "/photos/full/2026-hexi-dsc-0929.jpg",
    hdr: true,
    alt: { en: "皱成布褶的橙白地层", zh: "皱成布褶的橙白地层" },
    caption: { en: "Orange strata ripple like cloth.", zh: "橙色地层皱成布。" },
  },
  {
    src: "/photos/2023-vancovuer-dsc-9813.jpg",
    full: "/photos/full/2023-vancovuer-dsc-9813.jpg",
    alt: { en: "张翅如扇落地的小鸟", zh: "张翅如扇落地的小鸟" },
    caption: { en: "A small bird lands with wings fanned.", zh: "小鸟张翅如扇落地。" },
  },
  {
    src: '/photos/van-gull-fight.jpg',
    full: '/photos/full/van-gull-fight.jpg',
    alt: { en: 'Two gulls confronting on rocks, one lunging with spread wings', zh: '礁石上对峙的两只海鸥，一只张翅扑上前' },
    caption: { en: 'Two gulls settle it on the rocks.', zh: '两只海鸥在礁石上解决争端。' },
  },
  {
    src: "/photos/2024-swiss-dsc-2896.jpg",
    full: "/photos/full/2024-swiss-dsc-2896.jpg",
    hdr: true,
    alt: { en: "雾抹去谷底的阿尔卑斯山坡", zh: "雾抹去谷底的阿尔卑斯山坡" },
    caption: { en: "Fog erases the valley floor.", zh: "雾把谷底擦掉。" },
  },
  {
    src: '/photos/van23-black-squirrel.jpg',
    full: '/photos/full/van23-black-squirrel.jpg',
    alt: { en: 'A black squirrel walking along a concrete ledge against pale bokeh', zh: '浅色虚化前在三合土墙沿行走的黑松鼠' },
    caption: { en: 'A black squirrel patrols the ledge.', zh: '黑松鼠在墙沿巡场。' },
  },
  {
    src: '/photos/van-aurora.jpg',
    full: '/photos/full/van-aurora.jpg',
    hdr: true,
    alt: { en: 'Yellow night glow ribbons above a dark treeline with stars', zh: '暗树线之上带星星的黄色夜光带' },
    caption: { en: 'Night glow over the treeline.', zh: '树线之上的夜光。' },
  },
  {
    src: "/photos/2023-vancovuer-dsc-8581.jpg",
    full: "/photos/full/2023-vancovuer-dsc-8581.jpg",
    alt: { en: "宽绿叶面上托着的水珠", zh: "宽绿叶面上托着的水珠" },
    caption: { en: "Drops bead on a green palm.", zh: "绿掌托住水珠。" },
  },
  {
    src: '/photos/van-maple-street.jpg',
    full: '/photos/full/van-maple-street.jpg',
    hdr: true,
    alt: { en: 'A street tunnel of red maples with a sunstar through the canopy', zh: '红枫树冠夹道的街道，阳光透过叶隙成星芒' },
    caption: { en: 'Red maples, sunstar, one street.', zh: '红枫、星芒、一条街。' },
  },
  {
    src: "/photos/2023-paris-dsc-2236.jpg",
    full: "/photos/full/2023-paris-dsc-2236.jpg",
    hdr: true,
    alt: { en: "凯旋门铭文缝隙里挤进的埃菲尔铁塔", zh: "凯旋门铭文缝隙里挤进的埃菲尔铁塔" },
    caption: { en: "The Arc lists battles; the Tower slips in.", zh: "凯旋门列着战名，铁塔挤进缝里。" },
  },
  {
    src: "/photos/2026-banff-dsc-8372.jpg",
    full: "/photos/full/2026-banff-dsc-8372.jpg",
    hdr: true,
    alt: { en: "蓝天白云前保持平衡的顶盖石柱", zh: "蓝天白云前保持平衡的顶盖石柱" },
    caption: { en: "A caprock hoodoo keeps its balance.", zh: "顶盖石柱保持着平衡。" },
  },
  {
    src: '/photos/hexi-salt-rails.jpg',
    full: '/photos/full/hexi-salt-rails.jpg',
    hdr: true,
    alt: { en: 'Old rails leading into the mirror-like Chaka Salt Lake', zh: '茶卡盐湖：旧铁轨伸进天空之镜' },
    caption: { en: 'Rails into the sky mirror, Chaka Salt Lake.', zh: '茶卡盐湖：铁轨伸进天空之镜。' },
  },
  {
    src: "/photos/2024-swiss-dsc-2793.jpg",
    full: "/photos/full/2024-swiss-dsc-2793.jpg",
    alt: { en: "湖边长椅上的三个人，游艇与阿尔卑斯", zh: "湖边长椅上的三个人，游艇与阿尔卑斯" },
    caption: { en: "Three on a bench, Alps across the water.", zh: "长椅三人，水对面是阿尔卑斯。" },
  },
  {
    src: "/photos/2026-hexi-dsc-1116.jpg",
    full: "/photos/full/2026-hexi-dsc-1116.jpg",
    hdr: true,
    alt: { en: "驶过广阔劣地的一辆红卡车", zh: "驶过广阔劣地的一辆红卡车" },
    caption: { en: "One red truck measures the badlands.", zh: "一辆红卡车量出劣地的大。" },
  },
  {
    src: "/photos/2024-norddeutscheland-dsc-2734.jpg",
    full: "/photos/full/2024-norddeutscheland-dsc-2734.jpg",
    alt: { en: "镀金立面与人群前飘起的肥皂泡", zh: "镀金立面与人群前飘起的肥皂泡" },
    caption: { en: "Bubbles rise past the gilded facade.", zh: "气泡飘过镀金立面。" },
  },
  {
    src: '/photos/yel-milkyway.jpg',
    full: '/photos/full/yel-milkyway.jpg',
    alt: { en: 'The Milky Way rising over a golden field at night', zh: '夜间金色草甸上升起的银河' },
    caption: { en: 'The Milky Way over a golden field.', zh: '金色草甸上的银河。' },
  },
  {
    src: '/photos/banff-hoodoos.jpg',
    full: '/photos/full/banff-hoodoos.jpg',
    hdr: true,
    alt: { en: 'Sandstone hoodoos with flat caprocks against a pale blue sky', zh: '淡蓝天空下顶着扁平石帽的砂岩土柱' },
    caption: { en: 'Caprock hoodoos in the badlands.', zh: '劣地上顶着石帽的土柱。' },
  },
  {
    src: '/photos/van23-cloud-sea.jpg',
    full: '/photos/full/van23-cloud-sea.jpg',
    alt: { en: 'Pink-lit peaks above a sea of cloud with the city below', zh: '粉光山峰浮在云海之上，城在云下' },
    caption: { en: 'Peaks above a sea of cloud, city below.', zh: '云海之上是峰，之下是城。' },
  },
  {
    src: "/photos/2025-vancouver-dsc-4408.jpg",
    full: "/photos/full/2025-vancouver-dsc-4408.jpg",
    alt: { en: "驶过成排樱花的轻轨列车", zh: "驶过成排樱花的轻轨列车" },
    caption: { en: "The train runs under cherry snow.", zh: "列车驶过樱花雪。" },
  },
  {
    src: "/photos/2023-vancovuer-dsc-2191.jpg",
    full: "/photos/full/2023-vancovuer-dsc-2191.jpg",
    alt: { en: "融进金色光斑的粉色花簇", zh: "融进金色光斑的粉色花簇" },
    caption: { en: "Pink clusters melt into bokeh.", zh: "粉簇融进光斑。" },
  },
  {
    src: "/photos/2026-victoria-dsc-8914.jpg",
    full: "/photos/full/2026-victoria-dsc-8914.jpg",
    hdr: true,
    alt: { en: "切开平静蓝海的一枚虎鲸鳍", zh: "切开平静蓝海的一枚虎鲸鳍" },
    caption: { en: "A fin cuts the calm.", zh: "一枚鳍切开平静。" },
  },
  {
    src: "/photos/2026-hexi-dsc-1364.jpg",
    full: "/photos/full/2026-hexi-dsc-1364.jpg",
    hdr: true,
    alt: { en: "橙色天空里坐在脊线上的太阳", zh: "橙色天空里坐在脊线上的太阳" },
    caption: { en: "The sun sits on the ridge line.", zh: "太阳坐在脊线上。" },
  },
  {
    src: '/photos/yel-bison-sparring.jpg',
    full: '/photos/full/yel-bison-sparring.jpg',
    hdr: true,
    alt: { en: 'Two bison locking horns in a grassy field', zh: '草地上顶角相持的两头野牛' },
    caption: { en: 'Two bison lock horns.', zh: '两头野牛顶角相持。' },
  },
  {
    src: "/photos/2026-hexi-dsc-0648.jpg",
    full: "/photos/full/2026-hexi-dsc-0648.jpg",
    hdr: true,
    alt: { en: "条纹气球与细小人影倒映在平静盐湖", zh: "条纹气球与细小人影倒映在平静盐湖" },
    caption: { en: "A balloon stands on the mirror, people for scale.", zh: "气球立在镜面上，人影作刻度。" },
  },
  {
    src: '/photos/yel-mist-tetons.jpg',
    full: '/photos/full/yel-mist-tetons.jpg',
    hdr: true,
    alt: { en: 'Mist layering the Teton peaks above dark pines', zh: '雾把提顿峰峦叠成层次，下方是深色松林' },
    caption: { en: 'Mist stacks the Tetons into layers.', zh: '雾把提顿山叠成层次。' },
  },
  {
    src: '/photos/xinhuang-tunnel-mist.jpg',
    full: '/photos/full/xinhuang-tunnel-mist.jpg',
    alt: { en: 'An old railway tunnel portal under misty mountains', zh: '雾山下的旧铁路隧道口' },
    caption: { en: 'An old rail tunnel into the mist.', zh: '旧铁路隧道伸进雾里。' },
  },
  {
    src: '/photos/paris-pyramid-night.jpg',
    full: '/photos/full/paris-pyramid-night.jpg',
    hdr: true,
    alt: { en: 'The Louvre pyramid glowing symmetrically at night', zh: '夜色里对称发光的卢浮宫玻璃金字塔' },
    caption: { en: 'The pyramid holds the night symmetric.', zh: '夜色里对称的玻璃金字塔。' },
  },
  {
    src: "/photos/2023-xinhuang-dsc-2625-2.jpg",
    full: "/photos/full/2023-xinhuang-dsc-2625-2.jpg",
    alt: { en: "招牌电线密密的老街尽头山顶一点红", zh: "招牌电线密密的老街尽头山顶一点红" },
    caption: { en: "Signs and wires lead to a red rooftop.", zh: "招牌与电线尽头一点红。" },
  },
  {
    src: "/photos/2026-hexi-dsc-1233.jpg",
    full: "/photos/full/2026-hexi-dsc-1233.jpg",
    hdr: true,
    alt: { en: "爬上干净沙脊的两个小点", zh: "爬上干净沙脊的两个小点" },
    caption: { en: "Two dots climb a clean dune.", zh: "两个点爬上一道净沙。" },
  },
  {
    src: "/photos/2023-paris-dsc-1958-enhanced-nr.jpg",
    full: "/photos/full/2023-paris-dsc-1958-enhanced-nr.jpg",
    hdr: true,
    alt: { en: "卢浮宫金字塔金色网格的近景", zh: "卢浮宫金字塔金色网格的近景" },
    caption: { en: "Gold lattice, close enough to count.", zh: "金色网格，近得能数。" },
  },
  {
    src: '/photos/van23-eagle.jpg',
    full: '/photos/full/van23-eagle.jpg',
    alt: { en: 'A bald eagle banking with fully spread wings against blue sky', zh: '蓝天前展翼侧身滑翔的白头鹰' },
    caption: { en: 'An eagle banks on spread wings.', zh: '鹰展翼侧身掠过。' },
  },
  {
    src: '/photos/garibaldi-larch-valley.jpg',
    full: '/photos/full/garibaldi-larch-valley.jpg',
    alt: { en: 'A mountain valley of golden larches with a pale river below', zh: '金色落叶松的山谷，下方一条浅色河流' },
    caption: { en: 'Larches turn the valley gold.', zh: '落叶松把山谷染金。' },
  },
  {
    src: "/photos/2023-xinhuang-dsc-2594.jpg",
    full: "/photos/full/2023-xinhuang-dsc-2594.jpg",
    hdr: true,
    alt: { en: "灰天下叠叠的老城屋顶", zh: "灰天下叠叠的老城屋顶" },
    caption: { en: "Rooftops stack in grey weather.", zh: "灰天里屋顶叠屋顶。" },
  },
  {
    src: '/photos/paris-chantilly.jpg',
    full: '/photos/full/paris-chantilly.jpg',
    hdr: true,
    alt: { en: 'The Chateau de Chantilly across its water under a soft sky', zh: '柔天空下隔水相望的尚蒂伊城堡' },
    caption: { en: 'Chantilly across the water.', zh: '水对面的尚蒂伊城堡。' },
  },
  {
    src: "/photos/2023-vancovuer-dsc-3167.jpg",
    full: "/photos/full/2023-vancovuer-dsc-3167.jpg",
    alt: { en: "暗松林里落下的一柱光", zh: "暗松林里落下的一柱光" },
    caption: { en: "A column of light in dark pines.", zh: "暗松林里一柱光。" },
  },
  {
    src: '/photos/hexi-goose.jpg',
    full: '/photos/full/hexi-goose.jpg',
    hdr: true,
    alt: { en: 'A goose coming in to land on glassy water, reflection below', zh: '雁落镜面，倒影相随' },
    caption: { en: 'A goose lands on glass.', zh: '雁落镜面。' },
  },
  {
    src: "/photos/2023-paris-dsc-2067.jpg",
    full: "/photos/full/2023-paris-dsc-2067.jpg",
    alt: { en: "石铺庭院里悬灯下的白天鹅", zh: "石铺庭院里悬灯下的白天鹅" },
    caption: { en: "A swan poses under the courtyard lamp.", zh: "天鹅在悬灯下站成肖像。" },
  },
  {
    src: '/photos/van-fireworks-purple.jpg',
    full: '/photos/full/van-fireworks-purple.jpg',
    hdr: true,
    alt: { en: 'Purple firework bursts doubled in the bay with boat silhouettes', zh: '紫色烟花在海湾倒影里折成双份，船影点缀' },
    caption: { en: 'Purple bursts, doubled in the bay.', zh: '紫焰在海湾里折成双份。' },
  },
  {
    src: "/photos/2023-vancovuer-dsc-7589.jpg",
    full: "/photos/full/2023-vancovuer-dsc-7589.jpg",
    alt: { en: "弯出去的轻轨站台与一个等车的人", zh: "弯出去的轻轨站台与一个等车的人" },
    caption: { en: "The platform curves; one person stays.", zh: "站台弯出去，一个人留下。" },
  },
  {
    src: '/photos/banff-stars.jpg',
    full: '/photos/full/banff-stars.jpg',
    hdr: true,
    alt: { en: 'Star-filled night sky above a rocky riverbed and silhouetted pines', zh: '河滩乱石与松树剪影之上的满天星斗' },
    caption: { en: 'Stars over the river stones.', zh: '河滩乱石之上的星空。' },
  },
  {
    src: '/photos/bremen-organ.jpg',
    full: '/photos/full/bremen-organ.jpg',
    hdr: true,
    alt: { en: 'Cathedral organ and rose window glowing in warm gold with chandeliers', zh: '暖金光晕中的教堂管风琴与玫瑰窗，吊灯点缀' },
    caption: { en: 'Organ and rose window in warm gold.', zh: '暖金里的管风琴与玫瑰窗。' },
  },
  {
    src: "/photos/2026-hexi-dsc-1042.jpg",
    full: "/photos/full/2026-hexi-dsc-1042.jpg",
    hdr: true,
    alt: { en: "雾霭层峰前发亮的红色岩脊", zh: "雾霭层峰前发亮的红色岩脊" },
    caption: { en: "A red ridge burns through the haze.", zh: "红脊在雾霭里烧。" },
  },
  {
    src: '/photos/victoria-orcas.jpg',
    full: '/photos/full/victoria-orcas.jpg',
    hdr: true,
    alt: { en: 'Orcas surfacing side by side off Victoria', zh: '维多利亚外海并肩浮出的虎鲸' },
    caption: { en: 'Orcas surfacing off Victoria.', zh: '维多利亚外海浮出的虎鲸。' },
  },
  {
    src: '/photos/hexi-crescent-lake.jpg',
    full: '/photos/full/hexi-crescent-lake.jpg',
    hdr: true,
    alt: { en: 'Crescent Lake curled among pink sand dunes with pavilions and green reeds', zh: '粉色沙丘间弯着一牙月牙泉，亭台与绿苇环绕' },
    caption: { en: 'Crescent Lake curled in the singing sands.', zh: '鸣沙山里弯着一牙月牙泉。' },
  },
  {
    src: "/photos/2025-vancouver-dsc-4356.jpg",
    full: "/photos/full/2025-vancouver-dsc-4356.jpg",
    alt: { en: "窗玻璃映着房屋、汽车与花枝", zh: "窗玻璃映着房屋、汽车与花枝" },
    caption: { en: "One window borrows the whole street.", zh: "一扇窗借住整条街。" },
  },
  {
    src: '/photos/swiss-stairwell.jpg',
    full: '/photos/full/swiss-stairwell.jpg',
    hdr: true,
    alt: { en: 'Concrete stairwell geometry lit in yellow with a single figure', zh: '黄光里的混凝土楼梯几何，一个人影' },
    caption: { en: 'Concrete stairs in yellow light.', zh: '黄光里的混凝土楼梯。' },
  },
  {
    src: '/photos/yel-chipmunk.jpg',
    full: '/photos/full/yel-chipmunk.jpg',
    alt: { en: 'A chipmunk on a log with a mouthful of seeds, green bokeh behind', zh: '倒木上塞了一嘴种子的花栗鼠，背后绿色虚化' },
    caption: { en: 'A chipmunk with a mouthful of seeds.', zh: '塞了一嘴种子的花栗鼠。' },
  },
  {
    src: '/photos/lucerne-water-tower.jpg',
    full: '/photos/full/lucerne-water-tower.jpg',
    hdr: true,
    alt: { en: 'Lucerne wooden water tower and covered bridge under alpine clouds', zh: '阿尔卑斯云下的卢塞恩木水塔与廊桥' },
    caption: { en: 'Lucerne water tower under alpine clouds.', zh: '阿尔卑斯云下的卢塞恩水塔。' },
  },
  {
    src: '/photos/hexi-danxia.jpg',
    full: '/photos/full/hexi-danxia.jpg',
    hdr: true,
    alt: { en: 'Layered Danxia ridges glowing in late afternoon light', zh: '暮光里发亮的丹霞层脊' },
    caption: { en: 'Danxia ridges in late light.', zh: '暮光里的丹霞脊线。' },
  },
  {
    src: '/photos/banff-mirror.jpg',
    full: '/photos/full/banff-mirror.jpg',
    hdr: true,
    alt: { en: 'Snow peaks doubled in the still water of a mountain lake', zh: '雪山倒影折进平静的高山湖面' },
    caption: { en: 'Still water, doubled mountains.', zh: '静水把山影折成双份。' },
  },
  {
    src: '/photos/yel-geyser-sunset.jpg',
    full: '/photos/full/yel-geyser-sunset.jpg',
    hdr: true,
    alt: { en: 'Geyser steam glowing against a setting sun', zh: '间歇泉蒸汽在落日里发亮' },
    caption: { en: 'Geyser steam catches the sunset.', zh: '间歇泉的蒸汽接住落日。' },
  },
  {
    src: '/photos/magareich-times-square.jpg',
    full: '/photos/full/magareich-times-square.jpg',
    alt: { en: 'Times Square billboards towering over the crowd', zh: '时代广场广告牌高过人群' },
    caption: { en: 'Billboards outshout the sky.', zh: '广告牌比天空更响。' },
  },
  {
    src: '/photos/banff-train.jpg',
    full: '/photos/full/banff-train.jpg',
    hdr: true,
    alt: { en: 'A freight train passing below Castle Mountain', zh: '城堡山下驶过的货运列车' },
    caption: { en: 'A freight train below Castle Mountain.', zh: '城堡山下的货运列车。' },
  },
];
