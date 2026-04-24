# 数字时代江苏文化形象跨媒介转化研究

**江苏地域文化跨媒介叙事数据库 · GitHub Pages 静态版**

本仓库是项目 Django 数据库的静态快照版本，可在 GitHub Pages 直接访问，无需服务器。

## 在线访问

打开仓库 Pages 地址即可：

```
https://specialfanfan35-spec.github.io/-/
```

## 功能模块

| 模块 | 路径 | 功能 |
| --- | --- | --- |
| 首页 | `index.html` | 项目总览与数据总数 |
| 文本库 | `texts.html` | 传统文学、网络文学、新闻报道、学术论文、游记 |
| 影像库 | `media.html` | 电影、电视剧、短剧、纪录片、短视频、戏曲 |
| 符号库 | `symbols.html` | 苏南/苏中/苏北/海洋圈代表性文化符号 |
| 传播案例库 | `cases.html` | 江苏文化典型传播案例 |
| 文献库 | `literature.html` | 项目相关学术文献资料 |
| 数据可视化 | `stats.html` | CiteSpace 式知识图谱 + 多维统计 |

全部页面支持：
- 关键词模糊搜索
- 多条件筛选（类型 / 地域 / 分类 / 文化区 / 传播方向…）
- 客户端分页
- 交互式 ECharts 图表（Sankey、力导向图、饼图、条形图、雷达图）

## CiteSpace 式知识图谱

`stats.html` 中包含：
- 关键词共现知识图谱（按文化主题聚类）
- 作者合作网络（按地域着色）
- 高频关键词 Top 25
- 时代 × 文本类型演化图
- 符号热度排行 Top 20
- 桑基图：作者 → 地域 → 媒介
- 文化符号关系图谱（按文化区聚类）

## 目录结构

```
.
├── index.html           # 首页
├── texts.html           # 文本库
├── media.html           # 影像库
├── symbols.html         # 符号库
├── cases.html           # 传播案例库
├── literature.html      # 文献库
├── stats.html           # 数据可视化
├── assets/
│   ├── echarts.min.js   # ECharts 库（离线）
│   ├── style.css        # 全局样式
│   └── common.js        # 搜索/筛选/分页工具函数
├── data/                # 所有数据（JSON 格式）
│   ├── totals.json
│   ├── stats.json
│   ├── knowledge_graph.json
│   ├── literature_stats.json
│   ├── texts.json
│   ├── media.json
│   ├── symbols.json
│   ├── cases.json
│   └── literature.json
└── .nojekyll            # 跳过 Jekyll 处理
```

## 数据来源

数据由项目 Django 数据库 (`web/jiangsu_db`) 通过 `export_static.py` 导出为 JSON 静态快照，确保在任何 GitHub Pages 或静态托管环境中均可运行，无需后端服务器。

## 更新数据

如需更新数据，回到本项目的 Django 目录执行：

```bash
cd ../web
python export_static.py
```

然后将新的 `data/*.json` 提交并推送到本仓库即可。

## 本地预览

```bash
cd web-static
python -m http.server 8000
# 打开浏览器: http://localhost:8000
```

## 项目背景

- 研究项目：数字时代江苏文化形象跨媒介转化研究
- 理论框架：文化地理学 × 文化符号学 × 跨媒介叙事 × 形象学
- 研究区域：苏南、苏中、苏北三大文化区 + 江苏海洋文化圈
