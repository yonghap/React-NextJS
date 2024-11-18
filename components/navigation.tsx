"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>HOME</h1>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "v" : ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link>{" "}
          {path === "/about-us" ? "v" : ""}
        </li>
      </ul>
    </nav>
  );
}
