import styles from "./states.module.css";

export default function Loading() {
  return (
    <main className={styles.main} aria-busy="true">
      <p className={styles.srOnly} role="status">
        Loading…
      </p>
      <div className={styles.skeletonTitle} />
      <div className={styles.skeletonLine} />
      <div className={styles.skeletonGrid}>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className={styles.skeletonCard} />
        ))}
      </div>
    </main>
  );
}
