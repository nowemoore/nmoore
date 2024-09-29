import React from 'react';
import './Footer.css';
import signatureImage from '../assets/images/signature.png'; // Corrected path

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>Philadelphia, PA, US</p> {/* Adjust location text as needed */}
            </div>
            <div className="footer-right">
                <img src={signatureImage} alt="Signature" className="footer-signature" />
                <p>&copy;</p> {/* Adjust location text as needed */}
            </div>
        </footer>
    );
};

export default Footer;