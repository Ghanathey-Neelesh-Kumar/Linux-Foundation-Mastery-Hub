import React, { useState } from 'react';

const QuestionCountSelector = ({ totalAvailable, onSelectCount, onBack }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleStart = () => {
        const count = parseInt(inputValue, 10);

        if (isNaN(count) || count < 1) {
            setError('Please enter a valid number greater than 0.');
            return;
        }

        if (count > totalAvailable) {
            setError(`Please choose a number between 1 and ${totalAvailable}.`);
            return;
        }

        onSelectCount(count);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleStart();
        }
    }

    return (
        <div className="count-selector-container glass-panel fade-in">
            <div className="selector-header">
                <button className="back-btn" onClick={onBack}>← Back</button>
                <h2>How many questions?</h2>
            </div>

            <p className="subtitle">
                There are <span className="highlight">{totalAvailable}</span> questions available in this category.
            </p>

            <div className="input-container">
                <label htmlFor="question-count" className="input-label">Number of questions:</label>
                <div className="input-group">
                    <input
                        id="question-count"
                        type="number"
                        className="count-input"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            setError('');
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="e.g. 10"
                        min="1"
                        max={totalAvailable}
                    />
                    <button className="primary start-btn" onClick={handleStart}>
                        Start Exam
                    </button>
                </div>
                {error && <p className="error-msg">{error}</p>}
            </div>

            <style>{`
        .count-selector-container {
            max-width: 600px;
            margin: 2rem auto;
            padding: 3rem;
            text-align: center;
        }
        .selector-header {
            position: relative;
            margin-bottom: 2rem;
        }
        .back-btn {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: var(--color-text-secondary);
            font-size: 0.9rem;
            padding: 0;
        }
        .back-btn:hover { color: var(--color-accent); text-decoration: underline; }
        .subtitle { color: var(--color-text-secondary); margin-bottom: 2rem; }
        .highlight { color: var(--color-accent); font-weight: bold; }
        
        .input-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin-top: 2rem;
        }
        .input-label {
            font-size: 1.1rem;
            color: var(--color-text-primary);
        }
        .input-group {
            display: flex;
            gap: 1rem;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .count-input {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
            padding: 0.8rem 1rem;
            border-radius: var(--radius-md);
            font-size: 1.2rem;
            width: 100px;
            text-align: center;
        }
        .count-input:focus {
            outline: none;
            border-color: var(--color-accent);
            box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
        }
        .start-btn {
            padding: 0.8rem 2rem;
            font-size: 1.1rem;
        }
        .error-msg {
            color: var(--color-error);
            font-size: 0.9rem;
            margin-top: 0.5rem;
            animation: shake 0.4s ease-in-out;
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
      `}</style>
        </div>
    );
};

export default QuestionCountSelector;
