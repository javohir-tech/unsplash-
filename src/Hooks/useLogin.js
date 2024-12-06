import { auth } from '../firebase/useFireBaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';

//custom hooks
import { useGlobalContext } from './useGlobalContext';
import { toast } from 'react-toastify';


export const useLogin = () => {
    const { dispatch } = useGlobalContext()
    const loginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user })
                toast.success("WELCOME BITCH")
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }
    return { loginWithEmail }
}