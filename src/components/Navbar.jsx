import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isCalcPage = location.pathname === '/velocity-calculator';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar" style={scrolled ? { background: 'rgba(10,11,18,0.97)', boxShadow: '0 4px 30px rgba(0,0,0,0.4)' } : {}}>
            <div className="navbar-inner">
                <Link to="/" className="navbar-brand" style={{ textDecoration: 'none' }}>
                    <div className="navbar-logo">🕊️</div>
                    <div className="navbar-name">
                        Sundon Park
                        <span>Social Flying Club</span>
                    </div>
                </Link>

                <ul className="navbar-links">
                    {!isCalcPage ? (
                        <>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#results">Results</a></li>
                            <li><a href="#resources">Resources</a></li>
                            <li><a href="#about">About</a></li>
                        </>
                    ) : (
                        <li><Link to="/" style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>← Home</Link></li>
                    )}
                    <li>
                        <Link
                            to="/velocity-calculator"
                            style={{
                                color: isCalcPage ? 'var(--color-gold-light)' : 'var(--color-text-muted)',
                                fontWeight: isCalcPage ? 700 : 500,
                            }}
                        >
                            ⚡ Velocity Calc
                        </Link>
                    </li>
                </ul>

                <a
                    href="https://www.xcweather.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-badge"
                >
                    🌤️ Check Weather
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
