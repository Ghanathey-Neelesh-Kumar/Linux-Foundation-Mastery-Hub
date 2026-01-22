import React, { useState } from 'react';
import Quiz from './components/quiz/Quiz.jsx';
import CategoryMenu from './components/quiz/CategoryMenu.jsx';
import QuestionCountSelector from './components/quiz/QuestionCountSelector.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
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
    setView('menu');
    setActiveCategory(null);
  }

  return (
    <div className="app-layout">
      <Header onLogoClick={returnToMenu} />

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

      <Footer />
    </div>
  );
}

export default App;
