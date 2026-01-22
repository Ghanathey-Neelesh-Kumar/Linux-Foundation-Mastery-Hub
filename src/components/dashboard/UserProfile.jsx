import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import MigrationTool from '../common/MigrationTool';

const UserProfile = () => {
    const { currentUser, logout, updateUserProfile } = useAuth();

    // Form state - initializing with auth data where available
    const [formData, setFormData] = useState({
        displayName: '',
        email: '',
        mobile: '',
        bio: '',
        targetCert: 'KCNA'
    });

    const [isEditing, setIsEditing] = useState(true);
    const [saveStatus, setSaveStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Sync local form state with currentUser (which now includes Firestore data)
    useEffect(() => {
        if (currentUser) {
            setFormData({
                displayName: currentUser.displayName || '',
                email: currentUser.email || '',
                mobile: currentUser.mobile || '',
                bio: currentUser.bio || '',
                targetCert: currentUser.targetCert || 'KCNA'
            });
        }
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaveStatus('');
        setIsLoading(true);

        try {
            await updateUserProfile({
                displayName: formData.displayName,
                mobile: formData.mobile,
                bio: formData.bio,
                targetCert: formData.targetCert
            });
            setSaveStatus('Profile Saved Successfully! ✅');
            setTimeout(() => setSaveStatus(''), 3000);
        } catch (error) {
            console.error("Error saving profile:", error);
            setSaveStatus('Failed to save profile. ❌');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="profile-container glass-panel fade-in">
            <div className="profile-header">
                <h2>My Profile</h2>
                <button className="logout-btn" onClick={logout}>
                    Log Out <span>🚪</span>
                </button>
            </div>

            <div className="profile-content">
                <div className="profile-avatar-section">
                    <img
                        src={currentUser?.photoURL || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="profile-avatar-large"
                    />
                    <p className="email-display">{currentUser?.email}</p>
                </div>

                <form className="profile-form" onSubmit={handleSave}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="displayName"
                            value={formData.displayName}
                            onChange={handleChange}
                            className="glass-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Email (Read-only)</label>
                        <input
                            type="email"
                            value={formData.email}
                            disabled
                            className="glass-input disabled"
                        />
                    </div>

                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="glass-input"
                        />
                    </div>

                    <div className="form-group">
                        <label>Target Certification</label>
                        <select
                            name="targetCert"
                            value={formData.targetCert}
                            onChange={handleChange}
                            className="glass-input"
                        >
                            <option value="KCNA">KCNA (Kubernetes & Cloud Native Associate)</option>
                            <option value="LFCS">LFCS (Linux Foundation Certified SysAdmin)</option>
                            <option value="LFCE">LFCE (Linux Foundation Certified Engineer)</option>
                            <option value="CKA">CKA (Certified Kubernetes Administrator)</option>
                            <option value="CKS">CKS (Certified Kubernetes Security Specialist)</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Bio / About Me</label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Tell us about your learning journey..."
                            className="glass-input"
                        ></textarea>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="primary-btn save-btn" disabled={isLoading}>
                            {isLoading ? 'Saving...' : 'Save Changes'}
                        </button>
                        {saveStatus && <span className={`save-status ${saveStatus.includes('Failed') ? 'error' : ''}`}>{saveStatus}</span>}
                    </div>
                </form>
            </div>

            <MigrationTool />

            <style>{`
                .profile-container {
                    max-width: 800px;
                    margin: 2rem auto;
                    padding: 2rem;
                }

                .profile-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    padding-bottom: 1rem;
                }

                .profile-content {
                    display: grid;
                    grid-template-columns: 250px 1fr;
                    gap: 3rem;
                }

                .profile-avatar-section {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .profile-avatar-large {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    border: 4px solid var(--color-accent);
                    margin-bottom: 1rem;
                    object-fit: cover;
                }

                .email-display {
                    color: var(--color-text-secondary);
                    font-size: 0.9rem;
                    word-break: break-all;
                }

                .profile-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .form-group label {
                    font-weight: 500;
                    color: var(--color-text-secondary);
                    font-size: 0.9rem;
                }

                .glass-input {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 6px;
                    padding: 0.8rem;
                    color: white;
                    font-family: inherit;
                    transition: border-color 0.2s;
                }

                .glass-input:focus {
                    outline: none;
                    border-color: var(--color-accent);
                    background: rgba(255, 255, 255, 0.1);
                }

                .glass-input.disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .form-actions {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .save-btn {
                    padding: 0.8rem 2rem;
                    font-size: 1rem;
                    min-width: 150px;
                }

                .save-btn:disabled {
                    opacity: 0.7;
                    cursor: wait;
                }

                .save-status {
                    color: #4ade80;
                    font-size: 0.9rem;
                    animation: fadeIn 0.3s;
                }
                
                .save-status.error {
                    color: #ef4444; 
                }

                .logout-btn {
                    background: rgba(239, 68, 68, 0.1);
                    color: #ef4444;
                    border: 1px solid rgba(239, 68, 68, 0.2);
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .logout-btn:hover {
                    background: rgba(239, 68, 68, 0.2);
                    transform: translateY(-1px);
                }

                @media (max-width: 768px) {
                    .profile-content {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default UserProfile;
