//firebase
import { auth } from '../firebase/useFireBaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';

//toast
import { toast } from "react-toastify";

//custom hooks
import { useGlobalContext } from "./useGlobalContext";

export const useLogin = () => {
    const { dispatch } = useGlobalContext()
    const loginWithGoogle = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                dispatch({ type: "LOGIN", payload: user })
                toast.success("Welcome")
            })
            .catch((error) => {
                toast.error(error.message)
            });
    }
    return { loginWithGoogle }
}