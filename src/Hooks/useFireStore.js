//fireBase import 
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/useFireBaseConfig";

//toast
import { toast } from "react-toastify";


export const useFireStore = () => {
    const addDocuments = (collectionName, id, data) => {
        setDoc(doc(db, collectionName, id), data)
            .then(() => {
                toast.success("You liked this image ❤️")
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }

    const deleteDocument = (collectionName, id) => {
        deleteDoc(doc(db, collectionName, id))
            .then(() => {
                toast.success("You deleted this image 🗑️")
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }

    return { addDocuments, deleteDocument }
}