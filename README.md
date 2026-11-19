# Shiming Gu · 个人网站

基于 [Astro](https://astro.build) 的中英双语个人主页，深色宇宙风主题。
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
| `src/data/publications.ts` | 已发表论文 `publications`；即将挂 arXiv / 撰写中 / 已投稿 `preprints` |
| `src/data/research.ts` | 研究方向卡片 `topics`；进行中与后续研究 `ongoing` |
| `src/data/photos.ts` | 摄影作品登记（图片文件放 `public/photos/`） |
| `src/data/widgets.ts` | 小工具注册表 |

约定：

- 留空字符串 `''` 的字段不会显示（如职位、单位、邮箱尚未填写时）。
- 论文 `status`：`published` / `preprint` / `inprep` / `submitted`；
  方向与项目 `status`：`published` / `ongoing` / `planned`。
- 论文作者列表中的 `Shiming Gu` 会自动加粗；`arxiv` 填编号即可，自动生成 arXiv 与 ADS 链接。
- `preprints` 与 `ongoing` 数组里有注释掉的示例条目，复制改内容即可新增。
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