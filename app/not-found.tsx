import Link from "next/link";
import styles from "./states.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.panel}>
        <div className={styles.emoji} aria-hidden="true">
          🍳
        </div>
        <h1>We couldn&rsquo;t find that recipe</h1>
        <p>
          The page you&rsquo;re looking for doesn&rsquo;t exist, or it may have
          been moved. Let&rsquo;s get you back to something tasty.
        </p>
        <Link href="/" className={styles.button}>
          ← Back to all recipes
        </Link>
      </div>
    </main>
  );
}
