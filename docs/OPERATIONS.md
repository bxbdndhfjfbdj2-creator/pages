# 日常使用说明

## 新增研究、论文、项目、文章或笔记
找到 src/content 下的对应目录，复制一份 Markdown，修改文件名及 YAML 头部的 title、summary、date、tags 等字段，替换正文。提交到 main 后自动部署并更新目录、首页精选和搜索索引。

日期格式为 YYYY-MM-DD。featured: true 可列入首页精选；draft: true 不会生成页面。公开仓库内的源文件仍公开，不要把未授权公开的信息推送到仓库。

## 新增独立 HTML 网页
在 public/demos 创建一个英文目录，例如 public/demos/my-chart，放入 index.html。可选放入 app.json 来配置标题、简介、类别和标签。
同一目录还可加入 data.json、app.js、style.css、图片和其他资源。HTML 内用 ./ 相对路径引用即可。
网站构建时自动生成 /pages/apps/my-chart/ 索引入口，并可直接访问 /pages/demos/my-chart/index.html。

一个 app.json 示例：
{
  "title": "我的交互作品",
  "description": "此作品的介绍",
  "category": "数据可视化",
  "tags": ["HTML", "JSON"],
  "featured": true
}

## 修改共享 JSON
public/data 下的 JSON 可以通过 /pages/data/文件名.json 访问。网页中建议使用相对路径读取同目录 JSON，避免部署路径变动。

## 修改站点信息
src/data/site.json 负责主站标题和首页介绍。导航类别保存在 src/config/sections.ts，通常不需要修改。

## 查看发布结果
GitHub Actions → Publish personal website，核验 build、deploy。首发需在 Settings → Pages → Source 选择 GitHub Actions。

## 扩展说明
独立 HTML 可包含 JavaScript 图表、表单、前端导入或 CSV/JSON 数据展示。原样托管的静态资源均公开。
