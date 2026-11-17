# NextBites

A small recipe site built with the Next.js App Router. You can search recipes by dish or cuisine and open any recipe for its ingredients and steps.

**Live site:** https://mehtabsingh1.github.io/nextbites/

| Page | Live URL |
| --- | --- |
| Home | https://mehtabsingh1.github.io/nextbites/ |
| Recipe detail | https://mehtabsingh1.github.io/nextbites/recipe/miso-ramen/ |
| Unknown recipe (not-found page) | https://mehtabsingh1.github.io/nextbites/recipe/does-not-exist/ |

## Features

- **Search:** filter the recipe grid by name or cuisine. Shows an empty state when nothing matches.
- **Recipe pages:** `app/recipe/[id]/page.tsx` is pre-built for every recipe through `generateStaticParams`.
- **Graceful states:**
  - `app/loading.tsx` shows a skeleton while a page loads.
  - `app/not-found.tsx` is a friendly 404 with a link back home. Unknown recipe ids call `notFound()`.
  - `app/error.tsx` is a client error boundary with a **Try again** button that calls `reset()`.
- **Metadata:** `app/layout.tsx` exports a title template and description, so tabs read e.g. "Miso Ramen · NextBites".

## Run locally

```bash
npm ci
npm run dev     # http://localhost:3000
npm run build   # static export into ./out
```

## Deployment

`next.config.ts` sets `output: "export"` and `trailingSlash: true`. The GitHub Actions workflow in `.github/workflows/deploy.yml` sets `basePath` to `/nextbites` through `PAGES_BASE_PATH`.

On each push, the workflow runs three jobs:

1. **build**: `npm ci` and `npm run build`, then uploads `./out`.
2. **deploy**: publishes the upload to GitHub Pages.
3. **smoke-test**: fetches the live site. The job fails unless the home page and `/recipe/miso-ramen/` return 200 with the expected `<title>`, the stylesheet loads, and `/recipe/does-not-exist/` returns 404 with the not-found page.

You can read the logs for every run in the repo's [Actions tab](https://github.com/MEHTABSINGH1/nextbites/actions).
