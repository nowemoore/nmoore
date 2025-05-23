import React from 'react';
import './AboutMe.css';
import BackgroundSection from '../components/BackgroundSection';
import cvPDF from '../assets/docs/cv.pdf'; // Replace with your CV PDF path

const AboutMe = () => {
    return (
<BackgroundSection
    backgroundImage="aboutme.jpg"
    backgroundImageM="mecam.jpg"
    overlay={true}
    scrollable={false}
    customStyles={{
        width: '90%',  // Custom width
        textAlign: 'left',
        display: 'flex',  // Ensures Flexbox layout is applied
        justifyContent: 'flex-start',  // Align content to the top (vertical alignment)
        alignItems: 'flex-start',
    }}
    customClass="custom-aboutme-layout">
            <div className="about-me-content">
                <h1 className="about-me-title">Something about me.</h1>
                <p className="about-me-text">
                I'm a recent graduate from Penn with an MA in Linguistics, BA in Linguistics and Cognitive Science, and a minor in Computer Science. I'm interested in how language output can tell us about how minds, both human and artificial, understand each other and the world. I also spend a lot of time thinking about resource allocation, AI-related x-risks, human-computer (or computer-human) interaction, and policy. My favourite case is ergative and I really dislike pasta.
                </p>
                <a href={cvPDF} className="cv-button" target="_blank" rel="noopener noreferrer">
                    View CV
                </a>
            </div>
        </BackgroundSection>
    );
};

export default AboutMe;
