import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-top">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="footer-logo-icon">🕊️</div>
                            <div className="footer-logo-name">
                                Sundon Park
                                <span>Social Flying Club</span>
                            </div>
                        </div>
                        <p className="footer-tagline">
                            Luton's racing pigeon club. Competing with passion, precision and pride since our founding.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="footer-links-col">
                        <h5>Race Results</h5>
                        <ul>
                            <li><a href="https://mnfc.pigeononline.co.uk/RaceResult?OrganisationID=706&RaceYear=2025&RacePoint=4239&RaceEvent=12&VMode=V" target="_blank" rel="noopener noreferrer">Results Online</a></li>
                            <li><a href="https://biccpigeons.co.uk/racing/early-times/" target="_blank" rel="noopener noreferrer">BICC Early Times</a></li>
                            <li><a href="https://mypigeons.benzing.live/gb/en/results/2025/o-8-hpc-greater-harrow-racing-pigeon-club/races/" target="_blank" rel="noopener noreferrer">Benzing Live</a></li>
                            <li><a href="https://www.pipa.be/en/races/races?f%5B0%5D=race_season%3A169&s=SID-1756223690" target="_blank" rel="noopener noreferrer">Pipa Race Results</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-col">
                        <h5>Organisations</h5>
                        <ul>
                            <li><a href="https://nationalflyingclub.co.uk/" target="_blank" rel="noopener noreferrer">National Flying Club</a></li>
                            <li><a href="https://biccpigeons.co.uk/" target="_blank" rel="noopener noreferrer">BICC</a></li>
                            <li><a href="https://www.xcweather.co.uk/" target="_blank" rel="noopener noreferrer">XC Weather</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">
                        © {year} T.Shah. All rights reserved.
                    </p>
                    <div className="footer-private">
                        🔒 Private Members Only
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
