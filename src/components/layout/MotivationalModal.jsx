import React from 'react';

const quotes = [
    "Persistence is the key to mastery. Keep going!",
    "Every expert was once a beginner. You've got this!",
    "Don't stop when you're tired. Stop when you're done.",
    "Certification is specific knowledge, but learning is a lifelong journey.",
    "Failure is just another way to learn how to do it right.",
    "Small progress is still progress.",
    "The only way to do great work is to love what you do.",
    "Believing in yourself is the first secret to success."
];

const MotivationalModal = ({ onResume, onQuit }) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div className="modal-overlay">
            <div className="modal-content glass-panel fade-in-up">
                <h3>Wait! You're doing great. 🐧</h3>
                <p className="motivational-quote">"{randomQuote}"</p>
                <p className="sub-text">Are you sure you want to stop? You're building your future right now.</p>

                <div className="modal-actions">
                    <button className="primary resume-btn" onClick={onResume}>
                        Resume Quiz 🚀
                    </button>
                    <button className="text-btn quit-btn" onClick={onQuit}>
                        I really need to quit
                    </button>
                </div>
            </div>

            <style>{`
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(15, 23, 42, 0.85); /* Dark blur overlay */
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .modal-content {
            max-width: 500px;
            padding: 3rem;
            text-align: center;
            border: 1px solid var(--color-accent);
            box-shadow: 0 0 50px rgba(56, 189, 248, 0.2);
        }
        .fade-in-up {
            animation: fadeInUp 0.4s ease-out;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        h3 { 
            color: var(--color-accent); 
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
        }
        .motivational-quote {
            font-size: 1.25rem;
            font-style: italic;
            margin-bottom: 2rem;
            line-height: 1.6;
            color: var(--color-text-primary);
        }
        .sub-text {
            color: var(--color-text-secondary);
            margin-bottom: 2rem;
        }
        .modal-actions {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
        }
        .resume-btn {
            font-size: 1.2rem;
            padding: 1rem 3rem;
            width: 100%;
            max-width: 300px;
        }
        .quit-btn {
            color: var(--color-text-secondary);
            font-size: 0.9rem;
        }
        .quit-btn:hover {
            color: var(--color-error);
        }
      `}</style>
        </div>
    );
};

export default MotivationalModal;
