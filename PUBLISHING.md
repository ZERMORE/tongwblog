# 从 Obsidian 发布内容

博客只读取 Obsidian 仓库的 `Publish` 目录。

## 发布

交互选择文章：

```powershell
npm run publish
```

按 slug 发布并覆盖网站中的同名文章：

```powershell
npm run publish -- my-article --force
```

只预览目标，不写文件：

```powershell
npm run publish -- my-article --dry-run
```

发布工具会校验 frontmatter、转换 Obsidian 图片嵌入与 Wiki 链接、复制附件，然后运行 `astro check` 和 `astro build`。它不会修改 Saturn 原稿，也不会执行 Git commit 或 push。

## 约定

- `type`：`note` 或 `jotting`。
- `locale`：`zh-cn`、`en` 或 `ja`。
- `slug`：小写英文字母、数字和连接号，且在同类同语言内容中唯一。
- 图片应放在文章 Markdown 文件同一目录。
- `draft: true` 会同步到网站仓库，但不会生成公开页面。
- 网站生成文件统一使用 `src/content/<type>/<locale>/<slug>/index.md` 结构。
