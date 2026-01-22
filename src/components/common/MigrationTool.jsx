import { db } from '../../firebase';
import { writeBatch, doc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { questionBank, categories } from '../../data/questions';

const MigrationTool = () => {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const migrateCategories = async (batch) => {
        const categoriesRef = collection(db, 'categories');
        let count = 0;

        for (const cat of categories) {
            const docRef = doc(categoriesRef, cat.id);
            batch.set(docRef, cat);
            count++;
        }
        return count;
    };

    const migrateQuestions = async (batch) => {
        const questionsRef = collection(db, 'questions');
        let count = 0;

        for (const [catId, questions] of Object.entries(questionBank)) {
            for (const q of questions) {
                // Create a unique ID or let Firestore generate one. 
                // Using auto-ID is usually better for scaling, but for static migration 
                // we might want deterministic IDs if we update later. 
                // Let's use auto-ID for now but include the old numeric ID in the data.
                const newDocRef = doc(questionsRef);

                const questionData = {
                    ...q,
                    category: catId,
                    difficulty: 'Intermediate', // Default
                    tags: [], // Default
                    migratedAt: new Date().toISOString()
                };

                batch.set(newDocRef, questionData);
                count++;
            }
        }
        return count;
    };

    const handleMigration = async () => {
        if (!confirm("This will overwrite/add data to Firestore. Continue?")) return;

        setLoading(true);
        setStatus('Starting migration...');

        try {
            const batch = writeBatch(db);

            const catCount = await migrateCategories(batch);
            setStatus(`Prepared ${catCount} categories...`);

            const qCount = await migrateQuestions(batch);
            setStatus(`Prepared ${catCount} categories and ${qCount} questions. Committing batch...`);

            await batch.commit();
            setStatus(`SUCCESS: Migrated ${catCount} categories and ${qCount} questions to Firestore! ✅`);
        } catch (error) {
            console.error("Migration failed:", error);
            setStatus(`ERROR: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleClearValues = async () => {
        if (!confirm("BURNING IT DOWN! This will delete ALL questions and categories from Firestore. Are you sure?")) return;
        setLoading(true);
        setStatus('Deleting data...');
        try {
            // Helper to delete collection
            const deleteCollection = async (path) => {
                const q = collection(db, path);
                const snapshot = await getDocs(q);
                const deleteBatch = writeBatch(db);
                snapshot.docs.forEach((doc) => {
                    deleteBatch.delete(doc.ref);
                });
                await deleteBatch.commit();
            };

            await deleteCollection('categories');
            await deleteCollection('questions');
            setStatus('All collections cleared. Ready to migrate.');
        } catch (error) {
            setStatus(`Delete Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '1rem', border: '1px solid orange', margin: '1rem 0', borderRadius: '8px', background: 'rgba(255, 165, 0, 0.1)' }}>
            <h3>🛠️ Admin Migration Tool</h3>
            <p>Status: <strong>{status}</strong></p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button
                    onClick={handleMigration}
                    disabled={loading}
                    style={{ padding: '0.5rem 1rem', background: '#4ade80', border: 'none', borderRadius: '4px', color: 'black', cursor: 'pointer' }}
                >
                    {loading ? 'Processing...' : '🚀 Run Migration'}
                </button>

                <button
                    onClick={handleClearValues}
                    disabled={loading}
                    style={{ padding: '0.5rem 1rem', background: '#ef4444', border: 'none', borderRadius: '4px', color: 'white', cursor: 'pointer' }}
                >
                    🗑️ Clear DB
                </button>
            </div>
        </div>
    );
};

export default MigrationTool;
