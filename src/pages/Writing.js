import React, { useState } from 'react';
import './Writing.css';
import BackgroundSection from '../components/BackgroundSection';
import crushespdf from "../assets/docs/crushes.pdf";
import crushespdfsk from "../assets/docs/crushes_sk.pdf";
import everybodycalmdown from "../assets/docs/everybody_calm_down.pdf";
import frenchbread from "../assets/docs/the_french_bread.pdf";

const Writing = () => {
    const papers = [
        {
            id: 1,
            title: "Crushes",
            description: "A field report from my trip to Canada.",
            readLink: crushespdf,
            translationLink: crushespdfsk
        },
        {
            id: 2,
            title: "Everybody Calm Down",
            description: "An unsolicited commentary on the perceived tension between generative linguistics and computer science.",
            readLink: everybodycalmdown,
            translationLink: null // No translation available
        },
        {
            id: 3,
            title: "The French Bread",
            description: "A shamelessly oversentimental piece about home.",
            readLink: frenchbread,
            translationLink: null
        }
    ];

    const [expandedPaper, setExpandedPaper] = useState(null);

    const togglePaper = (id) => {
        setExpandedPaper(expandedPaper === id ? null : id);
    };

    return (
        <BackgroundSection backgroundImage="academic.jpg" overlay={true} scrollable={true} customStyles={{
            paddingBottom: '15vh',
        }}
        customClass="custom-writing-layout">
            <div className="writing-content">
                <h1 className="writing-title">My Writings</h1>
                <p className="writing-intro">
                    Here is some of my passion writing. Read at your own risk. Find West Slavic translation with some pieces.
                </p>
                <div className="writings-list">
                    {papers.map(paper => (
                        <div key={paper.id} className={`writing-item ${expandedPaper === paper.id ? 'expanded' : ''}`}>
                            <div className="writing-header">
                                <button className="toggle-button" onClick={() => togglePaper(paper.id)}>
                                    {expandedPaper === paper.id ? '\u25B2' : '\u25BC'}
                                </button>
                                <h2 className="paper-title">{paper.title}</h2>
                                <div className="writing-buttons">
                                    <a href={paper.readLink} className="writing-button" target="_blank" rel="noopener noreferrer">
                                        Read
                                    </a>
                                    {paper.translationLink && (
                                        <a href={paper.translationLink} className="writing-button writing-button-translation" target="_blank" rel="noopener noreferrer">
                                            Read Translation
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="writing-description">
                                <p>{paper.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BackgroundSection>
    );
};

export default Writing;

