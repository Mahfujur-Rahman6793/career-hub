import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from './Firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);
// this app is firebase app

const AuthProvider = ({ children }) => {
  
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider);
    };
    const signUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {
        googleSignIn,
        signUp,
        signIn,
        
    };
     

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
