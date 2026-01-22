import React from 'react';

const Header = ({ onLogoClick }) => {
    return (
        <header className="main-header">
            <div className="logo-container" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
                <span className="icon">🐧</span>
                <h1>Linux Foundation Mastery <span className="highlight">Hub</span></h1>
            </div>
            <p className="subtitle">Master Linux Foundations with Concept-First Practice</p>
        </header>
    );
};

export default Header;
