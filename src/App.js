import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Academic from './pages/Academic';
import Writing from './pages/Writing';
import Arts from './pages/Arts';
import Thoughts from './pages/Thoughts';
import ContactMe from './pages/ContactMe';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutMe />} />
                        <Route path="/academic" element={<Academic />} />
                        <Route path="/writing" element={<Writing />} />
                        <Route path="/arts" element={<Arts />} />
                        <Route path="/thoughts" element={<Thoughts />} />
                        <Route path="/contact" element={<ContactMe />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;







