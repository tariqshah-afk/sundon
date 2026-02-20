import React from 'react';
import heroBg from '../assets/pigeon_hero_bg.png';

const About = () => {
    return (
        <section className="about-section section" id="about">
            <div className="container">
                <div className="about-inner">
                    {/* Left text */}
                    <div>
                        <div className="section-label">Who We Are</div>
                        <h2 className="section-title">
                            A Community of <span className="gradient-text">Passionate Flyers</span>
                        </h2>
                        <p className="section-desc">
                            Sundon Park Social FC is a private members-only racing pigeon club based in Luton.
                            We compete in SR Midshire Federation races.
                        </p>

                        <div className="about-features">
                            {[
                                {
                                    icon: '🏆',
                                    title: 'National Competition',
                                    desc: 'Competing in NFC and BICC races against the best fliers in the country.',
                                },
                                {
                                    icon: '📡',
                                    title: 'Electronic Timing',
                                    desc: 'Using Benzing ETS clocking technology for precise, reliable race timing.',
                                },
                                {
                                    icon: '🌍',
                                    title: 'International Races',
                                    desc: 'Our birds compete in long-distance international events tracked via Pipa.',
                                },
                                {
                                    icon: '🤝',
                                    title: 'Members Community',
                                    desc: 'A tight-knit group of enthusiasts sharing knowledge, tips, and camaraderie.',
                                },
                            ].map((f) => (
                                <div className="about-feature" key={f.title}>
                                    <div className="about-feature-icon">{f.icon}</div>
                                    <div className="about-feature-text">
                                        <h4>{f.title}</h4>
                                        <p>{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right image */}
                    <div className="about-image-wrap">
                        <div className="about-image-card">
                            <img src={heroBg} alt="Racing pigeons in flight" />
                        </div>
                        <div className="about-badge">
                            🕊️ Private Members Club
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
