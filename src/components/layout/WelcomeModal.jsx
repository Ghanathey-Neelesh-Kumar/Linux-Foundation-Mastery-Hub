import React from 'react';

const WelcomeModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content glass-panel fade-in-up">
                <div className="close-btn" onClick={onClose}>&times;</div>
                <h2>Master the Cloud Native Ecosystem ☁️</h2>

                <div className="info-section">
                    <p className="intro-text">
                        Welcome to the <strong>Linux Foundation Mastery Hub</strong>. This platform is dedicated to helping you prepare for the industry's most respected certifications.
                    </p>

                    <div className="key-points">
                        <div className="point">
                            <span className="icon">🐧</span>
                            <div>
                                <strong>Linux Foundation Certifications</strong>
                                <p>Essential credentials for modern DevOps careers, from LFCS to CKA.</p>
                            </div>
                        </div>
                        <div className="point">
                            <span className="icon">☸️</span>
                            <div>
                                <strong>Kubernetes Focus</strong>
                                <p>Deep dive into KCNA, CKA, CKS, and other cloud-native standards.</p>
                            </div>
                        </div>
                    </div>

                    <p className="call-to-action">
                        Select a <strong>Certification Prep</strong> module to begin your journey.
                    </p>
                </div>

                <button className="primary start-btn" onClick={onClose}>
                    Explore Certifications 🚀
                </button>
            </div>

            <style>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(15, 23, 42, 0.9);
                    backdrop-filter: blur(8px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2000;
                }
                .modal-content {
                    max-width: 600px;
                    width: 90%;
                    padding: 2.5rem;
                    background: rgba(30, 41, 59, 0.95);
                    border: 1px solid var(--color-accent);
                    box-shadow: 0 0 50px rgba(56, 189, 248, 0.15);
                    position: relative;
                    text-align: left;
                }
                .close-btn {
                    position: absolute;
                    top: 1rem;
                    right: 1.5rem;
                    font-size: 2rem;
                    cursor: pointer;
                    color: var(--color-text-secondary);
                }
                .close-btn:hover { color: white; }
                h2 {
                    color: var(--color-accent);
                    margin-bottom: 1.5rem;
                    font-size: 1.8rem;
                }
                .intro-text {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                    color: var(--color-text-primary);
                }
                .key-points {
                    display: grid;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .point {
                    display: flex;
                    gap: 1rem;
                    align-items: flex-start;
                    background: rgba(255,255,255,0.05);
                    padding: 1rem;
                    border-radius: 8px;
                }
                .point .icon { font-size: 1.5rem; }
                .point strong { color: white; display: block; margin-bottom: 0.3rem; }
                .point p { margin: 0; font-size: 0.9rem; color: var(--color-text-secondary); }
                
                .call-to-action {
                    text-align: center;
                    font-size: 1.1rem;
                    margin-bottom: 1.5rem;
                }
                .start-btn {
                    width: 100%;
                    padding: 1rem;
                    font-size: 1.1rem;
                }
            `}</style>
        </div>
    );
};

export default WelcomeModal;
