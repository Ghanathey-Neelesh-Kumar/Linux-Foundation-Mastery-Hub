import React from 'react';

const Explanation = ({ content }) => {
    // Simple regex parser for bold and logic (ReactMarkdown would be better but keeping deps minimal as per MVP)
    // Just rendering basic structure 

    // Actually, for "Teaching" concepts, we might want nice formatting.
    // I'll assume content is passed. If we want markdown, we should use react-markdown, 
    // but for now I'll use simple style + whitespace pre-wrap.

    return (
        <div className="glass-panel explanation-card fade-in">
            <div className="explanation-header">
                <h3>🎓 Explanation & Concept</h3>
            </div>
            <div className="explanation-content">
                {/* Using creating dangerouslySetInnerHTML or just rendering text. 
                For safety and simplicity MVP, I'm just splitting by newlines or using pre-wrap */}
                <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>{content.trim()}</pre>
            </div>

            <style>{`
        .explanation-card {
            padding: 2rem;
            margin-top: 2rem;
            text-align: left;
            background: linear-gradient(to bottom right, #1e293b, #0f172a);
            border: 1px solid var(--color-accent);
        }
        .explanation-header {
            margin-bottom: 1rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 0.5rem;
        }
        .explanation-header h3 {
            color: var(--color-accent);
            margin: 0;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .explanation-content {
            line-height: 1.6;
            color: var(--color-text-secondary);
        }
        .fade-in {
            animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

export default Explanation;
