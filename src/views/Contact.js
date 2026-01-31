import React from "react";
import styles from "../pages.module.css";

export default function Contact() {
  const contactLinks = [
    { icon: "fab fa-github", url: "https://github.com/nowemoore" },
    { icon: "fab fa-facebook", url: "https://www.facebook.com/nika.datkova" },
    { icon: "fab fa-instagram", url: "https://www.instagram.com/nowe.moore/" },
    { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/nowemoore/" },
    { icon: "fas fa-envelope", url: "mailto:nowe.moore@gmail.com" },
    { icon: "fas fa-ellipsis", url: "https://forms.gle/cRouWxe3XHBuJqUs6" }
  ];

  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: "url(/images/contactme.jpg)"
      }}
    >
      <div className={styles.sectionOverlay} />
      <div className={styles.sectionContentCentered}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionDescription}>
            Always open to discussing research collaborations, community-building opportunities,
            or just connecting with fellow problem-solvers.
          </p>
        </div>

        <div className={styles.contactMethods}>
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className={styles.contactButton}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <div className={styles.contactButtonIcon}>
                <i className={link.icon} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}