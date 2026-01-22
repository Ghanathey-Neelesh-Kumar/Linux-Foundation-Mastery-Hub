import React, { useState, useEffect, useMemo } from 'react';
import QuestionCard from './QuestionCard';
import Explanation from './Explanation';
import MotivationalModal from '../layout/MotivationalModal';

// Helper to shuffle array
const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

const Quiz = ({ questions, onBackToMenu, onRetry }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    // Timer State - Initialize correctly to avoid race condition where 0 triggers immediate finish
    const [timeLeft, setTimeLeft] = useState(() => (questions && questions.length > 0) ? questions.length * 90 : 0);

    // Motivational Modal State
    const [showExitModal, setShowExitModal] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Reset state when questions change
    useEffect(() => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
        setQuizFinished(false);
        setShowExitModal(false);
        setIsPaused(false);

        // Ensure timer is reset when questions definitely change
        if (questions && questions.length > 0) {
            setTimeLeft(questions.length * 90);
        }
    }, [questions]);

    // Timer Logic - Updates to respect isPaused and showExitModal
    useEffect(() => {
        // Only run timer if we have time left, quiz isn't finished/paused/modal open
        // AND importantly: make sure we actually started with some time (timeLeft initialized)

        if (timeLeft > 0 && !quizFinished && !isPaused && !showExitModal) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0 && !quizFinished && questions.length > 0) {
            // Only trigger finish if time is 0 AND we actually had questions (avoid partial initial render trigger)
            setQuizFinished(true); // Time's up
        }
    }, [timeLeft, quizFinished, isPaused, showExitModal, questions.length]);

    // Format Time
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    if (!questions || questions.length === 0) {
        return <div className="glass-panel" style={{ padding: '2rem' }}>No questions available in this category yet. <button onClick={onBackToMenu}>Go Back</button></div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    // Memoize shuffled options so they don't reshuffle on every render
    const shuffledOptions = useMemo(() => {
        if (!currentQuestion) return [];
        return shuffleArray(currentQuestion.options);
    }, [currentQuestion]);

    // Create a temporary question object with shuffled options to pass to card
    const displayQuestion = {
        ...currentQuestion,
        options: shuffledOptions
    };

    const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer);
        setShowResult(true);
        if (answer === currentQuestion.correctAnswer) {
            setScore((prev) => prev + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            setQuizFinished(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
        setQuizFinished(false);
        setTimeLeft(questions.length * 90);
        setShowExitModal(false);
    };

    const handleEndQuizClick = () => {
        setIsPaused(true);
        setShowExitModal(true);
    };

    const handleResume = () => {
        setIsPaused(false);
        setShowExitModal(false);
    };

    const handleQuit = () => {
        setShowExitModal(false);
        onBackToMenu();
    };

    if (quizFinished) {
        const percentage = (score / questions.length) * 100;

        // Feedback Pools
        const perfectMessages = [
            { title: "Phenomenal Work! 🏆", body: "You nailed every single question. You are arguably ready for the real exam!" },
            { title: "Flawless Victory! 🥋", body: "Zero mistakes. Your knowledge is razor sharp." },
            { title: "Linux Master! 🐧", body: "You clearly know your stuff. Keep up the amazing work!" }
        ];

        const greatMessages = [
            { title: "Excellent Job! 🌟", body: "Strong performance. Just a few tweaks and you'll be perfect." },
            { title: "Great work! 🚀", body: "You have a solid grasp of the concepts. Keep polishing those edge cases." },
            { title: "Very Impressive! 👏", body: "You're well on your way to certification success." }
        ];

        const goodMessages = [
            { title: "Good Effort! 👍", body: "You're getting there. Review the explanations for the ones you missed." },
            { title: "Not Bad! 📚", body: "You have a good foundation, but there are some gaps to fill." },
            { title: "Solid Start! 🌱", body: "Keep practicing and focusing on the areas where you struggled." }
        ];

        const retryMessages = [
            { title: "Keep Practicing! 💪", body: "Don't get discouraged. Certification takes persistence. Review the concepts and try again." },
            { title: "Learning Opportunity! 💡", body: "Every mistake is a chance to learn. Analyse what went wrong." },
            { title: "Don't Give Up! 🛡️", body: "Persistence is key. Review the material and give it another shot." }
        ];

        const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

        // Use useMemo to ensure the message stays consistent during this render cycle if state updates occur
        // However, since we return immediately, we can just calculating it. 
        // Note: In a real re-render of just this view (unlikely to happen in this simple app without reset), it might flicker.
        // For safety, let's just pick one. 

        let feedback;
        if (percentage === 100) feedback = getRandom(perfectMessages);
        else if (percentage >= 80) feedback = getRandom(greatMessages);
        else if (percentage >= 50) feedback = getRandom(goodMessages);
        else feedback = getRandom(retryMessages);

        const { title: message, body: submessage } = feedback;

        return (
            <div className="glass-panel result-card">
                <h2>{timeLeft === 0 ? "⏰ Time's Up!" : "🎉 Quiz Completed!"}</h2>
                <div className="score-display">
                    <span className="score-number">{score}</span>
                    <span className="score-total">/ {questions.length}</span>
                </div>

                <div className="feedback-section">
                    <h3>{message}</h3>
                    <p>{submessage}</p>
                    <div className="cert-wish">
                        <span className="wish-icon">🍀</span>
                        <p>Best of luck on your certification journey! You've got this.</p>
                    </div>
                </div>

                <div className="result-actions">
                    <button className="primary" onClick={onRetry}>Take New Quiz</button>
                    <button className="secondary" onClick={onBackToMenu}>Back to Dashboard</button>
                </div>

                <style>{`
            .result-card { padding: 3rem; margin: 2rem auto; max-width: 600px; }
            .score-display { font-size: 4rem; font-weight: 700; margin: 2rem 0; color: var(--color-accent); }
            .score-total { font-size: 2rem; color: var(--color-text-secondary); }
            .feedback-section { margin-bottom: 2rem; }
            .feedback-section h3 { color: var(--color-text-primary); margin-bottom: 0.5rem; font-size: 1.5rem; }
            .feedback-section p { color: var(--color-text-secondary); line-height: 1.6; }
            .cert-wish { 
                margin-top: 2rem; 
                padding: 1.5rem; 
                background: rgba(255, 255, 255, 0.05); 
                border-radius: var(--radius-md);
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
            }
            .wish-icon { font-size: 2rem; }
            .cert-wish p { color: var(--color-accent); font-weight: 600; margin: 0; }
            .result-actions { display: flex; gap: 1rem; justify-content: center; margin-top: 2rem; }
            .secondary { background: transparent; border: 1px solid var(--color-text-secondary); }
            .secondary:hover { border-color: var(--color-accent); color: var(--color-accent); }
        `}</style>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            {showExitModal && (
                <MotivationalModal
                    onResume={handleResume}
                    onQuit={handleQuit}
                />
            )}

            <div className="quiz-top-bar">
                <button className="end-quiz-btn" onClick={handleEndQuizClick}>End Quiz</button>
                <div className={`timer ${timeLeft < 60 ? 'timer-low' : ''}`}>
                    ⏰ {formatTime(timeLeft)}
                </div>
            </div>

            <div className="quiz-header">
                <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                <span className="current-score">Score: {score}</span>
            </div>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
                ></div>
            </div>

            <QuestionCard
                questionData={displayQuestion}
                selectedAnswer={selectedAnswer}
                onAnswerSelect={handleAnswerSelect}
                showResult={showResult}
            />

            {showResult && (
                <div className="fade-in">
                    <Explanation content={currentQuestion.explanation} />
                    <div className="controls">
                        <button className="primary next-btn" onClick={handleNextQuestion}>
                            {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next Question →"}
                        </button>
                    </div>
                </div>
            )}

            <style>{`
        .quiz-container {
            max-width: 800px;
            margin: 0 auto;
            width: 100%;
        }
        .quiz-top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }
        .timer {
            font-size: 1.2rem;
            font-weight: 700;
            background: rgba(255,255,255,0.05);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.1);
        }
        .timer-low {
            color: var(--color-error);
            border-color: var(--color-error);
            animation: pulse 1s infinite;
        }
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
        .text-btn {
            background: none;
            border: none;
            padding: 0;
            color: var(--color-text-secondary);
            font-size: 0.9rem;
        }
        .text-btn:hover {
            color: var(--color-accent);
            text-decoration: underline;
        }
        .quiz-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
            color: var(--color-text-secondary);
            font-weight: 500;
        }
        .progress-bar {
            height: 6px;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            margin-bottom: 2rem;
            overflow: hidden;
        }
        .progress-fill {
            height: 100%;
            background: var(--color-accent);
            transition: width 0.3s ease;
        }
        .controls {
            margin-top: 2rem;
            display: flex;
            justify-content: flex-end;
        }
        .next-btn {
            padding: 0.8rem 2rem;
            font-size: 1.1rem;
        }
      `}</style>
        </div>
    );
};

export default Quiz;
