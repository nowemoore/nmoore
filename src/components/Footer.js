import React from "react";
import styles from "./components.module.css";
import signature from "../signature.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <img
          src={signature}
          alt="Signature"
          className={styles.footerSignature}
        />
        <p>© 2025</p>
      </div>

      <div className={styles.footerRight}>
        <p>London, UK</p>
      </div>
    </footer>
  );
}
