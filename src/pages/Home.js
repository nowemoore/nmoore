import React, { useEffect } from 'react';
import BackgroundSection from '../components/BackgroundSection';
import QuoteSection from '../components/QuoteSection';
import './Home.css';
import Typewriter from 'typewriter-effect';

const Home = () => {
    useEffect(() => {
        // Apply no-scroll class to body when this component is mounted
        document.body.classList.add('no-scroll');

        // Cleanup: remove no-scroll class when this component is unmounted
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <BackgroundSection backgroundImage="intropic.jpg">
            <div className="center-container">
                <QuoteSection 
                    quote="There's never been a story of more woe." 
                />
            </div>
            <div className="typewriter-container">
                <div className="typewriter-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Hey there! Welcome to my personal website where I may share some thoughts when')
                                .pauseFor(500)
                                .deleteChars(4)
                                .typeString('if')
                                .pauseFor(1000)
                                .deleteChars(2)
                                .typeString('when I have some spare time.')
                                .pauseFor(2500)
                                .start();
                        }}
                        options={{
                            delay: 50,
                        }}
                    />
                </div>
            </div>
        </BackgroundSection>
    );
};

export default Home;






