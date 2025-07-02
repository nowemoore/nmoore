import React from 'react';
import { Link } from 'react-router-dom';
import './TextPageBase.css';
import BackgroundSection from '../../components/BackgroundSection';

const TextPageBase = ({ title, date, chips, children, backLink = "/projects", backgroundImage = "academic.jpg" }) => {
    return (
        <BackgroundSection 
            backgroundImage={backgroundImage} 
            overlay={true} 
            scrollable={true} 
            customStyles={{ paddingBottom: '10vh' }}
        >
            <div className="text-page-content">
                {/* Back button */}
                <div className="text-page-nav">
                    <Link to={backLink} className="back-button">Back to Projects</Link>
                </div>

                {/* Title */}
                <div className="text-page-header">
                    {chips && (
                        <div className="text-page-chips">
                            {chips.map(chip => (
                                <span key={chip} className={`text-chip chip-${chip}`}>
                                    {chip}
                                </span>
                            ))}
                        </div>
                    )}
                    <h1 className="text-page-title">{title}</h1>
                    {date && <div className="text-page-date">{date}</div>}
                </div>

                {/* Content */}
                <div className="text-page-body">
                    {children}
                </div>
            </div>
        </BackgroundSection>
    );
};

export default TextPageBase;