# Divyesh Halwai – Minimalist Data Science Portfolio (Astro)

## Quickstart
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Add a blog post
1. Create `src/content/blog/my-new-post.md`
2. Frontmatter:
```md
---
title: "My new post"
pubDate: 2025-08-17
description: "Short excerpt"
tags: ["notes"]
---
```
3. Commit & push — your host (Vercel/Netlify) will auto-deploy.

## Deploy
- **Vercel**: Set root directory to `site/`, build `npm run build`, output `dist`.
- **Netlify**: Base `site`, build `npm run build`, publish `dist`. Contact form works with Netlify Forms.
