import React from "react";
import styles from "../pages.module.css";

export default function Home() {
  const handleScrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground} />

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.titleLine}>Nowe Moore</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Safer AI • Smarter Communities • Authentic Opinions
        </p>

        <button
          className={styles.scrollDownBtn}
          onClick={handleScrollToAbout}
        >
          <i className="fas fa-circle-chevron-down" />
          <span>check out my work</span>
        </button>
      </div>
    </section>
  );
}