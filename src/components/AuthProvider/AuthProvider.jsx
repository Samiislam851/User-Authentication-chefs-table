import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


///////////////////////// GOOGLE LOGIN ///////////////////////////////

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

///////////////////////////GitHub Login////////////////////////////    

    const gitHubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider)
    }

////////////////////// Sign Out ////////////////////////////
    const logOut = () => {
        signOut(auth).then(() => {
            setUser(null);
        }).catch((error) => {

        });
    }

////////////////////// Monitoring current User /////////////////
    useEffect(() => {
        const unsubscribe =
            onAuthStateChanged(auth, (loggedUser) => {
                setUser(loggedUser);
                setLoading(false);
            })

        return () => {
            unsubscribe();
        };
    }, []);

/////////////////////// Create Use Function ///////////////////
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        })
    }
/////////////////////// Log In with Email and Pass ////////////////////////
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authValue = {
        user,
        signUpUser,
        setUser,
        updateUserProfile,
        userLogin,
        logOut,
        googleLogin,
        gitHubLogin,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;