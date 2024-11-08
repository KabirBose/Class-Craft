import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <Link className={styles.link} href="/usage">
          Usage
        </Link>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
