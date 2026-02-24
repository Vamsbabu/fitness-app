import React, { useState } from 'react';
import '../styles/ActivityTracker.css';

const ActivityTracker: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const trackers = [
        { name: 'Calories Tracker', value: '3455 cal', color: '#FF6B6B' },
        { name: 'Water Tracker', value: '3412 cal', color: '#4ECDC4' },
        { name: 'Exercise Tracker', value: '3455 cal', color: '#FFD93D' },
        { name: 'Cycling Tracker', value: '3412 cal', color: '#6BCB77' },
    ];

    return (
        <div className={`activity-tracker-container ${theme}`}> 
            <button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} >
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <div className="tracker-screens">
                <div className={`tracker-card light-theme`}>
                    <div className="screen-header">
                        <div className="menu-icon">☰</div>
                        <h2>Activity</h2>
                        <div className="share-icon">↗️</div>
                    </div>
                    <div className="today-label">Today</div>
                    <div className="progress-circle">
                        <div className="circle-inner">
                            <div className="progress-percent">26%</div>
                            <div className="progress-label">completed</div>
                        </div>
                    </div>
                    <div className="tracker-grid">
                        {trackers.map((tracker, idx) => (
                            <div key={idx} className="tracker-item">
                                <div className="tracker-header">{tracker.name}</div>
                                <div className="tracker-value">{tracker.value}</div>
                                <div className="tracker-graph">
                                    <svg viewBox="0 0 100 30" preserveAspectRatio="none">
                                        <polyline points="0,20 10,15 20,18 30,10 40,16 50,12 60,18 70,14 80,19 90,13 100,17" fill="none" stroke={tracker.color} strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="dots-nav">
                        <div className="dot active"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className={`tracker-card dark-theme`}>
                    <div className="screen-header">
                        <div className="menu-icon">☰</div>
                        <h2>Activity</h2>
                        <div className="share-icon">↗️</div>
                    </div>
                    <div className="today-label">Today</div>
                    <div className="progress-circle">
                        <div className="circle-inner">
                            <div className="progress-percent">26%</div>
                            <div className="progress-label">completed</div>
                        </div>
                    </div>
                    <div className="activity-chart">
                        <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                            <polyline points="0,70 30,40 60,50 90,30 120,55 150,35 180,60 210,45 240,65 270,38 300,55" fill="none" stroke="#00DD88" strokeWidth="3" />
                        </svg>
                    </div>
                    <div className="tracker-grid">
                        {trackers.map((tracker, idx) => (
                            <div key={idx} className="tracker-item dark">
                                <div className="tracker-header">{tracker.name}</div>
                                <div className="tracker-value">{tracker.value}</div>
                                <div className="tracker-graph">
                                    <svg viewBox="0 0 100 30" preserveAspectRatio="none">
                                        <polyline points="0,20 10,15 20,18 30,10 40,16 50,12 60,18 70,14 80,19 90,13 100,17" fill="none" stroke="#FF00FF" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="dots-nav">
                        <div className="dot active"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityTracker;