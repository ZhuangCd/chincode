# 逍遥学中文 Design

## Goal

Build a lightweight GitHub-hosted Chinese learning blog that is easy to edit in VS Code.

The first version is a single homepage feed. Each Markdown file in `posts/` becomes one visible box on the homepage. Boxes are sorted newest first and show the full post content inline. There are no clickable post detail pages in this version.

## Audience

The site is for the author to keep track of Chinese learning over time. It should support Chinese text naturally, allow short daily or weekly notes, and make optional pictures easy to add.

## Technology

Use Eleventy (`11ty`) as the static site generator.

Reasons:

- Markdown-first authoring is simple in VS Code.
- Output is static HTML/CSS suitable for GitHub Pages.
- The project can grow later with pages, collections, tags, or layouts without changing the writing workflow.
- No client-side framework is needed for version one.

## Content Model

Posts live in `posts/` as Markdown files.

Example:

```md
---
title: 今天我学了“逍遥”
date: 2026-09-04
tags: [词语, 日记]
image: /assets/images/xiaoyao.jpg
---

我想逍遥地学中文，不着急，也不停下来。

今天我写三句话，明天再改一改。
```

Required fields:

- `title`
- `date`

Optional fields:

- `tags`
- `image`

If `image` is present, the image appears near the top of that post box. If no image is present, the box renders text only.

## Homepage

The homepage renders all posts as a simple feed:

- Newest post first.
- One repeated box per post.
- Each box displays date, title, optional image, full Markdown content, and optional tags.
- No "read more" links.
- No separate generated post pages for now.

The homepage also has a small header with:

- Site name: `逍遥学中文`
- Short subtitle: daily Chinese notes, newest first

Do not show navigation links in version one unless a real page exists.

## Visual Direction

Use the approved Ink Journal style:

- Warm paper background.
- Clean readable serif typography with Chinese font fallbacks.
- Small red seal mark with `学`.
- Narrow centered content column.
- Similar card-like post boxes stacked vertically.
- Calm, personal, study-journal feel.

Avoid complex magazine layouts, large hero sections, dashboards, and hidden content.

## Future Growth

The first version keeps routing simple, but the structure should allow later additions:

- `pages/about.md` for an about page.
- `pages/resources.md` for learning links.
- Tag archive pages if useful later.
- Separate post pages only if the author later wants shareable individual entries.

These future features are out of scope for the first build.

## Error Handling

Because the site is static, runtime error handling is minimal.

Build-time expectations:

- Missing optional image means no image block is rendered.
- Missing optional tags means no tag list is rendered.
- Missing required title or date should be avoided by using example posts and clear README instructions.

## Testing

Verification for version one:

- Install dependencies.
- Run the local Eleventy dev server.
- Confirm homepage renders all sample posts newest first.
- Confirm Markdown formatting works.
- Confirm Chinese text displays correctly.
- Confirm optional image rendering works.
- Confirm production build succeeds.
