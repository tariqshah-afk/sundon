import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import About from './components/About';
import Footer from './components/Footer';
import VelocityCalculator from './components/VelocityCalculator';

function HomePage() {
    return (
        <>
            <main>
                <Hero />
                <div className="divider-wrap">
                    <div className="divider" />
                </div>
                <QuickLinks />
                <div className="divider-wrap">
                    <div className="divider" />
                </div>
                <About />
            </main>
            <Footer />
        </>
    );
}

function CalcPage() {
    return (
        <>
            <main>
                <VelocityCalculator />
            </main>
            <Footer />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/velocity-calculator" element={<CalcPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
