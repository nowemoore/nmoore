import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            {/* Hamburger Menu (visible only on mobile) */}
            <div className="hamburger" onClick={toggleSidebar}>
                &#9776;
            </div>

            {/* Sidebar Menu */}
            <div className={`sidebar ${isOpen ? 'active' : ''}`}>
    <ul className="sidebar-links">
        <li>
            <Link to="/" onClick={toggleSidebar}>
                <i className="fas fa-home"></i> Home
            </Link>
        </li>
        <li>
            <Link to="/about" onClick={toggleSidebar}>
                <i className="fas fa-user"></i> About Me
            </Link>
        </li>
        <li>
            <Link to="/projects" onClick={toggleSidebar}>
                <i className="fas fa-graduation-cap"></i> Projects
            </Link>
        </li>
        <li>
            <Link to="/academic" onClick={toggleSidebar}>
                <i className="fas fa-graduation-cap"></i> Academic
            </Link>
        </li>
        <li>
            <Link to="/writing" onClick={toggleSidebar}>
                <i className="fas fa-pen"></i> Writing
            </Link>
        </li>
        <li>
            <Link to="/arts" onClick={toggleSidebar}>
                <i className="fas fa-palette"></i> Arts
            </Link>
        </li>
        <li>
            <Link to="/thoughts" onClick={toggleSidebar}>
                <i className="fas fa-lightbulb"></i> Thoughts
            </Link>
        </li>
        <li>
            <Link to="/contact" onClick={toggleSidebar}>
                <i className="fas fa-envelope"></i> Contact Me
            </Link>
        </li>
    </ul>
</div>


            {/* Regular Navbar (for desktop) */}
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/arts">Arts</Link></li>
                    <li><Link to="/thoughts">Thoughts</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
                <div className="navbar-underline"></div>
            </nav>
        </>
    );
};

export default Navbar;





