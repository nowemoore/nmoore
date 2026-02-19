import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "../pages.module.css";
import ProjectCard from "../components/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchangeAlt,
  faGraduationCap,
  faHandshake,
  faHeart,
  faBreadSlice,
  faBook,
  faBookmark,
  faMugHot,
  faFireExtinguisher,
  faClapperboard,
  faChevronDown,
  faLanguage,
  faRainbow,
  faSeedling  
} from "@fortawesome/free-solid-svg-icons";

export default function Takes() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [expandedListId, setExpandedListId] = useState(null);

  const combined = useMemo(() => {
    const takes = [
      {
        title: "Changing Bases",
        description: "And why I think it is more important than most people realise.",
        icon: faExchangeAlt,
        date: "November 2025",
        read: "changing-bases"
      },
      {
        title: "FGLI Guide",
        description: "Tangible observations from my experience as a first-gen student at Penn.",
        icon: faGraduationCap,
        date: "July 2025",
        read: "fgli-guide"
      },
      {
        title: "Fight Classy",
        description: "How to become a more likeable person to argue with.",
        icon: faHandshake,
        date: "August 2025",
        read: "fight-classy"
      }
    ];

    const arts = [
      {
        title: "Crushes",
        description: "A field report from my trip to Canada.",
        icon: faHeart,
        date: "March 2024",
        read: "crushes"
      },
      {
        title: "There's Something about the French Bread",
        description: "A shamelessly oversentimental piece about home.",
        icon: faBreadSlice,
        date: "May 2022",
        read: "french-bread"
      }
    ];

    return [...takes, ...arts];
  }, []);

  const lists = useMemo(() => [
    {
      id: "books",
      title: "Great Fiction",
      icon: faBook,
      bulletIcon: faBookmark,
      items: [
        <><span style={{textDecoration: "line-through"}}><strong>1984</strong> by George Orwell</span> (moved to a different list)</>,
        <><strong>Scythe</strong> by Neal Shusterman</>,
        <><strong>It's Kind of a Funny Story</strong> by Ned Vizzini</>,
        <><strong>The Curious Incident of the Dog in the Night-Time</strong> by Mark Haddon</>,
        <><strong>They Both Die at the End</strong> by Adam Silvera</>
      ]
    },
    {
      id: "tea",
      title: "Tea",
      icon: faMugHot,
      bulletIcon: faBookmark,
      items: [
        <><a href="https://www.youtube.com/watch?v=77wNujaN0x8" target="_blank" rel="noopener noreferrer">Gummiberry Juice</a> (Masala Chai)</>,
        <>Fujian White</>,
        <>Nai Xiang (Milk Oolong)</>,
        <>Kukicha (Bocha)</>,
      ]
    },
    {
      id: "hottakes",
      title: "Hot Takes",
      icon: faFireExtinguisher,
      bulletIcon: faBookmark,
      items: [
        <>Pineapple belongs on pizza.</>,
        <>Star Wars is not sci-fi.</>,
        <>Herbal tea is not tea.</>,
        <>Em-dashes and emojis are not just for AI.</>,
        <>Meatarian diet should be on an opt-in basis.</>,
        <>Chalkboard {">"} Whiteboard.</>,
        <>Phonology is a part of grammar.</>,
        <>We've been getting women's ed <a href="https://www.linkedin.com/posts/nowemoore_more-women-to-cs-activity-7405274919942504448-LIT-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVI9r8BealWxLZnSq_Pnf_1i5dDlii4Z80" target="_blank" rel="noopener noreferrer">all wrong</a>.</>,
      ]
    },
    {
      id: "shows",
      title: "Shows",
      icon: faClapperboard,
      bulletIcon: faBookmark,
      items: [
        <>Sherlock (the BBC one)</>,
        <>Young Sheldon</>,
        <>The Umbrella Academy</>,
        <>Dark</>,
        <>Man on the Inside</>,
        <>Wednesday</>,
        <>Touch</>,
        <>Alice in Borderland</>,
        <>This Is Us</>,
      ]
    },
    {
      id: "languages",
      title: "Languages",
      icon: faLanguage,
      bulletIcon: faBookmark,
      items: [
        <><a href="https://en.wikipedia.org/wiki/Ch%CA%BCol_language" target="_blank" rel="noopener noreferrer">Ch'ol</a></>,
        <>Japanese</>,
        <><a href="https://en.wikipedia.org/wiki/American_Sign_Language" target="_blank" rel="noopener noreferrer">ASL</a></>,
        <>French</>,
      ]
    },
    {
      id: "agency",
      title: "High Agency Quests",
      icon: faSeedling,
      bulletIcon: faBookmark,
      items: [
        <>Stop scrolling</>,
        <>Replicate a study</>,
        <>Send a cold email</>,
        <>Write up an idea</>,
        <>Remake that restaurant food but custom your spices</>,
        <>Outline a book</>,
        <>Make a CV for a genX-er</>
      ]
    },
    {
      id: "random",
      title: "Misc Beliefs",
      icon: faRainbow,
      bulletIcon: faBookmark,
      items: [
        <>Actions create clarity.</>,
        <><Link to="/blog/changing-bases">Changing bases</Link> is the most important skill for the next century or so.</>,
        <>Learning new languages is good for your brain.</>,
        <>People don't remember what happened but how it made them feel.</>,
        <>Writing things down changes how you think about them.</>,
        <>Spreadsheets are underrated.</>,
        <>Who watches/owns a TV anymore?</>,
      ]
    },
  ], []);

  const [leftLists, rightLists] = useMemo(() => {
  const left = [];
  const right = [];
  lists.forEach((l, i) => (i % 2 === 0 ? left.push(l) : right.push(l)));
  return [left, right];
}, [lists]);


  const toggleList = (listId) => {
    setExpandedListId((prev) => (prev === listId ? null : listId));
  };

  const hasMore = combined.length > 3;

  return (
    <>
      {/* Commentary & Arts Section */}
      <section
        className={styles.section}
        style={{
          backgroundImage: "url(/images/arts.jpg)"
        }}
      >
        <div className={styles.sectionOverlay} />
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Unsolicited Commentary & Arts</h2>
            <p className={styles.sectionDescription}>
              In honour of my school English teacher who says that authors don't write when they get ideas but when something ticks them off. Occasional Tim Burton vibes.
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {combined.slice(0, 3).map((p, idx) => (
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
                {combined.slice(3).map((p, idx) => (
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

      {/* Lists Section */}
      <section
        className={styles.section}
        style={{
          backgroundImage: "url(/images/thefrenchbread.jpg)"
        }}
      >
        <div className={styles.sectionOverlay} />
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Lists</h2>
            <p className={styles.sectionDescription}>
              Here are some of my faves. Inspired by Gavin. My selection is cheaper than Gavin's for now, but then again I've had less time on this planet.
            </p>
          </div>

          <div className={styles.listsColumns}>
  <div className={styles.listsCol}>
    {leftLists.map((list) => (
      <div key={list.id} className={styles.listItem}>
        <button
          className={styles.listHeader}
          onClick={() => toggleList(list.id)}
          type="button"
        >
          <span className={styles.listTitleWrapper}>
            <FontAwesomeIcon icon={list.icon} className={styles.listIcon} />
            <span className={styles.listTitle}>{list.title}</span>
          </span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${styles.listChevron} ${
              expandedListId === list.id ? styles.listChevronExpanded : ""
            }`}
          />
        </button>

        <div
          className={`${styles.listContent} ${
            expandedListId === list.id ? styles.listContentExpanded : ""
          }`}
        >
          <ul className={styles.listItems}>
            {list.items.map((item, idx) => (
              <li key={idx}>
                <FontAwesomeIcon
                  icon={list.bulletIcon}
                  className={styles.listBulletIcon}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>

  <div className={styles.listsCol}>
      {rightLists.map((list) => (
        <div key={list.id} className={styles.listItem}>
          {/* identical content */}
          <button
            className={styles.listHeader}
            onClick={() => toggleList(list.id)}
            type="button"
          >
            <span className={styles.listTitleWrapper}>
              <FontAwesomeIcon icon={list.icon} className={styles.listIcon} />
              <span className={styles.listTitle}>{list.title}</span>
            </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${styles.listChevron} ${
                expandedListId === list.id ? styles.listChevronExpanded : ""
              }`}
            />
          </button>

          <div
            className={`${styles.listContent} ${
              expandedListId === list.id ? styles.listContentExpanded : ""
            }`}
          >
            <ul className={styles.listItems}>
              {list.items.map((item, idx) => (
                <li key={idx}>
                  <FontAwesomeIcon
                    icon={list.bulletIcon}
                    className={styles.listBulletIcon}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>

        </div>
      </section>
    </>
  );
}