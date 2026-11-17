import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Find your next bite</h1>
        <p>
          {recipes.length} hand-picked recipes from around the world, from
          quick weeknight dinners to slow weekend projects.
        </p>
      </section>

      <RecipeGrid recipes={recipes} />
    </main>
  );
}
