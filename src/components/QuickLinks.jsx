import React from 'react';
import { useNavigate } from 'react-router-dom';

const EXTERNAL_LINKS = [
    {
        id: 'results-online',
        icon: '📊',
        title: 'Results Online',
        desc: 'View the latest race results and position sheets from our affiliated federations.',
        cta: 'View Results',
        url: 'https://mnfc.pigeononline.co.uk/RaceResult?OrganisationID=706&RaceYear=2025&RacePoint=4239&RaceEvent=12&VMode=V',
        accentA: 'rgba(99, 102, 241, 0.12)',
        accentB: 'rgba(99, 102, 241, 0.03)',
        borderHover: 'rgba(99, 102, 241, 0.45)',
        ctaColor: '#a5b4fc',
        iconBg: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    },
    {
        id: 'bicc-early',
        icon: '⏱️',
        title: 'BICC Early Times Results',
        desc: 'Check early timing results from the British International Championship Club races.',
        cta: 'View BICC Times',
        url: 'https://biccpigeons.co.uk/racing/early-times/',
        accentA: 'rgba(16, 185, 129, 0.12)',
        accentB: 'rgba(16, 185, 129, 0.03)',
        borderHover: 'rgba(16, 185, 129, 0.45)',
        ctaColor: '#6ee7b7',
        iconBg: 'linear-gradient(135deg, #059669, #10b981)',
    },
    {
        id: 'nfc',
        icon: '🏛️',
        title: 'National Flying Club',
        desc: 'The NFC is one of the largest and most prestigious pigeon racing federations in the UK.',
        cta: 'Visit NFC',
        url: 'https://nationalflyingclub.co.uk/',
        accentA: 'rgba(245, 158, 11, 0.12)',
        accentB: 'rgba(245, 158, 11, 0.03)',
        borderHover: 'rgba(245, 158, 11, 0.45)',
        ctaColor: '#fcd34d',
        iconBg: 'linear-gradient(135deg, #b45309, #f59e0b)',
    },
    {
        id: 'benzing',
        icon: '📡',
        title: 'Benzing Live',
        desc: 'Live electronic timing results for HPC Greater Harrow Racing Pigeon Club races.',
        cta: 'Go Live',
        url: 'https://mypigeons.benzing.live/gb/en/results/2025/o-8-hpc-greater-harrow-racing-pigeon-club/races/',
        accentA: 'rgba(239, 68, 68, 0.12)',
        accentB: 'rgba(239, 68, 68, 0.03)',
        borderHover: 'rgba(239, 68, 68, 0.45)',
        ctaColor: '#fca5a5',
        iconBg: 'linear-gradient(135deg, #b91c1c, #ef4444)',
    },
    {
        id: 'pipa',
        icon: '🌐',
        title: 'Pipa Race Results',
        desc: "Worldwide pigeon racing results and performance analysis through Pipa's platform.",
        cta: 'Browse Pipa',
        url: 'https://www.pipa.be/en/races/races?f%5B0%5D=race_season%3A169&s=SID-1756223690',
        accentA: 'rgba(14, 165, 233, 0.12)',
        accentB: 'rgba(14, 165, 233, 0.03)',
        borderHover: 'rgba(14, 165, 233, 0.45)',
        ctaColor: '#7dd3fc',
        iconBg: 'linear-gradient(135deg, #0369a1, #0ea5e9)',
    },
    {
        id: 'weather',
        icon: '🌤️',
        title: 'Weather Forecast',
        desc: 'Check current wind speeds, cloud cover and flying conditions before race day.',
        cta: 'Check Weather',
        url: 'https://www.xcweather.co.uk/',
        accentA: 'rgba(168, 85, 247, 0.12)',
        accentB: 'rgba(168, 85, 247, 0.03)',
        borderHover: 'rgba(168, 85, 247, 0.45)',
        ctaColor: '#d8b4fe',
        iconBg: 'linear-gradient(135deg, #7e22ce, #a855f7)',
    },
];

const VELOCITY_CARD = {
    id: 'velocity-calc',
    icon: '⚡',
    title: 'Velocity Calculator',
    desc: 'Calculate your pigeon\'s race velocity in Yards Per Minute (YPM) — the standard UK racing metric.',
    cta: 'Open Calculator',
    accentA: 'rgba(245, 158, 11, 0.15)',
    accentB: 'rgba(245, 158, 11, 0.04)',
    borderHover: 'rgba(245, 158, 11, 0.5)',
    ctaColor: '#fcd34d',
    iconBg: 'linear-gradient(135deg, #92400e, #f59e0b)',
};


const QuickLinks = () => {
    const navigate = useNavigate();

    return (
        <section className="links-section section" id="results">
            <div className="container">
                <div className="section-label">Member Resources</div>
                <h2 className="section-title">
                    Racing <span className="gradient-text">Results &amp; Links</span>
                </h2>
                <p className="section-desc">
                    Everything you need in one place — race results, live timing, federation
                    websites, and real-time weather for flying conditions.
                </p>

                <div className="links-grid" id="resources">
                    {/* Velocity Calculator — internal link, shown first */}
                    <div
                        className="link-card link-card-featured"
                        onClick={() => navigate('/velocity-calculator')}
                        style={{
                            '--card-accent-a': VELOCITY_CARD.accentA,
                            '--card-accent-b': VELOCITY_CARD.accentB,
                            '--card-border-hover': VELOCITY_CARD.borderHover,
                            '--card-cta-color': VELOCITY_CARD.ctaColor,
                            cursor: 'pointer',
                        }}
                    >
                        <div className="link-card-icon-wrap" style={{ background: VELOCITY_CARD.iconBg }}>
                            {VELOCITY_CARD.icon}
                        </div>
                        <div className="link-card-body">
                            <div className="link-card-title">{VELOCITY_CARD.title}</div>
                            <div className="link-card-desc">{VELOCITY_CARD.desc}</div>
                            <div className="link-card-cta">
                                {VELOCITY_CARD.cta} <span>→</span>
                            </div>
                        </div>
                        <div className="link-card-arrow">↗</div>
                    </div>

                    {EXTERNAL_LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-card"
                            style={{
                                '--card-accent-a': link.accentA,
                                '--card-accent-b': link.accentB,
                                '--card-border-hover': link.borderHover,
                                '--card-cta-color': link.ctaColor,
                            }}
                        >
                            <div className="link-card-icon-wrap" style={{ background: link.iconBg }}>
                                {link.icon}
                            </div>
                            <div className="link-card-body">
                                <div className="link-card-title">{link.title}</div>
                                <div className="link-card-desc">{link.desc}</div>
                                <div className="link-card-cta">
                                    {link.cta} <span>→</span>
                                </div>
                            </div>
                            <div className="link-card-arrow">↗</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickLinks;
