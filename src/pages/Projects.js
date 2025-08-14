import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import BackgroundSection from '../components/BackgroundSection';

import sepaper from '../assets/docs/se_paper.pdf';
import seabs from '../assets/docs/se_abstract.pdf';
import negpaper from '../assets/docs/neg_paper.pdf';
import negabs from '../assets/docs/neg_abs.pdf';
import negpost from '../assets/docs/neg_post.pdf';
import ergpaper from '../assets/docs/erg_paper.pdf';
import ptpaper from '../assets/docs/pt_paper.pdf';
import mathesis from '../assets/docs/mathesis.pdf';
import sycproject from '../assets/docs/syc.pdf';
import crushespdfsk from "../assets/docs/crushes_sk.pdf";
import everybodycalmdown from "../assets/docs/everybody_calm_down.pdf";
import thefrenchbreadpic from "../assets/images/thefrenchbread.jpg";
import friendlybot from "../assets/images/friendlybot.jpg"
import poutine from "../assets/images/poutine.jpg"
import mayan from "../assets/images/mayan.jpg"
import tree from "../assets/images/tree.jpg"
import oldtree from "../assets/images/treeold.jpg"
import gradientchoice from "../assets/images/gradientchoice.jpg"
import humanoidllm from "../assets/images/humanoidllm.jpg"
import neural from "../assets/images/neural.jpg"
import phonotool from "../assets/images/phonotool.png"
import library from "../assets/images/library.jpg"
import suit from "../assets/images/suit.jpg"
import fermi from "../assets/images/fermi.png"

const Projects = () => {
    const [selectedChips, setSelectedChips] = useState([]);
    const [columnCount, setColumnCount] = useState(3);
    const containerRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: "Czech 'SE': Multiple Functions Are Better than One",
            description: "Documentation of my search for implicit and/or explicit linguistic agents in various constructions using the 'SE' particle.",
            thumbnail: oldtree,
            readMoreLink: null,
            paperLink: sepaper,
            abstractLink: seabs,
            posterLink: null,
            chips: ["academic"],
            date: "December 2022"
        },
        {
            id: 2,
            title: "More Misery Is Coming: Negative Concord in West Slavic",
            description: "A closer look at the scope of AGREE versus the scope of Negative Concord in West Slavic languages.",
            thumbnail: tree,
            readMoreLink: null,
            paperLink: negpaper,
            abstractLink: negabs,
            posterLink: negpost,
            chips: ["academic"],
            date: "September 2023"
        },
        {
            id: 3,
            title: "Early and Late Ergativity: Single Phenomenon, Multiple Timelines",
            description: "Theoretical review of ergative systems in Hindi and Ch'ol with predictions on early learner language acquisition.",
            thumbnail: mayan,
            readMoreLink: null,
            paperLink: ergpaper,
            abstractLink: null,
            posterLink: null,
            chips: ["academic"],
            date: "May 2024"
        },
        {
            id: 4,
            title: "How Close Is Close Enough?",
            description: "Experimental study testing English native speakers' sensitivity to phonemic differences.",
            thumbnail: gradientchoice,
            readMoreLink: null,
            paperLink: ptpaper,
            abstractLink: null,
            posterLink: null,
            chips: ["academic"],
            date: "June 2024"
        },
        {
            id: 5,
            title: "Not Everything is Up for Debate",
            description: "Pilot project exploring sycophancy behavior in LLMs based on training data representation. Progress conitnuously updated.",
            thumbnail: neural,
            readMoreLink: null,
            paperLink: sycproject,
            viewPageLink: "https://nowemoore.github.io/sycophancy_project/", 
            abstractLink: null,
            posterLink: null,
            chips: ["academic", "code"],
            date: "May 2025"
        },
        {
            id: 6,
            title: "Hedging Our Bets on LLMs: Challenges in Calibrating the Language of Uncertainty",
            description: "HCI-focused thesis on human perception of linguistic uncertainty expressions and LLM calibration.",
            thumbnail: humanoidllm,
            readMoreLink: null,
            paperLink: mathesis,
            abstractLink: null,
            posterLink: null,
            chips: ["academic", "code"],
            date: "May 2025"
        },
        {
            id: 7,
            title: "Crushes",
            description: "A field report from my trip to Canada.",
            thumbnail: poutine,
            readMoreLink: "/crushes",
            paperLink: null,
            abstractLink: null,
            posterLink: null,
            chips: ["personal", "art"],
            date: "March 2024",
            translationLink: crushespdfsk
        },
        {
            id: 8,
            title: "Everybody Calm Down",
            description: "Unsolicited commentary on the perceived tension between generative linguistics and computer science.",
            thumbnail: friendlybot,
            readMoreLink: null,
            paperLink: everybodycalmdown,
            abstractLink: null,
            posterLink: null,
            chips: ["personal", "academic"],
            date: "January 2024"
        },
        {
            id: 9,
            title: "The French Bread",
            description: "A shamelessly oversentimental piece about home.",
            thumbnail: thefrenchbreadpic,
            readMoreLink: '/thefrenchbread',
            paperLink: null,
            abstractLink: null,
            posterLink: null,
            chips: ["personal", "art"],
            date: "May 2022"
        },
        {
            id: 10,
            title: "Phoneme-Feature Analysis",
            description: "A user-friendly tool for early-stage phonological analysis. Computes minimum feature specification and sorting by feature. Returns all results.",
            thumbnail: phonotool,
            viewPageLink: "https://nowemoore.github.io/phonology_app/",
            readMoreLink: "https://nowemoore.github.io/phonology_app/help.html",
            chips: ["tool", "academic"],
            date: "June 2025"
        },
        {
            id: 11,
            title: "An Unnecessarily Practical Guide to Thriving in the Ivy League as a FGLI Student",
            description: "A couple of tangible observations from my experience as a first-gen student at Penn.",
            thumbnail: library,
            readMoreLink: "/fgliguide",
            chips: ["tool", "personal"],
            date: "July 2025"
        },
        {
            id: 12,
            title: "Fight Classy",
            description: "How I applied my degree in the Dark Arts to (hopefully) become a more likeable person to argue with.",
            thumbnail: suit,
            readMoreLink: "/onfighting",
            chips: ["tool", "personal"],
            date: "August 2025"
        },
        {
            id: 13,
            title: "A Continuing List of Grounding Fermi Problems (and how to solve them)",
            description: "A showcase of some of my own estimation problems and possible solutions. I also give general intuitions for my decision tree.",
            thumbnail: fermi,
            readMoreLink: "/fermi",
            chips: ["tool"],
            date: "August 2025"
        }
    ];

    // Calculate responsive column count
    useEffect(() => {
        const updateColumnCount = () => {
            const width = window.innerWidth;
            if (width <= 600) {
                setColumnCount(1);
            } else if (width <= 900) {
                setColumnCount(2);
            } else {
                setColumnCount(3);
            }
        };

        updateColumnCount();
        window.addEventListener('resize', updateColumnCount);
        return () => window.removeEventListener('resize', updateColumnCount);
    }, []);

    // Sort by date (newest first)
    const sortedProjects = [...projects].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });

    // Filter projects
    const filteredProjects = selectedChips.length === 0 
        ? sortedProjects 
        : sortedProjects.filter(project => 
            project.chips.some(chip => selectedChips.includes(chip))
          );

    // Distribute projects into columns for masonry layout
    const distributeProjects = (projects, columnCount) => {
        const columns = Array.from({ length: columnCount }, () => []);
        
        if (columnCount === 1) {
            columns[0] = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));
        } else {
            projects.forEach((project, index) => {
                const columnIndex = index % columnCount;
                columns[columnIndex].push(project);
            });
        }

        return columns;
    };

    const projectColumns = distributeProjects(filteredProjects, columnCount);

    const chipTypes = ["art", "personal", "academic", "code", "tool"];

    const handleChipToggle = (chip) => {
        setSelectedChips(prev => 
            prev.includes(chip) 
                ? prev.filter(c => c !== chip)
                : [...prev, chip]
        );
    };

    const renderButton = (link, text, className = "project-button", isReadMore = false) => {
        if (!link) return null;
        
        if (isReadMore) {
            return (
                <a href={link} className={className}>
                    {text}
                </a>
            );
        }
        
        return (
            <a href={link} className={className} target="_blank" rel="noopener noreferrer">
                {text}
            </a>
        );
    };

    const renderProjectCard = (project, index) => (
        <div key={project.id} className="project-card masonry-item">
            {/* Thumbnail with Overlay Title */}
           <div className="project-thumbnail">
<div className={`project-date-overlay ${['', 'rotate-left', 'rotate-right', 'rotate-slight'][Math.floor(Math.random() * 4)]}`}>
  {project.date}
</div>
  {project.thumbnail ? (
    <img src={project.thumbnail} alt={project.title} />
  ) : (
    <div className="thumbnail-placeholder">
      <span>📄</span>
    </div>
  )}
  <div className="project-title-overlay">
    <h3 className={`project-title-over-image ${index % 2 === 0 ? 'style-white-on-black' : 'style-black-on-white'}`}>
  <span className="highlighted-title-text">{project.title}</span>
</h3>
  </div>
</div>


            {/* Chips */}
            <div className="project-chips">
                {project.chips.map(chip => (
                    <span key={chip} className={`project-chip chip-${chip}`}>
                        {chip}
                    </span>
                ))}
            </div>

            {/* Content */}
            <div className="project-content">
                <p className="project-description">{project.description}</p>

                {/* Buttons */}
                <div className="project-buttons">
                    {renderButton(project.viewPageLink, "View Page", "project-button", false)}
                    {renderButton(project.readMoreLink, "Read", "project-button", !project.readMoreLink?.startsWith('http'))}
                    {renderButton(project.paperLink, "View PDF")}
                    {renderButton(project.abstractLink, "Abstract")}
                    {renderButton(project.posterLink, "Poster")}
                </div>
            </div>
        </div>
    );

    return (
        <BackgroundSection 
            backgroundImage="academic.jpg" 
            overlay={true} 
            scrollable={true} 
            customClass="custom-projects-layout"
        >
            <div className="projects-content">
                <h1 className="projects-title">My Projects</h1>
                <p className="projects-description">
                    This page exhibits (some of) my past as well as ongoing academic work, potentially useful tools I've made, and some personal writing (as some may say art). <br></br>Activate the below chips to filter for specific categories. 
                </p>
                
                {/* Filter Chips */}
                <div className="filter-chips">
                    {chipTypes.map(chip => (
                        <button
                            key={chip}
                            className={`filter-chip ${selectedChips.includes(chip) ? 'active' : ''}`}
                            onClick={() => handleChipToggle(chip)}
                        >
                            {chip}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <div className="masonry-container" ref={containerRef}>
                    {projectColumns.map((column, columnIndex) => (
                        <div key={columnIndex} className="masonry-column">
                            {column.map((project, projectIndex) => {
                                // Use projectIndex within the column for consistent styling
                                return renderProjectCard(project, projectIndex);
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </BackgroundSection>
    );
};

export default Projects;