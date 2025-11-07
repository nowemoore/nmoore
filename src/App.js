import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Arts from './pages/Arts';
import Thoughts from './pages/Thoughts';
import ContactMe from './pages/ContactMe';
import Footer from './components/Footer';
import CrushesPage from './pages/blogs/CrushesPage';
import TheFrenchBread from './pages/blogs/TheFrenchBread';
import FGLIGuide from './pages/blogs/FGLIGuide';
import OnFighting from './pages/blogs/OnFighting';
import Fermi from './pages/blogs/Fermi';
import TheSystem from './pages/blogs/TheSystem';
import Bases from './pages/blogs/ChangingBases';
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
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/arts" element={<Arts />} />
                        <Route path="/thoughts" element={<Thoughts />} />
                        <Route path="/contact" element={<ContactMe />} />
                         <Route path="/crushes" element={<CrushesPage />} />
                         <Route path='/fgliguide' element={<FGLIGuide />} />
                         <Route path='/onfighting' element={<OnFighting />} />
                         <Route path="/thefrenchbread" element={<TheFrenchBread />} />
                         <Route path="/fermi" element={<Fermi/>} />
                         <Route path="/thesystem" element={<TheSystem/>} />
                         <Route path="/changingbases" element={<Bases/>} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;







