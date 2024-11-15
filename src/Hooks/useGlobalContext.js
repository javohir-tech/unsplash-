import { useContext } from "react";
import { GlobalContext } from "../Context/globalContext";


export function UseGlobalContext() {
    const context = useContext(GlobalContext)

    if(!context){
        throw new Error("UseGlobalContext GlobalContext ichida bo'lishi kerak ")
    }

    return context
}