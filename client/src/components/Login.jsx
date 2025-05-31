import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setError(null);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Sign-in error:", err);
      setError("Failed to sign in with Google");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error("Sign-out error:", err);
      setError("Failed to sign out");
    }
  };

  return (
    <div className="login-container">
      {error && <p className="login-error">{error}</p>}
      {user ? (
        <div className="user-info">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="user-photo"
            onError={(e) => {
              console.error("Failed to load user photo");
              e.target.src = "https://via.placeholder.com/40?text=User";
            }}
          />
          <span className="user-name">{user.displayName}</span>
          <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      ) : (
        <button className="signin-button" onClick={handleSignIn}>
          <img
            src="/assets/google-signin.png"
            alt="Google Sign-In"
            className="google-icon"
            onError={(e) => {
              console.error("Failed to load Google icon");
              e.target.src = "https://via.placeholder.com/20?text=G";
            }}
          />
          Sign In
        </button>
      )}
    </div>
  );
};

export default Login;
