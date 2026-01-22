import React from 'react';

const QuestionCard = ({ questionData, onAnswerSelect, selectedAnswer, showResult }) => {
    const { question, options, correctAnswer } = questionData;

    const getOptionClass = (option) => {
        let cls = "option-btn";
        if (showResult) {
            if (option === correctAnswer) return cls + " correct";
            if (selectedAnswer === option && option !== correctAnswer) return cls + " incorrect";
            // Fade out others
            if (option !== correctAnswer && option !== selectedAnswer) return cls + " dimmed";
        } else {
            if (selectedAnswer === option) return cls + " selected";
        }
        return cls;
    };

    return (
        <div className="glass-panel question-card">
            <h2 className="question-text">{question}</h2>
            <div className="options-grid">
                {options.map((option, idx) => (
                    <button
                        key={idx}
                        className={getOptionClass(option)}
                        onClick={() => !showResult && onAnswerSelect(option)}
                        disabled={showResult}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <style>{`
        .question-card {
            padding: 2rem;
            margin-bottom: 2rem;
            text-align: left;
        }
        .question-text {
            margin-bottom: 1.5rem;
            font-size: 1.25rem;
            font-weight: 600;
        }
        .options-grid {
            display: grid;
            gap: 1rem;
            grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
            .options-grid { grid-template-columns: 1fr 1fr; }
        }
        .option-btn {
            padding: 1rem;
            text-align: left;
            border: 2px solid transparent;
            background: rgba(255,255,255,0.05);
            transition: all 0.3s ease;
        }
        .option-btn:hover:not(:disabled) {
            border-color: var(--color-accent);
            background: rgba(255,255,255,0.1);
        }
        .option-btn.selected {
            border-color: var(--color-accent);
            background: rgba(56, 189, 248, 0.1);
        }
        .option-btn.correct {
            border-color: var(--color-success);
            background: rgba(34, 197, 94, 0.1);
            color: var(--color-success);
        }
        .option-btn.incorrect {
            border-color: var(--color-error);
            background: rgba(239, 68, 68, 0.1);
            color: var(--color-error);
        }
        .option-btn.dimmed {
            opacity: 0.5;
        }
      `}</style>
        </div>
    );
};

export default QuestionCard;
