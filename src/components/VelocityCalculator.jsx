import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RATINGS = [
    { min: 1600, label: 'Outstanding', emoji: '🏆', color: '#f59e0b', desc: 'Elite performance — top 1% of race pigeons.' },
    { min: 1400, label: 'Excellent', emoji: '⭐', color: '#6ee7b7', desc: 'Exceptional speed — well above average.' },
    { min: 1200, label: 'Very Good', emoji: '✅', color: '#6c63ff', desc: 'Strong performance — a competitive bird.' },
    { min: 1000, label: 'Good', emoji: '👍', color: '#a78bfa', desc: 'Solid result — above the club average.' },
    { min: 800, label: 'Average', emoji: '🕊️', color: '#8b8da8', desc: 'Typical club performance.' },
    { min: 0, label: 'Below Average', emoji: '⚠️', color: '#f87171', desc: 'Below typical club performance.' },
];

function getRating(ypm) {
    return RATINGS.find(r => ypm >= r.min) || RATINGS[RATINGS.length - 1];
}

function timeToMinutes(hh, mm, ss = 0) {
    return parseInt(hh, 10) * 60 + parseInt(mm, 10) + parseInt(ss, 10) / 60;
}

const DEFAULT = {
    releaseDate: '',
    releaseHH: '',
    releaseMM: '',
    clockHH: '',
    clockMM: '',
    clockSS: '',
    distance: '',
    unit: 'km',
};

const VelocityCalculator = () => {
    const [form, setForm] = useState(DEFAULT);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const set = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
        setResult(null);
        setError('');
    };

    const calculate = (e) => {
        e.preventDefault();
        setError('');

        const { releaseHH, releaseMM, clockHH, clockMM, clockSS, distance, unit } = form;

        if (!releaseHH || !releaseMM || !clockHH || !clockMM || !distance) {
            setError('Please fill in all required fields.');
            return;
        }

        const relMins = timeToMinutes(releaseHH, releaseMM, 0);
        const clkMins = timeToMinutes(clockHH, clockMM, clockSS || '0');

        const flightMins = clkMins - relMins;
        if (flightMins <= 0) {
            setError('Clock-in time must be after release time.');
            return;
        }

        const dist = parseFloat(distance);
        if (isNaN(dist) || dist <= 0) {
            setError('Please enter a valid distance.');
            return;
        }

        const yards = unit === 'km' ? dist * 1093.6133 : dist * 1760;
        const ypm = yards / flightMins;
        const rating = getRating(Math.round(ypm));
        const hours = Math.floor(flightMins / 60);
        const mins = Math.floor(flightMins % 60);
        const secs = Math.round((flightMins % 1) * 60);

        setResult({ ypm: Math.round(ypm), rating, flightTime: { hours, mins, secs }, yards: Math.round(yards), flightMins: Math.round(flightMins * 10) / 10 });
    };

    const reset = () => {
        setForm(DEFAULT);
        setResult(null);
        setError('');
    };

    return (
        <div className="calc-page">
            {/* Page Header */}
            <div className="calc-header">
                <div className="container">
                    <Link to="/" className="calc-back-link">← Back to Home</Link>
                    <div className="calc-header-inner">
                        <div className="calc-header-icon">🕊️</div>
                        <div>
                            <div className="section-label">Racing Tools</div>
                            <h1 className="section-title">
                                Velocity <span className="gradient-text">Calculator</span>
                            </h1>
                            <p className="section-desc">
                                Calculate your racing pigeon's velocity in Yards Per Minute (YPM) — the standard UK racing metric.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="calc-body container">
                <div className="calc-layout">

                    {/* Left: Form */}
                    <div className="calc-card">
                        <div className="calc-card-title">
                            <span>📋</span> Enter Race Data
                        </div>

                        <form onSubmit={calculate} className="calc-form">
                            {/* Release Time */}
                            <div className="calc-field-group">
                                <label className="calc-label">Release Time</label>
                                <div className="calc-time-row">
                                    <div className="calc-time-input-wrap">
                                        <input
                                            id="releaseHH"
                                            type="number" min="0" max="23" placeholder="HH"
                                            className="calc-input calc-time-input"
                                            value={form.releaseHH}
                                            onChange={e => set('releaseHH', e.target.value)}
                                        />
                                        <span className="calc-time-label">hour</span>
                                    </div>
                                    <span className="calc-colon">:</span>
                                    <div className="calc-time-input-wrap">
                                        <input
                                            id="releaseMM"
                                            type="number" min="0" max="59" placeholder="MM"
                                            className="calc-input calc-time-input"
                                            value={form.releaseMM}
                                            onChange={e => set('releaseMM', e.target.value)}
                                        />
                                        <span className="calc-time-label">min</span>
                                    </div>
                                </div>
                            </div>

                            {/* Clock-in Time */}
                            <div className="calc-field-group">
                                <label className="calc-label">Clock-in Time</label>
                                <div className="calc-time-row">
                                    <div className="calc-time-input-wrap">
                                        <input
                                            id="clockHH"
                                            type="number" min="0" max="23" placeholder="HH"
                                            className="calc-input calc-time-input"
                                            value={form.clockHH}
                                            onChange={e => set('clockHH', e.target.value)}
                                        />
                                        <span className="calc-time-label">hour</span>
                                    </div>
                                    <span className="calc-colon">:</span>
                                    <div className="calc-time-input-wrap">
                                        <input
                                            id="clockMM"
                                            type="number" min="0" max="59" placeholder="MM"
                                            className="calc-input calc-time-input"
                                            value={form.clockMM}
                                            onChange={e => set('clockMM', e.target.value)}
                                        />
                                        <span className="calc-time-label">min</span>
                                    </div>
                                    <span className="calc-colon">:</span>
                                    <div className="calc-time-input-wrap">
                                        <input
                                            id="clockSS"
                                            type="number" min="0" max="59" placeholder="SS"
                                            className="calc-input calc-time-input"
                                            value={form.clockSS}
                                            onChange={e => set('clockSS', e.target.value)}
                                        />
                                        <span className="calc-time-label">sec</span>
                                    </div>
                                </div>
                            </div>

                            {/* Distance */}
                            <div className="calc-field-group">
                                <label className="calc-label">Race Distance</label>
                                <div className="calc-distance-row">
                                    <input
                                        id="distance"
                                        type="number" min="0" step="any" placeholder="e.g. 500"
                                        className="calc-input calc-distance-input"
                                        value={form.distance}
                                        onChange={e => set('distance', e.target.value)}
                                    />
                                    <div className="calc-unit-toggle">
                                        <button
                                            type="button"
                                            className={`calc-unit-btn ${form.unit === 'km' ? 'active' : ''}`}
                                            onClick={() => set('unit', 'km')}
                                        >km</button>
                                        <button
                                            type="button"
                                            className={`calc-unit-btn ${form.unit === 'miles' ? 'active' : ''}`}
                                            onClick={() => set('unit', 'miles')}
                                        >miles</button>
                                    </div>
                                </div>
                            </div>

                            {error && (
                                <div className="calc-error">⚠️ {error}</div>
                            )}

                            <div className="calc-actions">
                                <button type="submit" className="btn-primary calc-submit-btn">
                                    ⚡ Calculate YPM
                                </button>
                                <button type="button" className="btn-secondary" onClick={reset}>
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right: Result or Info */}
                    <div className="calc-right">
                        {result ? (
                            <div className="calc-result-card" style={{ '--result-color': result.rating.color }}>
                                <div className="calc-result-header">
                                    <div className="calc-result-emoji">{result.rating.emoji}</div>
                                    <div>
                                        <div className="calc-result-rating" style={{ color: result.rating.color }}>
                                            {result.rating.label}
                                        </div>
                                        <div className="calc-result-desc">{result.rating.desc}</div>
                                    </div>
                                </div>

                                <div className="calc-result-ypm">
                                    <span className="calc-ypm-value">{result.ypm.toLocaleString()}</span>
                                    <span className="calc-ypm-unit">YPM</span>
                                </div>
                                <div className="calc-ypm-label">Yards Per Minute</div>

                                <div className="calc-result-stats">
                                    <div className="calc-stat">
                                        <div className="calc-stat-value">
                                            {result.flightTime.hours}h {result.flightTime.mins}m {result.flightTime.secs}s
                                        </div>
                                        <div className="calc-stat-label">Flight Time</div>
                                    </div>
                                    <div className="calc-stat">
                                        <div className="calc-stat-value">{result.yards.toLocaleString()}</div>
                                        <div className="calc-stat-label">Total Yards</div>
                                    </div>
                                    <div className="calc-stat">
                                        <div className="calc-stat-value">{form.distance} {form.unit}</div>
                                        <div className="calc-stat-label">Distance</div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="calc-info-card">
                                <div className="calc-info-title">📖 About YPM</div>
                                <p className="calc-info-text">
                                    Yards Per Minute (YPM) is the standard velocity metric used in UK pigeon racing.
                                    It measures how many yards a pigeon covered per minute of flight time.
                                </p>

                                <div className="calc-ratings-guide">
                                    <div className="calc-ratings-title">Performance Guide</div>
                                    {RATINGS.map(r => (
                                        <div key={r.label} className="calc-rating-row">
                                            <span className="calc-rating-emoji">{r.emoji}</span>
                                            <span className="calc-rating-label" style={{ color: r.color }}>{r.label}</span>
                                            <span className="calc-rating-range">
                                                {r.min === 0 ? '< 800' : r.min === 1600 ? '1600+' : `${r.min}+`} YPM
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="calc-formula-box">
                                    <div className="calc-formula-title">Formula</div>
                                    <code className="calc-formula">YPM = Distance (yards) ÷ Flight time (minutes)</code>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VelocityCalculator;
