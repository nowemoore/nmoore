import React from 'react';
import BackgroundSection from '../components/BackgroundSection';
import './ContactMe.css';
import FacebookIcon from '../assets/images/facebook-icon.jpg';
import InstagramIcon from '../assets/images/insta-icon.jpg';
import LinkedInIcon from '../assets/images/linkedin-icon.png'; // Ensure this path is correct
import EmailIcon from '../assets/images/gmail-icon.jpg'; // Ensure this path is correct
import FeedbackIcon from '../assets/images/feedback-icon.png'; // Ensure this path is correct

const ContactMe = () => {
    return (
        <BackgroundSection backgroundImage="contactme.jpg" overlay={true}>
            <div className="contact-me-content">
                <h1 className="contact-me-title">Get in touch!</h1>
                <p className="contact-me-description">
                    Drop me a word on social media, email, or through an anonymous feedback form.
                </p>

                <div className="social-links">
                    <a href="https://www.facebook.com/nika.datkova/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src={FacebookIcon} alt="Facebook" />
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src={InstagramIcon} alt="Instagram" />
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/in/nikola-moore-22748220b/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src={LinkedInIcon} alt="LinkedIn" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="mailto:ndatkova@sas.upenn.edu" className="social-link">
                        <img src={EmailIcon} alt="Email" />
                        <span>Email</span>
                    </a>
                    <a href="https://forms.gle/cRouWxe3XHBuJqUs6" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src={FeedbackIcon} alt="Feedback Form" />
                        <span>Feedback</span>
                    </a>
                </div>
            </div>
        </BackgroundSection>
    );
};

export default ContactMe;




