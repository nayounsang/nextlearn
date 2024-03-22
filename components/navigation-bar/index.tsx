"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navStyle, ulStyle, liStyle } from "./navigation=bar.css";

export default function NavigationBar() {
  const path = usePathname();
  return (
    <nav className={navStyle}>
      <ul className={ulStyle}>
        <li className={liStyle}>
          <Link href="/">home</Link> {path === "/" && "😃"}
        </li>
        <li className={liStyle}>
          <Link href="/about-us">about-us</Link> {path === "/about-us" && "😃"}
        </li>
      </ul>
    </nav>
  );
}
