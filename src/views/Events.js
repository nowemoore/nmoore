import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../pages.module.css";
import ProjectCard from "../components/ProjectCard";
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faUsers, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";

export default function Events() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const projects = useMemo(
    () => [
      {
        title: "Python from the Very Beginning",
        date: "August – December 2025",
        description:
          "8-week intro course to Python programming for a women's ed NGO in CEE. Covers major barriers to entry such as environment setup and applied examples.",
        icon: faPython,
        read: "https://ajtyvit.sk/podujatia/zacni-s-pythonom/",
        page: "https://github.com/nowemoore/pythoness/tree/main"
      },
      {
        title: "AI Safety & Social Impacts of AI Ideathon",
        description:
          "Saturday ideathon bringing together academics from diverse fields to brainstorm safety questions in AI.",
        date: "April 2025",
        icon: faUsers,
        read: "https://omnia.sas.upenn.edu/story/new-mind-AI-nikola-moore",
        poster: "/images/ai4g-poster.jpg"
      },
      {
        title: "AI Safety Workshop Series",
        description:
          "3-session workshop series introducing AI safety concepts to academics from diverse fields.",
        date: "February – March 2025",
        icon: faChalkboardTeacher,
        read: "https://omnia.sas.upenn.edu/story/new-mind-AI-nikola-moore",
        poster: "/images/tnm.jpg"
      }
    ],
    []
  );

  const hasMore = projects.length > 3;

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: "var(--primary-bg)" }}
    >
      <div className={styles.sectionContent}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Community Work</h2>
          <p className={styles.sectionDescription}>
            Building smarter and more productive communities through sharing
            knowledge and fostering collaboration.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.slice(0, 3).map((p, idx) => (
            <ProjectCard
              key={idx}
              project={p}
              onRead={(slug) => navigate(`/blog/${slug}`)}
            />
          ))}
        </div>

        {hasMore && (
          <>
            <div
              className={`${styles.projectsGridExpanded} ${showAll ? styles.expanded : ""}`}
            >
              {projects.slice(3).map((p, idx) => (
                <ProjectCard
                  key={idx}
                  project={p}
                  onRead={(slug) => navigate(`/blog/${slug}`)}
                />
              ))}
            </div>

            <div className={styles.showMoreContainer}>
              <button
                className={styles.showMoreLessBtn}
                onClick={() => setShowAll(!showAll)}
                type="button"
              >
                <i className={`fas ${showAll ? "fa-circle-chevron-up" : "fa-circle-chevron-down"}`} />
                <span>{showAll ? "show less" : "show more"}</span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}