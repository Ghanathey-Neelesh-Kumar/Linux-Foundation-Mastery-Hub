import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Login from '../dashboard/Login';

const Sidebar = ({ onViewChange, currentView, isVisible }) => {
    const { currentUser, logout } = useAuth();
    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile toggle
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const userMenuRef = useRef(null);

    // Close user menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Only render if meant to be visible (e.g., on Profile page)
    if (!isVisible) return null;

    const handleLogout = async () => {
        try {
            await logout();
            setIsUserMenuOpen(false);
            // Optional: redirect to home if needed, handled by auth state mostly
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    const handleProfileClick = () => {
        onViewChange('profile');
        setIsUserMenuOpen(false);
        setIsMenuOpen(false);
    };

    const NavItem = ({ view, label, icon }) => (
        <div
            className={`nav-item ${currentView === view ? 'active' : ''}`}
            onClick={() => {
                onViewChange(view);
                setIsMenuOpen(false);
            }}
        >
            <span className="nav-icon">{icon}</span>
            <span className="nav-label">{label}</span>
        </div>
    );

    return (
        <>
            {/* Mobile Hamburger - Only relevant if we want to force show sidebar on mobile for these pages */}
            <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
            </div>

            <aside
                className={`sidebar ${isHovered || isMenuOpen ? 'expanded' : 'collapsed'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="sidebar-header">
                    <div className="logo-icon">🐧</div>
                    <div className="logo-text">
                        Linux Mastery <span className="highlight">Hub</span>
                    </div>
                </div>

                <div className="sidebar-nav">
                    <NavItem view="menu" label="Certifications" icon="📜" />
                    <NavItem view="quiz" label="Active Quiz" icon="📝" />
                    <NavItem view="leaderboard" label="Leaderboard" icon="🏆" />
                    <NavItem view="resources" label="Resources" icon="📚" />
                </div>

                <div className="sidebar-footer">
                    {currentUser ? (
                        <div className="user-section" ref={userMenuRef}>
                            <div className="user-info">
                                <img
                                    src={currentUser.photoURL || "https://via.placeholder.com/40"}
                                    alt="User"
                                    className="user-avatar"
                                />
                                <div className="user-details">
                                    <span className="user-name">{currentUser.displayName || 'User'}</span>
                                    <span className="user-status">Free Plan</span>
                                </div>
                            </div>
                            <div
                                className="kebab-menu"
                                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            >
                                ⋮
                            </div>

                            {isUserMenuOpen && (
                                <div className="user-popup-menu">
                                    <div className="menu-item" onClick={handleProfileClick}>
                                        👤 My Profile
                                    </div>
                                    <div className="menu-item logout" onClick={handleLogout}>
                                        🚪 Log Out
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button className="sidebar-login-btn" onClick={() => setShowLoginModal(true)}>
                            {isHovered ? "Sign In" : "🔑"}
                        </button>
                    )}
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isMenuOpen && <div className="sidebar-overlay" onClick={() => setIsMenuOpen(false)}></div>}

            {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}

            <style>{`
                .sidebar {
                    height: 100vh;
                    background: rgba(15, 23, 42, 0.98);
                    border-right: 1px solid rgba(255,255,255,0.1);
                    display: flex;
                    flex-direction: column;
                    padding: 1rem;
                    position: fixed;
                    left: 0;
                    top: 0;
                    z-index: 1000;
                    transition: width 0.3s ease, padding 0.3s ease;
                    overflow: visible; /* For popups */
                    width: 70px; /* Default collapsed width */
                }

                .sidebar.expanded {
                    width: 260px;
                }

                .sidebar-header {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 3rem;
                    padding-left: 0.2rem;
                    overflow: hidden;
                    white-space: nowrap;
                }

                .logo-icon { font-size: 1.8rem; min-width: 30px; text-align: center; }
                .logo-text { 
                    font-size: 1.2rem; 
                    font-weight: 800; 
                    opacity: 0; 
                    transition: opacity 0.2s; 
                }
                .sidebar.expanded .logo-text { opacity: 1; }
                .highlight { color: var(--color-accent); }

                .sidebar-nav {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    flex: 1;
                }

                .nav-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 0.8rem 0.6rem;
                    border-radius: 8px;
                    cursor: pointer;
                    color: #94a3b8;
                    transition: all 0.2s;
                    white-space: nowrap;
                    overflow: hidden;
                }

                .nav-item:hover, .nav-item.active {
                    background: rgba(255,255,255,0.05);
                    color: white;
                }

                .nav-item.active {
                    background: var(--color-accent-dim);
                    border-left: 3px solid var(--color-accent);
                }

                .nav-icon { min-width: 24px; text-align: center; font-size: 1.2rem; }
                .nav-label { opacity: 0; transition: opacity 0.2s; }
                .sidebar.expanded .nav-label { opacity: 1; }

                .sidebar-footer {
                    margin-top: auto;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    overflow: visible;
                }

                .user-section {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                }

                .user-info {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    overflow: hidden;
                }

                .user-avatar {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border: 2px solid var(--color-accent);
                    min-width: 32px;
                }

                .user-details {
                    display: flex;
                    flex-direction: column;
                    opacity: 0;
                    transition: opacity 0.2s;
                    white-space: nowrap;
                }
                .sidebar.expanded .user-details { opacity: 1; }

                .user-name { font-size: 0.9rem; font-weight: 600; color: white; }
                .user-status { font-size: 0.75rem; color: #64748b; }

                .kebab-menu {
                    font-size: 1.5rem;
                    color: #94a3b8;
                    cursor: pointer;
                    padding: 0 0.5rem;
                    transition: color 0.2s;
                    display: none; /* Hide when collapsed */
                }
                .sidebar.expanded .kebab-menu { display: block; }
                .kebab-menu:hover { color: white; }

                .user-popup-menu {
                    position: absolute;
                    bottom: 100%;
                    left: 0;
                    width: 220px; /* Fixed width popup */
                    background: #1e293b;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 0.5rem;
                    margin-bottom: 0.5rem;
                    box-shadow: 0 -4px 20px rgba(0,0,0,0.4);
                    animation: slideUp 0.2s ease-out;
                    z-index: 2000;
                }

                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .menu-item {
                    padding: 0.8rem 1rem;
                    font-size: 0.9rem;
                    cursor: pointer;
                    color: #e2e8f0;
                }
                .menu-item:hover { background: rgba(255,255,255,0.05); }
                .menu-item.logout { color: #ef4444; border-top: 1px solid rgba(255,255,255,0.05); }

                .sidebar-login-btn {
                    width: 100%;
                    padding: 0.8rem;
                    background: var(--color-accent);
                    border: none;
                    border-radius: 6px;
                    font-weight: 700;
                    cursor: pointer;
                    overflow: hidden;
                    white-space: nowrap;
                }

                /* Mobile Handling */
                .mobile-toggle {
                    position: fixed;
                    top: 1rem;
                    left: 1rem;
                    z-index: 1100;
                    font-size: 1.5rem;
                    background: rgba(15,23,42,0.8);
                    padding: 0.5rem;
                    border-radius: 4px;
                    backdrop-filter: blur(5px);
                    display: none;
                    cursor: pointer;
                }

                .sidebar-overlay {
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.5);
                    z-index: 900;
                    backdrop-filter: blur(2px);
                }

                @media (max-width: 768px) {
                    .mobile-toggle { display: block; }
                    .sidebar {
                        transform: translateX(-100%);
                        width: 260px; /* Always full width on mobile when open */
                    }
                    .sidebar.expanded { width: 260px; } /* Ensure it doesnt break */
                    .sidebar.open {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
};

export default Sidebar;
