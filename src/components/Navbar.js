import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/academic">Academic</Link></li>
                <li><Link to="/writing">Writing</Link></li>
                <li><Link to="/arts">Arts</Link></li>
                <li><Link to="/thoughts">Thoughts</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </ul>
            <div className="navbar-underline"></div>
        </nav>
    );
};

export default Navbar;




