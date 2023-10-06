import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from './Firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);
// this app is firebase app

const AuthProvider = ({ children }) => {

    const [user,setUser] = useState();

    console.log(user);
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
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('state changed successfully');
            setUser(currentUser);
        });
        return()=>{
            return unSubscribe();
        }
    },[])
    const authInfo = {
        googleSignIn,
        signUp,
        signIn,
        user,
        
        
    };
     

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
