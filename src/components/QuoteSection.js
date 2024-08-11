import React from 'react';
import './QuoteSection.css';

const QuoteSection = ({ quote, author }) => {
    return (
        <div className="quote-section">
            <div className="quote-background">
                <span className="quote-mark left-quote">“</span> {/* Opening quotation mark */}
                <div className="quote-content">
                    <h1 className="quote-text">{quote}</h1>
                </div>
                <span className="quote-mark right-quote">”</span> {/* Closing quotation mark */}
            </div>
        </div>
    );
};

export default QuoteSection;


