import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../pages.module.css";
import ProjectCard from "../components/ProjectCard";
import {
  faBrain, 
  faCalculator, 
  faLanguage, 
  faRobot, 
  faComments, 
  faHeadphones, 
  faProjectDiagram, 
  faMinusCircle, 
  faUserSecret  
} from "@fortawesome/free-solid-svg-icons";

export default function Research() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const projects = useMemo(
    () => [
      {
        title: "Secure AI-Powered Decision-Making",
        description:
          "A larger project on how judgment-impairing conditions can help us understand the security of AI-Powered decision-making.",
        icon: faBrain,
        date: "November 2025",
        page: "https://nowemoore.github.io/sad/",
        onepager: "https://github.com/nowemoore/sad/blob/main/onepager_general.pdf"
      },
      {
        title: "Fermi Problems",
        description:
          "A showcase of estimation problems and solutions. General intuitions for my decision tree.",
        icon: faCalculator,
        date: "August 2025",
        read: "fermi-problems"
      },
      {
        title: "Minimum Feature Specification: Tool for Formal Phonology",
        description: "A user-friendly tool for early-stage phonological analysis.",
        icon: faLanguage,
        date: "June 2025",
        page: "https://nowemoore.github.io/phonology_app/",
        read: "https://nowemoore.github.io/phonology_app/help.html"
      },
      {
        title: "Hedging Our Bets on LLMs",
        description:
          "HCI-focused thesis on human perception of linguistic uncertainty expressions and LLM calibration.",
        icon: faRobot,
        date: "May 2025",
        paper: "/docs/mat-thesis.pdf"
      },
      {
        title: "Not Everything is up for Debate",
        description:
          "Pilot project exploring sycophancy behavior in LLMs based on training data representation.",
        icon: faComments,
        date: "May 2025",
        paper: "/docs/syc-paper.pdf"
      },
      {
        title: "How Close is Close Enough?",
        description:
          "Experimental study testing English native speakers' sensitivity to phonemic differences.",
        icon: faHeadphones,
        date: "May 2024",
        paper: "/docs/cam-paper-1.pdf",
        abstract: "/docs/se-abs.pdf"
      },
      {
        title: "Early and Late Ergativity",
        description:
          "Theoretical review of ergative systems in Hindi and Ch'ol with predictions on early learner language acquisition.",
        icon: faProjectDiagram,
        date: "May 2024",
        paper: "/docs/erg-paper.pdf"
      },
      {
        title: "More Misery Is Coming",
        description:
          "A closer look at the scope of AGREE versus the scope of Negative Concord in West Slavic languages.",
        icon: faMinusCircle,
        date: "May 2023",
        paper: "/docs/neg-paper.pdf",
        abstract: "/docs/neg-abs.pdf",
        poster: "/docs/neg-poster.pdf"
      },
      {
        title: "Czech 'SE': Multiple Functions Are Better than One",
        description:
          "Documentation of my search for implicit and/or explicit linguistic agents in various constructions using the 'SE' particle.",
        icon: faUserSecret,
        date: "December 2022",
        paper: "/docs/se-paper.pdf",
        abstract: "/docs/se-abs.pdf"
      }
    ],
    []
  );

  const hasMore = projects.length > 3;

  return (
    <section
        className={styles.section}
        style={{
          backgroundImage: "url(/images/neural.jpg)"
        }}
      >
        <div className={styles.sectionOverlay} />
        <div className={styles.sectionContent}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Research+</h2>
          <p className={styles.sectionDescription}>
           Also includes other science-flavoured stuff. Guided by the infamous: <em>Believe nothing you hear and a half of what you see.</em> ~E. A. Poe <br />
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