import React, { useState, useEffect } from 'react';

const tips = [
    { cmd: 'grep -r "text" .', desc: 'Search recursively for text in current directory.' },
    { cmd: 'tar -czvf archive.tar.gz folder', desc: 'Compress a folder into a .tar.gz file.' },
    { cmd: 'chmod 755 script.sh', desc: 'Make a script executable for owner, readable for others.' },
    { cmd: 'top', desc: 'Monitor running processes and system resource usage.' },
    { cmd: 'history | grep "docker"', desc: 'Find previously run docker commands.' },
    { cmd: 'kubectl get pods -A', desc: 'List all pods across all namespaces.' },
    { cmd: 'docker system prune', desc: 'Clean up unused containers, networks, and images.' },
    { cmd: 'tail -f /var/log/syslog', desc: 'Follow system logs in real-time.' }
];

const DailyTipsWidget = () => {
    const [tip, setTip] = useState(tips[0]);

    useEffect(() => {
        // Random tip on mount
        setTip(tips[Math.floor(Math.random() * tips.length)]);
    }, []);

    return (
        <div className="widget-container glass-panel">
            <div className="widget-header">
                <span className="icon">💡</span>
                <h3>Command of the Day</h3>
            </div>

            <div className="terminal-window">
                <div className="terminal-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>
                <div className="terminal-body">
                    <span className="prompt">$</span> {tip.cmd}
                </div>
            </div>

            <p className="tip-description">{tip.desc}</p>

            <style>{`
                .widget-container {
                    padding: 1.5rem;
                    text-align: left;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .widget-header {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.5rem;
                }
                .widget-header h3 {
                    font-size: 1.1rem;
                    color: var(--color-accent);
                    margin: 0;
                }
                .icon { font-size: 1.2rem; }
                
                .terminal-window {
                    background: #0f172a;
                    border-radius: 6px;
                    border: 1px solid rgba(255,255,255,0.1);
                    overflow: hidden;
                    font-family: 'Courier New', monospace;
                }
                .terminal-header {
                    background: rgba(255,255,255,0.05);
                    padding: 0.5rem;
                    display: flex;
                    gap: 6px;
                }
                .dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                }
                .red { background: #ef4444; }
                .yellow { background: #eab308; }
                .green { background: #22c55e; }
                
                .terminal-body {
                    padding: 1rem;
                    color: #22c55e;
                    font-size: 0.9rem;
                    word-break: break-all;
                }
                .prompt {
                    color: var(--color-accent);
                    margin-right: 0.5rem;
                }
                
                .tip-description {
                    color: var(--color-text-secondary);
                    font-size: 0.9rem;
                    line-height: 1.4;
                    margin: 0;
                }
            `}</style>
        </div>
    );
};

export default DailyTipsWidget;
