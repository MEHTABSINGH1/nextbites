# NextBites

A recipe browsing app built with **Next.js 16 (App Router) + TypeScript**.
This is Part 1 of 3: project scaffold plus a styled home page that lists recipes in a responsive grid.

Repository (public): https://github.com/MEHTABSINGH1/nextbites

## Project structure

```
nextbites/
├── tsconfig.json              # TypeScript config (strict mode)
├── next.config.ts
├── package.json
└── app/
    ├── layout.tsx             # Root layout: shared <NavBar /> above {children}
    ├── page.tsx               # Home page: maps recipes into <RecipeCard />s
    ├── page.module.css        # Responsive grid: repeat(auto-fill, minmax(230px, 1fr))
    ├── globals.css
    ├── data/
    │   └── recipes.ts         # `Recipe` type + `recipes: Recipe[]` (6 recipes)
    └── components/
        ├── NavBar.tsx         # Shared navigation bar
        └── RecipeCard.tsx     # Typed card: ({ recipe }: { recipe: Recipe })
```

## How it works

- **Single data source**: `app/data/recipes.ts` exports the `Recipe` type and the `recipes` array.
- **Typed, reusable card**: `RecipeCard` takes one `recipe` prop typed as `Recipe` (no `any`) and is used for every card.
- **Home page**: `app/page.tsx` does `recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)` inside a CSS grid that reflows across screen sizes.
- **Shared layout**: `app/layout.tsx` renders `<NavBar />` and then `{children}`, so the nav shows on every page.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Verification

| Check | Command | Result |
| --- | --- | --- |
| Type check | `npx tsc --noEmit` | ✅ no errors |
| Lint | `npm run lint` | ✅ no warnings or errors |
| Production build | `npm run build` | ✅ compiled successfully |
| Dev server | `npm run dev` | ✅ home page renders with no error overlay |

Build output:

```
Route (app)
┌ ○ /
└ ○ /_not-found

○  (Static)  prerendered as static content
```

## Roadmap

- **Part 2**: search and individual recipe pages
- **Part 3**: deploy live
