import { useState, useEffect } from 'react';
import initializeAuthenticationFirebase from '../components/Firebase/firebase.init';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    GithubAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";

initializeAuthenticationFirebase()

const auth = getAuth();



const useFireBase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();





    const singInUsingGoogle = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const { displayName, email, phoneNumber, photoURL } = result.user;
                const userInfo = {
                    name: displayName,
                    email: email,
                    phone: phoneNumber,
                    photo: photoURL,

                }
                setUser(userInfo);
            })
            .finally(() => setLoading(false))
            ;
    }
    const signInUsingGitHub = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const { displayName, email, phoneNumber, photoURL } = result.user;
                const userInfo = {
                    name: displayName,
                    email: email,
                    phone: phoneNumber,
                    photo: photoURL,

                }
                setUser(userInfo)
            })
            .finally(() => setLoading(false));

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

    const handleEmailChangeInput = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChangeInput = (e) => {


        if (e.target.value.length < 6) {
            setError('Please enter 6 digit')
        }
        else {
            setPassword(e.target.value);
            setError("")
        }
    };


    const handleLoginForm = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const userInfo = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                };
                setUser(userInfo);
                setError("")

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            })


    }

    const handleRegisterForm = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                const { email, displayName, photoURL } = result.user;
                const userInfo = {
                    email: email,
                    name: displayName,
                    photo: photoURL,

                };
                setUser(userInfo)

            })
            .catch(error => {
                console.log(error.message);
            })
    }




    return {
        user,
        email,
        password,
        singInUsingGoogle,
        logout,
        isLoading,
        signInUsingGitHub,
        handleEmailChangeInput,
        handlePasswordChangeInput,
        handleLoginForm,
        handleRegisterForm,



    }
};

export default useFireBase;