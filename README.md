# 综合型个人网站

公开地址（Pages 成功发布后）：https://bxbdndhfjfbdj2-creator.github.io/pages/

## 只维护 GitHub 文件

- src/data/site.json：站点名称、介绍与首页文案
- src/content/research：研究专题 Markdown
- src/content/publications：论文成果 Markdown
- src/content/projects：项目记录 Markdown
- src/content/writing：文章 Markdown
- src/content/notes：知识笔记 Markdown
- public/demos/英文目录名/index.html：完整的 HTML 子页面
- public/demos/英文目录名/app.json：HTML 作品名称及描述，自动生成导航入口
- public/demos/英文目录名/data.json：可由同一目录的 HTML/JS 使用 fetch('./data.json') 读取
- public/data：可供多个网页共同读取的公开 JSON 数据
- public/assets：图片、PDF 与其他静态文件

新增或编辑文件，提交到 main 后自动运行 GitHub Actions。

## 首次配置

前往仓库 Settings → Pages → Build and deployment → Source，选择 GitHub Actions。
工作流名称：Publish personal website。首次应核验 Actions 中 build、deploy 均成功。

本项目是 Astro 7 静态网站，GitHub Pages 项目路径为 /pages/。
全文搜索索引由 Pagefind 在每次发布时自动更新。

## 注意

HTML 页面及 JSON 通过 public 目录原样公开；静态站不需要后端即可执行浏览器 JavaScript。
网站栏目内容使用 Frontmatter；draft: true 表示不发布生成页面（但公开仓库本身仍可查看源文件）。
