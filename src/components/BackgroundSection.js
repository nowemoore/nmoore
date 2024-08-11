import React, { useEffect, useState } from 'react';
import './BackgroundSection.css';

const BackgroundSection = ({ backgroundImage, children, overlay }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Delay to ensure the visibility change starts after mount

        return () => clearTimeout(timer);
    }, []);

    const sectionStyle = {
        backgroundImage: `url(${require(`../assets/images/${backgroundImage}`)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', /* Full viewport height */
        position: 'relative', /* To position the content correctly */
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', /* Center content vertically */
        opacity: 0, /* Start hidden */
        transition: 'opacity 1.5s ease-in-out', /* Smooth fade-in */
    };

    if (isVisible) {
        sectionStyle.opacity = 1; /* Fade to visible */
    }

    const overlayStyle = overlay
        ? {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)', /* Black overlay with 60% opacity */
              zIndex: 1,
          }
        : {};

    const contentStyle = {
        position: 'relative',
        zIndex: 2,
        paddingTop: '80px', /* Ensure content starts below the navbar */
        paddingLeft: '20px', /* Optional: Adjust to your liking */
        paddingRight: '20px', /* Optional: Adjust to your liking */
    };

    return (
        <div style={sectionStyle}>
            {overlay && <div style={overlayStyle}></div>}
            <div style={contentStyle}>
                {children}
            </div>
        </div>
    );
};

export default BackgroundSection;





