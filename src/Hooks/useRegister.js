// google firebase
import { auth } from '../firebase/useFireBaseConfig'
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// context
import { useGlobalContext } from './useGlobalContext';
import { toast } from 'react-toastify';

export const useRegister = () => {
    const { dispatch } = useGlobalContext()
    const singUpWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
                const user = result.user;
                dispatch({ type: "LOGIN", payload: user })
                toast.success("welcome")
            }).catch((error) => {
                const errorMessage = error.message;
                toast.warn(errorMessage);
            });
    }

    const registerWithEmailAndPassword = (displayName, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;

                await updateProfile(auth.currentUser, {
                    displayName: displayName,
                    photoURL: `https://api.dicebear.com/9.x/initials/svg?seed=${displayName}`
                })

                dispatch({ type: "LOGIN", payload: user })
                toast.success("WELCOME BITCH")
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
    }
    return { singUpWithGoogle, registerWithEmailAndPassword }

}