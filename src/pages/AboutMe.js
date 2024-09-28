import React from 'react';
import './AboutMe.css';
import BackgroundSection from '../components/BackgroundSection';
import cvPDF from '../assets/docs/cv.pdf'; // Replace with your CV PDF path

const AboutMe = () => {
    return (
        <BackgroundSection backgroundImage="aboutme.jpg" overlay={true}>
            <div className="about-me-content">
                <h1 className="about-me-title">Something about me.</h1>
                <p className="about-me-text">
                    I'm an MA student in the Department of Linguistics at the University of Pennsylvania. I'm interested in linguistic agency and what it can tell us about how minds, both human and artificial, understand each other's actions. I also spend a lot of time thinking about resource allocation, AI-related x-risks, human-computer (or computer-human) interaction, and policy. My favourite case is ergative and I really dislike pasta.
                </p>
                <a href={cvPDF} className="cv-button" target="_blank" rel="noopener noreferrer">
                    View CV
                </a>
            </div>
        </BackgroundSection>
    );
};

export default AboutMe;
