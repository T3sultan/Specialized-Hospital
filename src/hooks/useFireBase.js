import { useState, useEffect } from 'react';
import initializeAuthenticationFirebase from '../components/Firebase/firebase.init';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    GithubAuthProvider 
} from "firebase/auth";

initializeAuthenticationFirebase()

const auth = getAuth();



const useFireBase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();





    const singInUsingGoogle = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setLoading(false))
            ;
    }
    const signInUsingGitHub=()=>{
        signInWithPopup(auth,gitHubProvider)
        .then(result=>{
            setUser(result.user)
        })
        .finally(()=>setLoading(false));

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribed;

    }, []);
    const logout = () => {

        setLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false));
    }



    return {
        user,
        singInUsingGoogle,
        logout,
        isLoading,
        signInUsingGitHub

    }
};

export default useFireBase;