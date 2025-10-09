import React from 'react';
import './AboutMe.css';
import BackgroundSection from '../components/BackgroundSection';

const AboutMe = () => {
    return (
<BackgroundSection
    backgroundImage="aboutme.jpg"
    backgroundImageM="mecam.jpg"
    overlay={true}
    scrollable={false}
    customStyles={{
        width: '90%', 
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
    }}
    customClass="custom-aboutme-layout">
            <div className="about-me-content">
                <h1 className="about-me-title">Something about me.</h1>
                <p className="about-me-text">
                A lot of what I do stems from my general aim to make sure that we're building algorithm-mediated societies that are <b>smart</b>, <b>secure</b>, and <b>built for humans</b>. 
                I'm specifically invested in how AI systems can contribute toward (as well as jeopardise) this cause.
                My blended background in <b>language</b>, <b>cognition</b>, and <b>computer sciences</b> inspires my inquiry in how the mind&mdash;human or artificial&mdash;uses language as a medium to facilitate thought, intentions, decision-making, and human-computer interaction.
                I believe more answers to questions in this domain are necessary for a more sustainable progress.
                </p>
                <a href="https://github.com/nowemoore/resume/blob/main/cv_nmoore_git.pdf" className="cv-button" target="_blank" rel="noopener noreferrer">
    View CV
</a>
            </div>
        </BackgroundSection>
    );
};

export default AboutMe;
