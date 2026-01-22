import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBwGSnFdODyPqY0Q0hDwMz4IQJk19ab3Rw",
    authDomain: "linux-foundation-mastery-hub.firebaseapp.com",
    projectId: "linux-foundation-mastery-hub",
    storageBucket: "linux-foundation-mastery-hub.firebasestorage.app",
    messagingSenderId: "1019149915663",
    appId: "1:1019149915663:web:888a381134c9e04ac5f57a",
    measurementId: "G-QRGCLD3Z54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
