# doppl.world - AI 时尚指南项目文档

**Live Site:** [https://www.doppl.world](https://www.doppl.world)

## 1. 项目概览 (面向所有贡献者)

`doppl.world` 是一个围绕 Google AI 时尚应用 "Doppl" 构建的内容中心和非官方指南网站。项目旨在通过高质量的文章、深入评测和灵感画廊，为用户提供价值，探索AI在时尚领域的应用。

### 核心目标
- **SEO与流量获取**: 通过创建高搜索意图的内容（如"如何下载"、"可用性追踪"）和技术SEO优化，吸引目标用户。
- **用户体验与留存**: 提供一个设计优雅、导航清晰、内容丰富的网站，并通过"穿搭灵感画廊"和订阅功能提升用户粘性。
- **敏捷开发与迭代**: 采用小步快跑的开发模式，快速响应市场变化和用户反馈。

---

## 2. 技术栈 (面向开发者)

- **框架**: [Astro](https://astro.build/) - 用于构建内容驱动、性能优先的网站。
- **UI 框架**: [TailwindCSS](https://tailwindcss.com/) - 一个功能类优先的 CSS 框架，用于快速构建自定义设计。
- **部署**: [Vercel](https://vercel.com/) - 从 `main` 分支自动拉取代码、构建和部署。
- **包管理器**: [npm](https://www.npmjs.com/)

---

## 3. 开发指南 (面向开发者)

### 本地环境设置

1.  **克隆仓库**:
    ```bash
    git clone https://github.com/JI000000/doppl.world.git
    cd doppl.world
    ```
2.  **安装依赖**:
    ```bash
    npm install
    ```
3.  **启动开发服务器**:
    ```bash
    npm run dev
    ```
    现在，您可以在 `http://localhost:4321` 访问本地开发站点。

### 常用命令

- `npm run dev`: 启动本地开发服务器，支持热重载。
- `npm run build`: 构建生产版本的静态文件到 `dist/` 目录。
- `npm run preview`: 在本地预览生产构建的最终效果。

### 项目结构解析

```
doppl/
├── public/              # 静态资源 (图片, robots.txt, etc.)
│   └── images/
│       └── gallery/
├── src/
│   ├── assets/          # 需要 Astro 处理的资源 (e.g., a shared image)
│   ├── components/      # 可重用的 Astro 组件 (.astro)
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/         # 基础页面布局模板 (.astro)
│   │   ├── MainLayout.astro     # 网站主布局，包含<head>和通用结构
│   │   └── ArticleLayout.astro  # 文章页布局
│   ├── pages/           # 网站页面和路由
│   │   ├── blog/          # 博客文章 (Markdown & Astro)
│   │   ├── gallery.astro  # 图库页面
│   │   └── index.astro    # 网站首页
│   └── styles/          # 全局样式
│       └── global.css
├── astro.config.mjs     # Astro 配置文件
├── package.json         # 项目依赖和脚本
└── tailwind.config.mjs  # TailwindCSS 配置文件
```

---

## 4. 内容管理指南 (面向内容贡献者)

### 创建或编辑博客文章

所有的博客文章都位于 `src/pages/blog/` 目录下，并使用 Markdown (`.md`) 格式。

1.  **创建新文件**: 在 `src/pages/blog/` 目录下创建一个新的 `.md` 文件，文件名将成为文章的URL路径 (e.g., `my-new-post.md` -> `doppl.world/blog/my-new-post`)。
2.  **添加 Frontmatter**: 在每个Markdown文件的顶部，必须包含以下格式的 "frontmatter"，用于定义文章的元数据。

    ```yaml
    ---
    layout: '../../layouts/ArticleLayout.astro'
    title: '文章的完整标题'
    pubDate: YYYY-MM-DD
    description: '一段简洁的文章描述，用于SEO和预览。'
    author: '作者名'
    tags: ["标签1", "标签2", "相关技术"]
    ---
    ```
3.  **撰写内容**: 在 frontmatter 下方，使用标准的 Markdown 语法撰写文章正文。

### 更新图库内容

图库的所有内容都在 `src/pages/gallery.astro` 文件中进行管理。

- **定位 `outfits` 数组**: 在文件顶部的 `<script>` 区域，找到名为 `outfits` 的常量数组。
- **修改或添加**:
  - 每个 `{...}` 对象代表一张图片卡片。
  - `id`: 唯一标识符。
  - `title`: 图片卡片的标题。
  - `imageUrl`: 图片的公开URL。**必须是符合"人物、时尚、穿搭、全身"四大标准的有效链接**。
  - `tags`: 与图片内容相关的标签数组。

---

## 5. 协作与部署流程 (内部)

### Git 工作流

1.  **分支**: 所有新功能或重大修改都应在新的 `feature/...` 分支上进行。
2.  **提交**: 遵循"小步提交"原则，保持提交信息的清晰、简洁。
3.  **推送**: 完成功能后，将分支推送到GitHub。
4.  **合并**: (推荐流程) 创建一个 Pull Request (PR) 到 `main` 分支，在简单审查后合并。

### 部署

- **自动部署**: 任何推送到 `main` 分支的提交都会触发 Vercel 的自动构建和部署流程。
- **预览链接**: Vercel 会为每个提交生成一个预览链接，方便在合并到生产环境前进行审查。

### 复盘与总结

- **沟通渠道**: 我们当前的聊天窗口是主要的实时沟通和决策渠道。
- **文档更新**: 每次完成一个重要功能或迭代后，应及时更新此 `README.md` 文档，以反映项目的最新状态。 