import React from 'react';

const CertRoadmapWidget = () => {
    return (
        <div className="widget-container glass-panel">
            <div className="widget-header">
                <span className="icon">🚀</span>
                <h3>Recommended Path</h3>
            </div>

            <div className="roadmap-list">
                <div className="roadmap-item completed">
                    <div className="checkbox">✓</div>
                    <div className="content">
                        <span className="level">ENTRY</span>
                        <span className="title">Linux Essentials</span>
                    </div>
                </div>

                <div className="roadmap-line active"></div>

                <div className="roadmap-item active">
                    <div className="checkbox current"></div>
                    <div className="content">
                        <span className="level">ASSOCIATE</span>
                        <span className="title highlight">KCNA</span>
                    </div>
                </div>

                <div className="roadmap-line"></div>

                <div className="roadmap-item">
                    <div className="checkbox"></div>
                    <div className="content">
                        <span className="level">ADMIN</span>
                        <span className="title">CKA / LFCS</span>
                    </div>
                </div>

                <div className="roadmap-line"></div>

                <div className="roadmap-item">
                    <div className="checkbox"></div>
                    <div className="content">
                        <span className="level">SPECIALIST</span>
                        <span className="title">CKS / CGOA</span>
                    </div>
                </div>
            </div>

            <style>{`
                .widget-container {
                    padding: 2rem;
                    text-align: center;
                }
                .widget-header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    margin-bottom: 2rem;
                }
                .widget-header h3 {
                    font-size: 1.2rem;
                    color: var(--color-accent);
                    margin: 0;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }
                
                .roadmap-list {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .roadmap-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    opacity: 0.5;
                    position: relative;
                }
                .roadmap-item.active,
                .roadmap-item.completed {
                    opacity: 1;
                }
                
                .checkbox {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border: 2px solid var(--color-text-secondary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1rem;
                    margin-bottom: 0.5rem;
                    background: var(--color-bg-dark);
                    z-index: 2;
                }
                .checkbox.current {
                    border-color: var(--color-accent);
                    box-shadow: 0 0 15px var(--color-accent);
                    background: #0ea5e9;
                }
                .completed .checkbox {
                    background: var(--color-success);
                    border-color: var(--color-success);
                    color: #fff;
                }
                
                .roadmap-line {
                    height: 2px;
                    width: 100px;
                    background: rgba(255,255,255,0.1);
                    margin-top: -3.5rem; /* Better alignment visual hack */
                    z-index: 1;
                }
                .roadmap-line.active {
                    background: var(--color-success);
                }
                
                .content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .level {
                    font-size: 0.7rem;
                    letter-spacing: 0.05em;
                    color: var(--color-text-secondary);
                    margin-bottom: 0.2rem;
                }
                .title {
                    font-weight: 600;
                    font-size: 0.9rem;
                    white-space: nowrap;
                }
                .title.highlight {
                    color: var(--color-accent);
                }

                @media (max-width: 768px) {
                    .roadmap-list {
                        flex-direction: column;
                        gap: 0;
                    }
                    .roadmap-line {
                        width: 2px;
                        height: 40px;
                        margin-top: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default CertRoadmapWidget;
