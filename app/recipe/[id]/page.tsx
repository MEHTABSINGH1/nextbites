import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";
import styles from "./page.module.css";

// Only the ids from generateStaticParams exist; any other id renders not-found.tsx.
// Required for output: "export", where pages can't be generated on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/recipe/[id]">): Promise<Metadata> {
  const { id } = await params;
  const recipe = getRecipe(id);
  return {
    title: recipe ? recipe.title : "Recipe not found",
    description: recipe?.description,
  };
}

export default async function RecipePage({
  params,
}: PageProps<"/recipe/[id]">) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Link href="/" className={styles.back}>
        ← All recipes
      </Link>

      <header className={styles.header}>
        <div className={styles.emoji} aria-hidden="true">
          {recipe.emoji}
        </div>
        <div>
          <span className={styles.cuisine}>{recipe.cuisine}</span>
          <h1 className={styles.title}>{recipe.title}</h1>
          <p className={styles.description}>{recipe.description}</p>
          <ul className={styles.meta}>
            <li>⏱ {recipe.minutes} min</li>
            <li>🍽 Serves {recipe.servings}</li>
            <li>{recipe.difficulty}</li>
          </ul>
        </div>
      </header>

      <div className={styles.columns}>
        <section className={styles.panel}>
          <h2>Ingredients</h2>
          <ul className={styles.ingredients}>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section className={styles.panel}>
          <h2>Steps</h2>
          <ol className={styles.steps}>
            {recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
