//fire base imports
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../firebase/useFireBaseConfig'

//react import 
import { useEffect, useState } from "react";


export const useCollection = (collectionName) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        onSnapshot(collection(db, collectionName), (querySnapshot) => {
            const queryData = []
            querySnapshot.forEach((doc) => {
                queryData.push({ _id: doc.id, ...doc.data() })
            });
            setData(queryData)
        });
    }, [])
    return { data };
}