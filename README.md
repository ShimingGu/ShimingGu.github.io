# Shiming Gu · 个人网站

基于 [Astro](https://astro.build) 的中英双语个人主页：白底黑星的负片宇宙主题 + 苹果式字体排版。
线上地址：<https://shiminggu.github.io>（推送 `main` 分支后由 GitHub Actions 自动部署）。

## 本地开发

```sh
npm install
npm run dev          # http://localhost:4321
```

后台模式（推荐）：

```sh
npx astro dev --background   # 启动
npx astro dev status         # 查看状态
npx astro dev logs           # 查看日志
npx astro dev stop           # 停止
```

构建与预览：

```sh
npm run build        # 输出到 dist/
npm run preview
```

## 内容维护（不需要懂框架）

所有文字内容都在 `src/data/` 下的 TypeScript 文件里，改完保存即可，
开发服务器会自动刷新，推送后自动上线。双语字段格式为 `{ en: '...', zh: '...' }`。

| 文件 | 内容 |
| :-- | :-- |
| `src/data/profile.ts` | 姓名、职位、单位、邮箱、简介、研究兴趣、外链、CV |
| `src/data/publications.ts` | 已上线论文列表（arXiv 编号自动生成 arXiv/ADS 链接） |
| `src/data/research.ts` | 研究方向卡片 `topics`（含本人论文与延伸阅读链接） |
| `src/data/photos.ts` | 摄影作品登记（图片文件放 `public/photos/`） |
| `src/data/widgets.ts` | 小工具注册表 |

约定：

- 留空字符串 `''` 的字段不会显示（如职位、单位、邮箱尚未填写时）。
- 论文 `status`：`published` / `preprint` / `inprep` / `submitted`。
- 论文作者列表中的 `Shiming Gu` 会自动加粗；`arxiv` 填编号即可，自动生成 arXiv 与 ADS 链接。
- CV：把 PDF 放到 `public/cv.pdf`，然后把 `profile.ts` 中 `cv` 改为 `'/cv.pdf'`。

界面文案（导航、按钮、板块标题等）在 `src/i18n/ui.ts`。

## 添加一个小工具

1. 在 `src/components/widgets/` 新建组件（参考 `CosmoCalc.astro`、`GroupPicker.astro`）；
2. 在 `src/data/widgets.ts` 登记 id、标题、简介；
3. 在 `src/pages/[lang]/widgets.astro` 的 `registry` 中加一行映射。

## 添加一种语言 / 一个页面

- 页面在 `src/pages/[lang]/` 下，`getStaticPaths` 返回 `en` / `zh` 两个路由；
  新页面照抄现有页面结构即可，根路径 `/` 会按浏览器语言自动跳转。
- 新语言：在 `src/i18n/ui.ts` 的 `languages` 与 `ui` 中增加字典，
  并在 `astro.config.mjs` 的 `i18n.locales` 与各页面 `getStaticPaths` 中登记。

## 部署

- 仓库：`ShimingGu/ShimingGu.github.io`（GitHub Pages 要求仓库为 **public**）。
- `.github/workflows/deploy.yml` 已配置：推送 `main` 自动构建并发布。
- 首次使用需在仓库 Settings → Pages 中将 Source 设为 **GitHub Actions**。

## 学术沙龙（李所天文·疯狂星期五 / T. D. Lee Astronomical Jamboree）

入口在小工具页底部的卡片（不在主导航），独立页面、独立暖纸配色：`/zh/salon/`、`/en/salon/`。

- **日历**：每月第二个星期五；年份范围改 `src/data/salon.ts` 的 `SALON_YEARS`。
- **共享看板数据**：`src/data/salon.ts` 的 `salon`，由组织者维护（或叫 AI 刷新写入）。
  页面表单只做规则校验 + 生成报名文本（复制 / 邮件），不直接写看板。
- **identifier 是私有修改凭证**：不公开显示，客户端只接收 SHA-256 哈希；
  `who`（我是谁）才是公开显示名。凭 identifier 可载入并修改自己的登记。
- **规则**（`src/lib/salon.ts`）：每人 ≥10 分钟；全场 20–60 分钟；
  第一位讲者 ≥20 分钟，之后有人加入可下调自己的时间。
- **双语**：登记时选一种语言填写 talk/food，另一种留空待翻译刷新；显示时自动回退。
- 填 `organizerEmail` 后表单出现"邮件发给组织者"按钮。

## 目录结构

```text
├── public/            # 静态资源（照片、favicon、CV）
├── src/
│   ├── components/    # 组件（含 widgets/ 小工具）
│   ├── data/          # ★ 内容数据（日常维护只改这里）
│   ├── i18n/          # 双语文案与工具函数
│   ├── layouts/       # 页面骨架
│   ├── pages/         # 路由页面
│   └── styles/        # 主题样式
└── .github/workflows/ # 自动部署
```