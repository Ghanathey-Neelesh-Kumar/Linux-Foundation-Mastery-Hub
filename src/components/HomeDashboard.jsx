import React from 'react';
import CategoryMenu from './CategoryMenu';
import DailyTipsWidget from './DailyTipsWidget';
import CertRoadmapWidget from './CertRoadmapWidget';

const HomeDashboard = ({ onSelectCategory }) => {
    return (
        <div className="home-dashboard fade-in">
            <aside className="dashboard-sidebar left">
                <DailyTipsWidget />
            </aside>

            <main className="dashboard-center">
                <CategoryMenu onSelectCategory={onSelectCategory} />
            </main>

            <aside className="dashboard-sidebar right">
                <CertRoadmapWidget />
            </aside>

            <style>{`
                .home-dashboard {
                    display: grid;
                    grid-template-columns: 1fr 2fr 1fr; /* 3-column layout */
                    gap: 2rem;
                    max-width: 1400px; /* Wider to accommodate sidebars */
                    margin: 0 auto;
                    align-items: start;
                }

                .dashboard-center {
                    min-width: 0; /* Prevent overflow */
                }

                .dashboard-sidebar {
                    position: sticky;
                    top: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                /* Responsive Design */
                @media (max-width: 1200px) {
                    .home-dashboard {
                        grid-template-columns: 250px 1fr; /* Right sidebar drops down or disappears */
                    }
                    .dashboard-sidebar.right {
                        display: none; /* Hide right sidebar on medium screens */
                    }
                }

                @media (max-width: 900px) {
                    .home-dashboard {
                        grid-template-columns: 1fr; /* Stack everything */
                    }
                    .dashboard-sidebar {
                        position: static;
                        display: none; /* Simplify for mobile - hide sidebars to focus on core */
                    }
                    /* Optional: Show them stacked if desired, but hiding is cleaner for mobile focus */
                }
            `}</style>
        </div>
    );
};

export default HomeDashboard;
