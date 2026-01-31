import React from "react";
import styles from "./components.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({ project, onRead }) {
  const { title, description, date, icon, page, read, onepager, poster, paper, abstract } = project;
  const cardIcon = icon || faFlask;

  const handleReadClick = () => {
    if (read && onRead && !read.startsWith("http")) {
      onRead(read);
    }
  };

  return (
    <div className={styles.projectCard}>
      <div className={styles.cardContent}>
        <FontAwesomeIcon icon={cardIcon} className={styles.cardIcon} />
        <span className={styles.cardDate}>{date}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardActions}>
          {page && (
            <a href={page} target="_blank" rel="noopener noreferrer">
              <button className={styles.cardButton}>Page</button>
            </a>
          )}
          {read && (
            read.startsWith("http") ? (
              <a href={read} target="_blank" rel="noopener noreferrer">
                <button className={styles.cardButton}>Read</button>
              </a>
            ) : (
              <button className={styles.cardButton} onClick={handleReadClick}>Read</button>
            )
          )}
          {onepager && (
            <a href={onepager} target="_blank" rel="noopener noreferrer">
              <button className={styles.cardButton}>One-Pager</button>
            </a>
          )}
          {paper && (
            <a href={paper} target="_blank" rel="noopener noreferrer">
              <button className={styles.cardButton}>Paper</button>
            </a>
          )}
          {abstract && (
            <a href={abstract} target="_blank" rel="noopener noreferrer">
              <button className={styles.cardButton}>Abstract</button>
            </a>
          )}
          {poster && (
            <a href={poster} target="_blank" rel="noopener noreferrer">
              <button className={styles.cardButton}>Poster</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}