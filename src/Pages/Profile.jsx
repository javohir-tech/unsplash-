//global context
import { useGlobalContext } from "../Hooks/useGlobalContext"

//firebase
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase/useFireBaseConfig";
import { toast } from "react-toastify";

export default function Profile() {
    const { user } = useGlobalContext()
    // console.log(user);

    const SendEmailVerifaid = () => {
        if (auth.currentUser) {
            sendEmailVerification(auth.currentUser, 
                {url: "http://localhost:5173/profile"}
            )
                .then(() => {
                    toast.success("Email verification sent!");
                })
                .catch((error) => {
                    toast.error("Failed to send verification email: " + error.message);
                });
        }
    }

    return (
        <div className="container">
            <div className="flex my-5 gap-5">
                <div>
                    <img src={user.photoURL} className="w-40 h-40 rounded-full" alt="" />
                </div>
                <div className="grow bg-base-200 rounded-lg p-5 grid grid-cols-2 gap-3">
                    <h2>
                        <span className="font-bold">Display Name</span><br />
                        <span>{user.displayName}</span>
                    </h2>
                    <h2>
                        <span className="font-bold">Display Name</span><br />
                        <span>{user.emailVerified ? "Email Verifaded ✅" : <span className="flex gap-2 items-center">
                            <span>Email is Not Verifaded</span>
                            <span><button onClick={SendEmailVerifaid} className="btn btn-xs btn-primary">Send</button></span>
                        </span>}</span>
                    </h2>
                    <h2>
                        <span className="font-bold">Display Name</span><br />
                        <span>{user.email}</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}
