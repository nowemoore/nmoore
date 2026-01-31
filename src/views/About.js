import React from "react";
import styles from "../pages.module.css";

export default function About() {
  const education = [
    "BA, Hons. Language, Cognition, and Computer Science @ Penn",
    "MA, Linguistics (computational) @ Penn",
    "Visiting student @ Pembroke College, Cambridge"
  ];

  const experience = [
    "2+ years in graduate research, 6 intl. conferences (counting)",
    "Organiseed an AI safety workshop series for 120+ participants",
    "Helped orgs across 3 continents fetch and upskill STEM talent"
  ];

  const achievements = [
    "Awarded Hoenigswald Prize for best thesis in Linguisitcs",
    "Awarded Draw Down the Lightning grant by Penn's President",
    "Shared my work at 6+ intl. conferences across the UK and NA"
  ];

  return (
    <>
      {/* About */}
      <section
          className={styles.section}
          style={{
            backgroundImage: "url(/images/aboutme.jpg)"
          }}
        >
          <div className={styles.sectionOverlay} />
          <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>About Me</h2>
          </div>

          <div className={styles.aboutMain}>
            <p className={styles.aboutParagraph}>
              Curious about the mind, human and artificial. I'm specifically
              interested in decision-making systems: what environments enable
              and break decision-making processes as we know them, and to what
              extent AI inherits human heuristics of "good choice". In addition
              to safe AI, I contribute to a range of activities that help build
              smarter and more productive communities: from creating pop-science
              content and courses to organising larger events across the
              academic community and beyond.
            </p>

            <div className={styles.divider}>
              <i className="fas fa-diamond" />
              <i className="fas fa-circle" />
              <i className="fas fa-diamond" />
            </div>

            <h3 className={styles.aboutSubtitle}>Here are 3 Things I Care about:</h3>

            <div className={styles.aboutInterests}>
              <div className={styles.interestItem}>
                <div className={styles.interestIcon}>
                  <i className="fas fa-puzzle-piece" />
                </div>
                <span className={styles.interestLabel}>Research</span>
                <p className={styles.interestDescription}>
                  Curious to see some of what's yet to be seen re language,
                  cognition, and AI.
                </p>
              </div>

              <div className={styles.interestItem}>
                <div className={styles.interestIcon}>
                  <i className="fas fa-heart" />
                </div>
                <span className={styles.interestLabel}>Events</span>
                <p className={styles.interestDescription}>
                  Helping communities up curiosity and productiveness in effective
                  ways.
                </p>
              </div>

              <div className={styles.interestItem}>
                <div className={styles.interestIcon}>
                  <i className="fas fa-lightbulb" />
                </div>
                <span className={styles.interestLabel}>Commentary</span>
                <p className={styles.interestDescription}>
                  Sometimes sharing ideas. Mostly inviting opinions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section
        className={styles.section}
        style={{
          backgroundImage: "url(/images/resume-bg.jpg)"
        }}
      >
        <div className={styles.sectionOverlay} />
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Resume Highlights</h2>
          </div>

          <div className={styles.resumeGrid}>
            <div className={styles.resumeBlock}>
              <h3 className={styles.resumeSubtitle}>
                <i className="fas fa-graduation-cap" /> Education
              </h3>
              <ul className={styles.resumeList}>
                {education.map((x, i) => <li key={i}>{x}</li>)}
              </ul>
            </div>

            <div className={styles.resumeBlock}>
              <h3 className={styles.resumeSubtitle}>
                <i className="fas fa-cogs" /> Projects & XP
              </h3>
              <ul className={styles.resumeList}>
                {experience.map((x, i) => <li key={i}>{x}</li>)}
              </ul>
            </div>

            <div className={styles.resumeBlock}>
              <h3 className={styles.resumeSubtitle}>
                <i className="fas fa-star" /> Achievements
              </h3>
              <ul className={styles.resumeList}>
                {achievements.map((x, i) => <li key={i}>{x}</li>)}
              </ul>
            </div>
          </div>

          <div className={styles.center}>
            <a
              href="https://github.com/nowemoore/resume/blob/main/cv.pdf"
              className={styles.cvButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Full CV</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
