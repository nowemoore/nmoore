import React, { useState } from 'react';
import './Academic.css';
import BackgroundSection from '../components/BackgroundSection'; 
import sepaper from '../assets/docs/se_paper.pdf';
import seabs from '../assets/docs/se_abstract.pdf';
import nlpp from '../assets/docs/nlp_principles.pdf';
import negpaper from '../assets/docs/neg_paper.pdf';
import negabs from '../assets/docs/neg_abs.pdf';
import negpost from '../assets/docs/neg_post.pdf';
import ergpaper from '../assets/docs/erg_paper.pdf';
import ptpaper from '../assets/docs/pt_paper.pdf';

const Academic = () => {
    const papers = [
        {
            id: 1,
            title: "Czech 'SE': Multiple Functions Are Better than One",
            description: "Here is where I document my search for implicit and/or explicit linguistic agents in various constructions using the 'SE' particle.",
            readLink: sepaper,
            posterLink: null, 
            abstractLink: seabs, 
            date: "December 2022"
        },
        {
            id: 2,
            title: "World Through the Eyes of AI",
            description: "A beginner-friendly introduction to LLMs. Disclaimer: pure pop-science; no academic contribution.",
            readLink: nlpp,
            posterLink: null,  // No poster available
            abstractLink: null,  // Link to the abstract
            date: "July 2023"
        },
        {
            id: 3,
            title: "More Misery Is Coming: Negative Concord (Not) As a Form of AGREE in West Slavic",
            description: "Here is where I had a better look at the scope of AGREE versus the scope of Negative Concord in WS.",
            readLink: negpaper,
            posterLink: negpost,  // Link to the poster
            abstractLink: negabs,  // Link to the abstract
            date: "September 2023"
        },
        {
            id: 4,
            title: "Early and Late Ergativity: Single Phenomenon, Multiple Timelines",
            description: "A theoretical review of two ergative systems (that of Hindi and that of Ch'ol) that makes a few predictions on early learner language acquisition for each.",
            readLink: ergpaper,
            posterLink: null, 
            abstractLink: null,
            date: "May 2024" 
        },
        {
            id: 5,
            title: "How Close Is Close Enough?",
            description: "An experimental study testing the sensitivity of English native speakers to phonemic differences.",
            readLink: ptpaper,
            posterLink: null, 
            abstractLink: null,
            date: "June 2024" 
        },
    ];

    // Sort the papers array in descending order by id
    papers.sort((a, b) => b.id - a.id);

    const [expandedPaper, setExpandedPaper] = useState(null);

    const togglePaper = (id) => {
        setExpandedPaper(expandedPaper === id ? null : id);
    };

    const isMobile = window.innerWidth <= 767; // Check if screen width is mobile size

    return (
        <BackgroundSection backgroundImage="academic.jpg" overlay={true} scrollable={true} customStyles={{
            paddingBottom: '15vh',
        }}
        customClass="custom-academic-layout">
            <div className="academic-content">
                <h1 className="academic-title">My Academic Work</h1>
                <p className="academic-description">
                    Here is some of what I've worked on before.
                </p>
                <div className="papers-list">
                    {papers.map(paper => (
                        <div key={paper.id} className={`paper-item ${expandedPaper === paper.id ? 'expanded' : ''}`}>
                            
                            {/* Title Section */}
                            <div className="paper-title-container">
                                <h2 className="paper-title">{paper.title}</h2>
                            </div>

                            <div className="paper-date">{paper.date}</div>

                            {/* Description Section */}
                            <div className="paper-description-container">
                                <p className={`paper-description ${expandedPaper === paper.id ? 'expanded' : ''}`}>
                                    {paper.description}
                                </p>
                            </div>

                            {/* Button Section */}
                            <div className="paper-buttons">
                                <a href={paper.readLink} className="paper-button" target="_blank" rel="noopener noreferrer">
                                    Paper
                                </a>
                                {paper.posterLink && (
                                    <a href={paper.posterLink} className="paper-button paper-button-poster" target="_blank" rel="noopener noreferrer">
                                        Poster
                                    </a>
                                )}
                                {paper.abstractLink && (
                                    <a href={paper.abstractLink} className="paper-button paper-button-abstract" target="_blank" rel="noopener noreferrer">
                                        Abstract
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BackgroundSection>
    );
};

export default Academic;











