import React from 'react';
import BackgroundSection from '../components/BackgroundSection';
import QuoteSection from '../components/QuoteSection';
import './Home.css';

const Home = () => {
    // Easily adjust this value to move the quote up or down (in vh)
    const quotePosition = 20;

    return (
        <BackgroundSection 
            backgroundImage="intropic.jpg" 
            backgroundImageM="intropic-mobile.jpg" 
            overlay={false}
            scrollable={false}
            customStyles={{
                width: '100%',
                overflowX: 'hidden',
            }}
        >
            <div 
                className="center-container" 
                style={{ marginTop: `${quotePosition}vh` }}
            >
                <QuoteSection quote="There's never been a story of more woe." />
            </div>
        </BackgroundSection>
    );
};

export default Home;





