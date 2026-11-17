"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeGrid.module.css";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");

  const search = query.trim().toLowerCase();
  const matches = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(search) ||
      recipe.cuisine.toLowerCase().includes(search),
  );

  return (
    <div>
      <label className={styles.search}>
        <span className={styles.srOnly}>Search recipes</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title or cuisine…"
          className={styles.input}
        />
      </label>

      {matches.length > 0 ? (
        <>
          <p className={styles.count}>
            Showing {matches.length} of {recipes.length} recipes
          </p>
          <section className={styles.grid} aria-label="Recipes">
            {matches.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </section>
        </>
      ) : (
        <div className={styles.empty} role="status">
          <p className={styles.emptyTitle}>
            No recipes match &ldquo;{query.trim()}&rdquo;
          </p>
          <p>Try a different dish or cuisine, like &ldquo;pizza&rdquo; or &ldquo;Indian&rdquo;.</p>
          <button
            type="button"
            className={styles.clear}
            onClick={() => setQuery("")}
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
