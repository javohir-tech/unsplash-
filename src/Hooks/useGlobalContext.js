import { useContext } from "react";
import { GlobalContext } from "../Context/GloabalContext";

export function useGlobalContext() {
    const context = useContext(GlobalContext)

    if (!context) {
        throw new Error('useGlobal Context  GlobalContext ichida bolishi kerak ')
    }

    return context
}

