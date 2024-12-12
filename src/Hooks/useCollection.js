//fire base imports
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../firebase/useFireBaseConfig'

//react import 
import { useEffect, useState } from "react";


export const useCollection = (collectionName, whereData) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        if (whereData) {
            const q = query(collection(db, collectionName), where(...whereData));
            onSnapshot(q, (querySnapshot) => {
                const queryData = []
                querySnapshot.forEach((doc) => {
                    queryData.push({ _id: doc.id, ...doc.data() })
                });
                setData(queryData)
            });
        }
    }, [whereData[2]])
    return { data };
}