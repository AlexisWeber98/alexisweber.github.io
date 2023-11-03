import styles from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div>
        <Link href="/ "> Inicio </Link>
      </div>
      <div>
        <Link href="/contact">Contacto</Link>
      </div>
    </nav>
  );
}
