import React, { useEffect, useState } from 'react';
import './BackgroundSection.css';

const BackgroundSection = ({ backgroundImage, backgroundImageM, children, overlay, scrollable, customClass }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentBackground, setCurrentBackground] = useState(backgroundImage);

    useEffect(() => {
        // Function to determine which background image to use based on window width
        const handleResize = () => {
            const isMobile = window.innerWidth <= 600; // Updated to match CSS breakpoint
            setCurrentBackground(isMobile && backgroundImageM ? backgroundImageM : backgroundImage);
        };

        // Set background image on mount and listen to resize
        handleResize();
        window.addEventListener('resize', handleResize);

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        // Cleanup event listener and timer
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, [backgroundImage, backgroundImageM]);

    const sectionStyle = {
        backgroundImage: `url(${require(`../assets/images/${currentBackground}`)})`,
    };

    return (
        <>
            <div 
                style={sectionStyle} 
                className={`background-section ${isVisible ? 'visible' : ''}`}
            ></div>
            {overlay && <div className="background-overlay"></div>}
            <div className={`background-content ${scrollable ? 'scrollable' : ''} ${customClass || ''}`}>
                {children}
            </div>
        </>
    );
};

export default BackgroundSection;










