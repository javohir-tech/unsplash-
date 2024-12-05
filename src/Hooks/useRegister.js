// google firebase
import { auth } from '../firebase/useFireBaseConfig'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
    return { singUpWithGoogle }
    
}