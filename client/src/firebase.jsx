import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "foodilies.firebaseapp.com",
  projectId: "foodilies",
  storageBucket: "foodilies.firebasestorage.app",
  messagingSenderId: "188552211818",
  appId: "1:188552211818:web:f6204b4a1a78ea14790913",
  measurementId: "G-BYX80S3C83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, analytics };
