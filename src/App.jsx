import React, { useState } from 'react';
import Quiz from './components/Quiz.jsx';
import CategoryMenu from './components/CategoryMenu.jsx';
import QuestionCountSelector from './components/QuestionCountSelector.jsx';
import { questionBank } from './data/questions';

function App() {
  const [view, setView] = useState('menu'); // 'menu' | 'select_count' | 'quiz'
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeQuestions, setActiveQuestions] = useState([]);

  // Step 1: User selects category -> Go to count selection
  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    setView('select_count');
  };

  // Step 2: User selects count -> Slice questions -> Start Quiz
  const handleCountSelect = (count) => {
    const allQuestions = questionBank[activeCategory] || [];
    // Shuffle questions before slicing (optional but good for practice)
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);

    setActiveQuestions(selected);
    setView('quiz');
  };

  const returnToMenu = () => {
    setView('menu');
    setActiveCategory(null);
    setActiveQuestions([]);
  };

  const returnToCategory = () => {
    // Just resets the category selection step, technically same as menu but nicer UX maybe?
    // Actually per requirement just going back to menu or re-selecting is fine.
    // But let's support "Back" from Count Selector.
    setView('menu');
    setActiveCategory(null);
  }

  return (
    <div className="app-layout">
      <header className="main-header">
        <div className="logo-container" onClick={returnToMenu} style={{ cursor: 'pointer' }}>
          <span className="icon">🐧</span>
          <h1>Linux Foundation Mastery <span className="highlight">Hub</span></h1>
        </div>
        <p className="subtitle">Master Linux Foundations with Concept-First Practice</p>
      </header>

      <main className="main-content">
        {view === 'menu' && (
          <CategoryMenu onSelectCategory={handleCategorySelect} />
        )}

        {view === 'select_count' && (
          <QuestionCountSelector
            totalAvailable={questionBank[activeCategory]?.length || 0}
            onSelectCount={handleCountSelect}
            onBack={returnToCategory}
          />
        )}

        {view === 'quiz' && (
          <Quiz
            questions={activeQuestions}
            onBackToMenu={returnToMenu}
            onRetry={() => setView('select_count')}
          />
        )}
      </main>

      <footer className="main-footer">
        <p>© {new Date().getFullYear()} Linux Cert Prep • Built for Certification Success</p>
      </footer>

      <style>{`
        .app-layout {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
        .main-header {
            padding: 3rem 1rem;
            text-align: center;
        }
        .logo-container {
            font-size: clamp(1rem, 4vw, 2rem); /* Responsive size: min 1rem, max 2rem */
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
            margin-bottom: 0.5rem;
            flex-wrap: nowrap; /* Prevent wrapping */
        }
        .logo-container h1 {
            margin: 0;
            font-size: inherit;
            line-height: 1;
            white-space: nowrap; /* Force single line */
            overflow: hidden;
            text-overflow: ellipsis; /* Graceful fallback */
        }
        .icon { font-size: 2.5rem; }
        .highlight { color: var(--color-accent); }
        .subtitle {
            color: var(--color-text-secondary);
            font-size: 1.1rem;
        }
        .main-content {
            flex: 1;
            padding: 1rem;
        }
        .main-footer {
            padding: 2rem;
            text-align: center;
            color: var(--color-text-secondary);
            font-size: 0.9rem;
            border-top: 1px solid rgba(255,255,255,0.05);
            margin-top: 3rem;
        }
      `}</style>
    </div>
  );
}

export default App;
