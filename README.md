# 逍遥学中文

Lightweight Chinese learning blog built with Eleventy and Markdown.

## Write a New Post

Create a Markdown file in `posts/`:

```md
---
title: 今天的标题
date: 2026-09-04
tags: [日记, 词语]
image: assets/images/my-photo.jpg
imageAlt: Short image description
---

这里写中文。

You can also write English notes.
```

Only `title` and `date` are required. Omit `image`, `imageAlt`, or `tags` when you do not need them.

Newest dated posts appear first on the homepage. Posts are shown fully inline, not as separate pages.

## Add Pictures

Put images in `assets/images/`, then reference them from a post:

```md
image: assets/images/my-photo.jpg
```

## Local Commands

```sh
npm install
npm run start
npm run build
```

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds and deploys the site every time commits are pushed to `main`.

GitHub Pages from a private repository requires an eligible GitHub plan. If private Pages is unavailable, make the repository public or upgrade the account plan.

