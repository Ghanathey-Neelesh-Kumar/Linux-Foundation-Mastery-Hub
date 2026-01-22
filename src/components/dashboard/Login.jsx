import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Login = ({ onClose }) => {
    const { loginWithGoogle } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleGoogleLogin() {
        try {
            setError('');
            setLoading(true);
            await loginWithGoogle();
            onClose(); // Close modal on success
        } catch (err) {
            console.error(err);
            setError('Failed to sign in via Google');
        }
        setLoading(false);
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content glass-panel fade-in-up">
                <div className="close-btn" onClick={onClose}>&times;</div>
                <h2>Sign In</h2>
                <p className="subtitle">Track your progress and save your badges.</p>

                {error && <div className="error-alert">{error}</div>}

                <div className="login-actions">
                    <button
                        className="google-btn"
                        onClick={handleGoogleLogin}
                        disabled={loading}
                    >
                        <span className="icon">G</span>
                        {loading ? 'Signing in...' : 'Sign in with Google'}
                    </button>

                    <div className="divider-text">OR</div>

                    <p className="guest-note">
                        Use specific Email/Password (Coming Soon)
                    </p>
                </div>
            </div>

            <style>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(5px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 3000;
                }
                .modal-content {
                    width: 100%;
                    max-width: 400px;
                    padding: 3rem;
                    text-align: center;
                    background: #1e293b;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    position: relative;
                }
                .close-btn {
                    position: absolute;
                    top: 1rem;
                    right: 1.5rem;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #94a3b8;
                }
                .close-btn:hover { color: white; }
                h2 { margin-bottom: 0.5rem; color: white; }
                .subtitle { color: #94a3b8; margin-bottom: 2rem; }
                
                .google-btn {
                    width: 100%;
                    background: white;
                    color: #333;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    padding: 0.8rem;
                    border-radius: 6px;
                    border: none;
                    cursor: pointer;
                    transition: transform 0.1s;
                }
                .google-btn:hover { transform: translateY(-2px); }
                .google-btn .icon { font-weight: 900; font-size: 1.2rem; }
                
                .divider-text {
                    margin: 1.5rem 0;
                    color: #64748b;
                    font-size: 0.8rem;
                    position: relative;
                }
                .divider-text::before, .divider-text::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    width: 40%;
                    height: 1px;
                    background: #334155;
                }
                .divider-text::before { left: 0; }
                .divider-text::after { right: 0; }

                .guest-note { color: #64748b; font-size: 0.9rem; }
                .error-alert {
                    background: rgba(239, 68, 68, 0.2);
                    color: #fca5a5;
                    padding: 0.8rem;
                    border-radius: 6px;
                    margin-bottom: 1.5rem;
                    font-size: 0.9rem;
                }
            `}</style>
        </div>
    );
};

export default Login;
