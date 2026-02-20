import React, { useMemo } from 'react';
import heroBg from '../assets/pigeon_hero_bg.png';

const Hero = () => {
    const particles = useMemo(() => {
        return [...Array(8)].map((_, i) => ({
            id: i,
            width: `${Math.random() * 6 + 3}px`,
            height: `${Math.random() * 6 + 3}px`,
            background: i % 2 === 0 ? '#6c63ff' : '#f59e0b',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            dur: `${Math.random() * 3 + 3}s`,
            delay: `${Math.random() * 2}s`,
        }));
    }, []);

    return (
        <section className="hero" id="home">
            {/* Background */}
            <div className="hero-bg">
                <img src={heroBg} alt="Racing pigeons in flight" />
                <div className="hero-overlay" />
            </div>

            {/* Decorative particles */}
            <div className="hero-particles">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="particle"
                        style={{
                            width: p.width,
                            height: p.height,
                            background: p.background,
                            top: p.top,
                            left: p.left,
                            '--dur': p.dur,
                            '--delay': p.delay,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="hero-content" style={{ width: '100%' }}>
                <div className="hero-inner">
                    {/* Left: text */}
                    <div className="hero-left">
                        <div className="hero-eyebrow">
                            <span className="dot" />
                            Private Members Only
                        </div>

                        <h1 className="hero-title">
                            <span className="gradient-text">Sundon Park</span>
                            <br />
                            Social FC
                        </h1>

                        <p className="hero-subtitle">
                            Luton's premier racing pigeon flying club. We race with passion,
                            precision, and pride — from short sprints.
                        </p>

                        <div className="hero-actions">
                            <a
                                href="#results"
                                className="btn-primary"
                            >
                                🏆 Race Results
                            </a>
                            <a
                                href="#resources"
                                className="btn-secondary"
                            >
                                📋 Resources
                            </a>
                        </div>

                        <div className="hero-stats">
                            <div className="hero-stat">
                                <div className="hero-stat-value gradient-text">NFC</div>
                                <div className="hero-stat-label">Affiliated</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-value gradient-text">BICC</div>
                                <div className="hero-stat-label">Member</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-value gradient-text">2025</div>
                                <div className="hero-stat-label">Season</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: floating card */}
                    <div className="hero-right">
                        <div className="hero-card">
                            <div className="hero-card-header">
                                <div className="hero-card-icon">🏅</div>
                                <div>
                                    <div className="hero-card-title">Quick Access</div>
                                    <div className="hero-card-subtitle">Members resources</div>
                                </div>
                            </div>

                            <div className="hero-card-links">
                                {[
                                    { icon: '📊', text: 'Race Results Online', url: 'https://mnfc.pigeononline.co.uk/RaceResult?OrganisationID=706&RaceYear=2025&RacePoint=4239&RaceEvent=12&VMode=V' },
                                    { icon: '⏱️', text: 'BICC Early Times', url: 'https://biccpigeons.co.uk/racing/early-times/' },
                                    { icon: '📡', text: 'Benzing Live', url: 'https://mypigeons.benzing.live/gb/en/results/2025/o-8-hpc-greater-harrow-racing-pigeon-club/races/' },
                                    { icon: '🌐', text: 'NFC Website', url: 'https://nationalflyingclub.co.uk/' },
                                    { icon: '🌤️', text: 'Weather Forecast', url: 'https://www.xcweather.co.uk/' },
                                ].map(({ icon, text, url }) => (
                                    <a
                                        key={text}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hero-quick-link"
                                    >
                                        <span className="hero-quick-link-icon">{icon}</span>
                                        <span className="hero-quick-link-text">{text}</span>
                                        <span className="hero-quick-link-arrow">→</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
