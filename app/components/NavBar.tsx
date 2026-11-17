import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          🍴 NextBites
        </Link>
        <ul className={styles.links}>
          <li>
            <Link href="/">Recipes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
