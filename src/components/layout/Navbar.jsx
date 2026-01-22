import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Login from '../dashboard/Login';

const Navbar = ({ onViewChange, currentView }) => {
    const { currentUser, logout } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleLogout = async () => {
        try {
            await logout();
            setIsDropdownOpen(false);
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    const handleNavClick = (viewName) => {
        onViewChange(viewName);
        setIsDropdownOpen(false);
    }

    return (
        <>
            <nav className="navbar">
                <div className="nav-left">
                    <div className="nav-brand" onClick={() => onViewChange('menu')}>
                        <span className="nav-icon">🐧</span>
                    </div>
                </div>

                <div className="nav-right">
                    <a
                        href="#"
                        className={`nav-link ${currentView === 'resources' ? 'active' : ''}`}
                        onClick={(e) => { e.preventDefault(); onViewChange('resources'); }}
                    >
                        Resources
                    </a>

                    <a
                        href="#"
                        className={`nav-link ${currentView === 'menu' ? 'active' : ''}`}
                        onClick={(e) => { e.preventDefault(); onViewChange('menu'); }}
                    >
                        Certifications List
                    </a>

                    <a
                        href="#"
                        className={`nav-link ${currentView === 'leaderboard' ? 'active' : ''}`}
                        onClick={(e) => { e.preventDefault(); onViewChange('leaderboard'); }}
                    >
                        Leaderboard
                    </a>

                    <span className="divider">|</span>

                    {currentUser && (
                        <a
                            href="#"
                            className={`nav-link ${currentView === 'profile' ? 'active' : ''}`}
                            onClick={(e) => { e.preventDefault(); onViewChange('profile'); }}
                        >
                            My Dashboard
                        </a>
                    )}

                    {currentUser ? (
                        <div className="profile-menu" ref={dropdownRef}>
                            <div className="avatar-container" onClick={toggleDropdown}>
                                {currentUser.photoURL ? (
                                    <img src={currentUser.photoURL} alt="User" className="avatar-img" />
                                ) : (
                                    <div className="avatar-icon">👤</div>
                                )}
                                <span className={`arrow ${isDropdownOpen ? 'up' : 'down'}`}>▼</span>
                            </div>

                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-header">
                                        <strong>{currentUser.displayName || 'User'}</strong>
                                        <small>{currentUser.email}</small>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <div className="dropdown-item" onClick={() => handleNavClick('profile')}>
                                        My Progress
                                    </div>
                                    <div className="dropdown-item" onClick={() => handleNavClick('profile')}>
                                        My Profile
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <div className="dropdown-item logout" onClick={handleLogout}>Log Out</div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button className="login-btn" onClick={() => setShowLoginModal(true)}>
                            Sign In
                        </button>
                    )}
                </div>
            </nav>

            {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}

            <style>{`
                .navbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.8rem 2rem;
                    background: rgba(15, 23, 42, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    color: white;
                }

                .nav-brand {
                    font-size: 1.8rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }

                .nav-right {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }

                .nav-link {
                    color: #94a3b8;
                    text-decoration: none;
                    font-size: 0.95rem;
                    font-weight: 500;
                    transition: color 0.2s;
                    position: relative;
                }

                .nav-link:hover, .nav-link.active {
                    color: white;
                }

                .divider {
                    color: rgba(255, 255, 255, 0.2);
                }

                .profile-menu {
                    position: relative;
                }

                .avatar-container {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;
                }

                .avatar-icon {
                    font-size: 1.5rem;
                    color: #94a3b8;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.2s;
                }
                
                .avatar-icon:hover {
                    color: white;
                }

                .arrow {
                    font-size: 0.6rem;
                    color: #94a3b8;
                    transition: transform 0.2s;
                }

                .arrow.up {
                    transform: rotate(180deg);
                }

                .login-btn {
                    background: var(--color-accent);
                    color: #0f172a;
                    border: none;
                    padding: 0.5rem 1.2rem;
                    border-radius: 4px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }
                .login-btn:hover { opacity: 0.9; }

                .avatar-img {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 2px solid var(--color-accent);
                }

                .dropdown-menu {
                    position: absolute;
                    top: 150%;
                    right: 0;
                    width: 220px;
                    background: white;
                    border-radius: 0.5rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
                    padding: 0.5rem 0;
                    animation: slideDown 0.2s ease-out;
                    overflow: hidden;
                    z-index: 1001;
                }
                
                .dropdown-header {
                    padding: 0.7rem 1.2rem;
                    display: flex;
                    flex-direction: column;
                    background: #f8fafc;
                }
                .dropdown-header strong { font-size: 0.9rem; color: #334155; }
                .dropdown-header small { font-size: 0.75rem; color: #64748b; word-break: break-all; }

                .dropdown-item {
                    padding: 0.7rem 1.2rem;
                    color: #334155;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: background 0.1s;
                }

                .dropdown-item:hover {
                    background: #f1f5f9;
                }

                .dropdown-item.logout {
                    color: #ef4444;
                }
                
                .dropdown-divider {
                    height: 1px;
                    background: #e2e8f0;
                    margin: 0.3rem 0;
                }

                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 768px) {
                    .nav-right {
                        display: none; 
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
