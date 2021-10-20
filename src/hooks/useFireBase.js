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
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    sendPasswordResetEmail,

} from "firebase/auth";

initializeAuthenticationFirebase()

const auth = getAuth();



const useFireBase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('')
    const [isLogin, setIsLogin] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();





    const signInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider);

    }
    const signInUsingGitHub = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {

                setUser(user)
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
            .then(() => {
                setUser({})
            })

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


    const handleLoginForm = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

                setUser(user);
                setUserName();
                verifyEmail();
                setError("")

            })
            .catch(error => {

                const errorMessage = error.message;
                setError(errorMessage);
            })


    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }



    const handleRegisterForm = (e) => {
        e.preventDefault()

        if (password.length < 8) {
            setError('Password must be at least 6 character')
            return;
          }
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {

        //         setUser(user)

        //     })
        //     .catch(error => {
        //         console.log(error.message);
        //     })
    isLogin ? handleLoginForm(email, password) : registerNewUser(email, password)
        
    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
          })
          .catch(error => {
            setError(error.message)
          })
      }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }




    const handleNameChange = e => {

        setName(e.target.value)
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log('success')
            })
    }





    return {
        user,
        email,
        password,
        signInUsingGoogle,
        logout,
        isLoading,
        signInUsingGitHub,
        handleEmailChangeInput,
        handlePasswordChangeInput,
        handleLoginForm,
        handleRegisterForm,
        handleNameChange,
        handleResetPassword,




    }
};

export default useFireBase;