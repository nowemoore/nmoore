import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./components.module.css";

import signature from "../signature.png";
import signaturelm from "../signature-lm.png";

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = useMemo(
    () => [
      { id: "about", label: "About", to: "/about" },
      { id: "research", label: "Research", to: "/research" },
      { id: "events", label: "Events", to: "/events" },
      { id: "takes", label: "Takes", to: "/takes" },
      { id: "contact", label: "Contact", to: "/contact" },
    ],
    []
  );

  const isOnMainPage = !location.pathname.startsWith("/blog");

  const handleSignatureClick = () => {
    setMenuOpen(false);

    if (isOnMainPage) {
      window.handleNavClick?.();
      window.setActiveSection?.("home");
      navigate("/", { replace: true });
      document.getElementById("home")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/");
    }
  };

  const handleNavClick = (to, id) => {
    setMenuOpen(false);

    if (isOnMainPage) {
      window.handleNavClick?.();
      window.setActiveSection?.(id);
      navigate(to, { replace: true });
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.handleNavClick?.();
      navigate(to);
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <img
          src={darkMode ? signature : signaturelm}
          alt="Signature"
          className={`${styles.navSignature} ${
            isOnMainPage && activeSection === "home" ? styles.active : ""
          }`}
          onClick={handleSignatureClick}
          style={{ cursor: "pointer" }}
        />

        <div
          className={`${styles.hamburger} ${
            menuOpen ? styles.hamburgerActive : ""
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          <span />
          <span />
          <span />
        </div>

        <ul className={`${styles.navMenu} ${menuOpen ? styles.navMenuActive : ""}`}>
          {navItems.map(({ label, id, to }) => (
            <li key={id} className={styles.navItem}>
              <button
                className={`${styles.navLink} ${
                  isOnMainPage && activeSection === id ? styles.active : ""
                }`}
                onClick={() => handleNavClick(to, id)}
              >
                {label}
              </button>
            </li>
          ))}

          <li className={styles.navItemThemeToggle}>
            <div
              className={styles.themeToggle}
              onClick={() => setDarkMode((v) => !v)}
              aria-label="Toggle dark mode"
              role="button"
              tabIndex={0}
            >
              <div
                className={`${styles.toggleTrack} ${
                  darkMode ? styles.dark : styles.light
                }`}
              >
                <div className={styles.toggleSlider}>
                  {darkMode ? "月" : "日"}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}