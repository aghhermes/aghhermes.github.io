"use client";

import { useState, useEffect } from "react";
import IconLogo from "./IconLogo";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "O nas", href: "#about" },
  { label: "Zarząd", href: "#board" },
  { label: "Zespoły", href: "#teams" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <a href="#hero" className={styles.logo}>
          <IconLogo className={styles.logoIcon} />
          <span>AGH HERMES</span>
        </a>

        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={styles.navCta}
            onClick={handleNavClick}
          >
            Dołącz do nas
          </a>
        </div>
      </div>
    </nav>
  );
}
