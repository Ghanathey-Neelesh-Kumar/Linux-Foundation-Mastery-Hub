import React from 'react';
import { categories } from '../../data/questions';

const CategoryMenu = ({ onSelectCategory }) => {
    return (
        <div className="category-menu">
            <h2>Select Your Certification Path</h2>
            <div className="categories-grid">
                {categories.map((cat) => {
                    // Check if category is coming soon (inactive)
                    const isInactive = cat.comingSoon;

                    return (
                        <button
                            key={cat.id}
                            className={`category-card glass-panel ${isInactive ? 'inactive' : ''}`}
                            onClick={() => !isInactive && onSelectCategory(cat.id)}
                            disabled={isInactive}
                        >
                            <div className="card-content">
                                <h3>{cat.title}</h3>
                                <p>{cat.description}</p>
                            </div>

                            {!isInactive && <div className="start-badge">Start Practice →</div>}

                            {/* Overlay for inactive state */}
                            {isInactive && (
                                <div className="inactive-overlay">
                                    <span className="lock-icon">🔒</span>
                                    <span>Coming Soon</span>
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>

            <style>{`
        .category-menu {
            max-width: 1000px;
            margin: 0 auto;
            animation: fadeIn 0.5s ease-out;
        }
        .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        .category-card {
            padding: 2rem;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 1rem;
            cursor: pointer;
            border: 1px solid rgba(255,255,255,0.05);
            transition: all 0.3s ease;
            background: var(--color-bg-card);
            position: relative;
            overflow: hidden; /* Ensure overlay stays inside */
            min-height: 200px;
        }

        /* Active Card Hover */
        .category-card:not(.inactive):hover {
            transform: translateY(-5px);
            border-color: var(--color-accent);
            box-shadow: var(--shadow-glow);
        }

        /* Inactive Card Styling - Looks Normal initially */
        .category-card.inactive {
            cursor: default;
            /* No opacity reduction, looks fully active */
        }

        /* Card Content Wrapper to be blurred */
        .card-content {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            transition: filter 0.3s ease;
        }

        .category-card h3 {
            margin: 0;
            color: var(--color-accent);
            font-size: 1.25rem;
        }
        
        .category-card p {
            margin: 0;
            color: var(--color-text-secondary);
        }

        /* Overlay Styling */
        .inactive-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(15, 23, 42, 0.8); /* Dark semi-transparent background */
            backdrop-filter: blur(4px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            opacity: 0; /* Hidden by default */
            transition: opacity 0.3s ease;
            color: var(--color-text-primary);
            font-weight: bold;
            font-size: 1.2rem;
            z-index: 10;
        }

        .lock-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }

        /* Show overlay on hover */
        .category-card.inactive:hover .inactive-overlay {
            opacity: 1;
        }

        .start-badge {
            margin-top: auto;
            font-weight: 600;
            color: var(--color-text-primary);
            text-align: right;
        }
      `}</style>
        </div>
    );
};

export default CategoryMenu;
