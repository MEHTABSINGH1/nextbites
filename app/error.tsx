"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./states.module.css";

export default function Error({
  error,
  reset,
}: {
  error: unknown;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.main}>
      <div className={styles.panel} role="alert">
        <div className={styles.emoji} aria-hidden="true">
          🔥
        </div>
        <h1>Something got burnt</h1>
        <p>
          An unexpected error stopped this page from loading. You can try again,
          or head back to the recipe list.
        </p>
        <div className={styles.actions}>
          <button type="button" className={styles.button} onClick={() => reset()}>
            Try again
          </button>
          <Link href="/" className={styles.secondary}>
            Back to all recipes
          </Link>
        </div>
      </div>
    </main>
  );
}
