import React, { createContext } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './Firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);
// this app is firebase app

const AuthProvider = ({ children }) => {
  
const googleProvider = new GoogleAuthProvider();
const googleSignIn = () => {
    return signInWithPopup(auth,googleProvider);
};
    const authInfo = {
        googleSignIn, // or simply googleSignIn if the names match
        
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
