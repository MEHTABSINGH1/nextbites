import type { Recipe } from "../data/recipes";
import styles from "./RecipeCard.module.css";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className={styles.card}>
      <div className={styles.emoji} aria-hidden="true">
        {recipe.emoji}
      </div>
      <div className={styles.body}>
        <span className={styles.cuisine}>{recipe.cuisine}</span>
        <h2 className={styles.title}>{recipe.title}</h2>
        <p className={styles.description}>{recipe.description}</p>
        <ul className={styles.meta}>
          <li>⏱ {recipe.minutes} min</li>
          <li>🍽 Serves {recipe.servings}</li>
          <li>{recipe.difficulty}</li>
        </ul>
      </div>
    </article>
  );
}
