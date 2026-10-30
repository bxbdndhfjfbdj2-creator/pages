# 网站技术架构
- Astro 7：将 Markdown 与配置转换为静态 HTML。
- GitHub Actions：提交 main 后自动构建并部署。
- GitHub Pages：公开访问，项目路径 /pages/。
- Pagefind：构建后生成无需后端的全文检索索引。
- src/content：五类内容集合；每个 Markdown 文件对应一个页面。
- public/demos：完整独立 HTML 网页文件夹，构建时通过 fs 自动发现并建立索引。
- public/data：公开共享 JSON。
- public/assets：图片、附件、PDF。
- src/data/site.json：站点文案和信息。
- src/pages：页面模板与路由。

## HTML 作品规则
必须有 index.html；可选 app.json 提供名称、简介和标签。文件夹采用英文小写、数字、连字符、下划线。
无需手工编辑导航，每个 HTML 作品会自动获得 /apps/slug/ 入口。

## 关于跨仓库
主站只监听本仓库提交。其他私有或公开仓库同步需要额外 GitHub Actions 与权限配置，建议作为下一阶段单独实施。
