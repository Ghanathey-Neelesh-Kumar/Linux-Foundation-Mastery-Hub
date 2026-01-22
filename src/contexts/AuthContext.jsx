import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import {
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    function loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    function logout() {
        return signOut(auth);
    }

    async function updateUserProfile(data) {
        if (!currentUser) return;

        const userRef = doc(db, "users", currentUser.uid);

        // Merge new data with existing
        await setDoc(userRef, {
            ...data,
            updatedAt: new Date().toISOString()
        }, { merge: true });

        // Update local state to reflect changes immediately
        setCurrentUser(prev => ({ ...prev, ...data }));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    // Fetch additional user data from Firestore
                    const userRef = doc(db, "users", user.uid);
                    const docSnap = await getDoc(userRef);

                    let userData = user;
                    if (docSnap.exists()) {
                        // Combine auth data with firestore data
                        userData = { ...user, ...docSnap.data() };
                    } else {
                        // Create initial document if it doesn't exist
                        await setDoc(userRef, {
                            email: user.email,
                            displayName: user.displayName,
                            photoURL: user.photoURL,
                            createdAt: new Date().toISOString()
                        });
                    }
                    setCurrentUser(userData);
                } catch (error) {
                    // Fallback to basic auth user if firestore fails
                    setCurrentUser(user);
                }
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        loginWithGoogle,
        logout,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? (
                <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', color: 'white', background: '#0f172a' }}>
                    <div className="loader" style={{ width: '40px', height: '40px', border: '4px solid rgba(255,255,255,0.1)', borderTopColor: '#38bdf8', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                    <p>Connecting to Firebase...</p>
                    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
}
