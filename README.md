# 逍遥学中文

Lightweight Chinese learning blog built with Eleventy and Markdown, hosted on GitHub Pages.

Every push to `main` rebuilds and redeploys the site automatically.

## One-Time Setup

On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The site then lives at `https://zhuangcd.github.io/chincode/`.

(Pages from a private repo needs a paid plan. If unavailable, make the repo public.)

## Add a Post

Create a Markdown file in `posts/`:

```md
---
title: 今天的标题
date: 2026-09-04
tags: [日记, 词语]
image: /assets/images/my-photo.jpg
imageAlt: Short image description
---

这里写中文。
```

Only `title` and `date` are required. Newest first. Posts render fully inline on the homepage — no separate post pages.

## Add a Page

Create a Markdown file in `pages/`:

```md
---
title: 资源
order: 2
---

学习网站和书。
```

`pages/resources.md` becomes `/resources/` and appears in the header nav automatically. `order` controls nav position (lower = earlier, default 99).

## Add Pictures

Drop the file in `assets/images/`, then reference it with a leading slash:

```md
image: /assets/images/my-photo.jpg
```

Same rule inside post body: `![alt](/assets/images/my-photo.jpg)`.

## Publish

```sh
git add .
git commit -m "new post"
git push
```

Wait ~1 min, refresh the site.

## Local Preview (optional)

```sh
npm install
npm start     # http://localhost:8080
```

Local runs without the `/chincode/` prefix; CI adds it from the repo name.

## Files

| Path | Purpose |
| --- | --- |
| `posts/` | one Markdown file per post |
| `pages/` | one Markdown file per standalone page |
| `assets/` | CSS and images, copied as-is |
| `index.njk` | homepage feed |
| `src/_layouts/` | `base.njk` (shell + nav), `page.njk` (page wrapper) |
| `.eleventy.js` | collections and date filters |
| `.github/workflows/pages.yml` | build + deploy on push |
