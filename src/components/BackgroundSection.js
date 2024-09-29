import React, { useEffect, useState } from 'react';
import './BackgroundSection.css';

const BackgroundSection = ({ backgroundImage, children, overlay, scrollable, customStyles, customClass }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0); // Ensure the window scrolls to the top

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Delay to ensure the visibility change starts after mount

        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures this runs only on mount

    const sectionStyle = {
        backgroundImage: `url(${require(`../assets/images/${backgroundImage}`)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1, // Background behind content
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1.5s ease-in-out',
    };

    const overlayStyle = overlay
        ? {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: -1,
          }
        : {};

    // Merge default styles with custom styles passed as props
    const contentStyle = {
        position: 'relative',
        zIndex: 2, // Content is on top of the background and overlay
        overflowY: scrollable ? 'auto' : 'hidden',
        height: '100%',
        width: '70%', // Default width
        paddingTop: '20vh', // Default top padding
        paddingLeft: '0vw', // Default padding for the sides
        paddingRight: '0vw',
        boxSizing: 'border-box',
        margin: '0 auto', // Center content horizontally by default
        ...customStyles, // Override with custom styles passed as props
    };

    return (
        <>
            <div style={sectionStyle} className="background-section"></div>
            {overlay && <div style={overlayStyle} className="background-overlay"></div>}
            <div style={contentStyle} className={`background-content ${customClass || ''}`}>
                {children}
            </div>
        </>
    );
};

export default BackgroundSection;









