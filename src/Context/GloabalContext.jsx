import { createContext, useEffect, useReducer } from "react";


export const GlobalContext = createContext()

const dataFromLocal = () => {
    return JSON.parse(localStorage.getItem("data-my-unsplash")) || {
        likedImages: []
    }
}

const changesate = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_LIKED_IMAGE":
            return { ...state, likedImages: [...state.likedImages, payload] }
        case "UNLIKE":
            return {
                ...state,
                likedImages: state.likedImages.filter((image) => image.id != payload)
            }
        default:
            return state
    }
}

export function GlobalContextProvider({ children }) {

    const [state, dispatch] = useReducer(changesate, dataFromLocal())

    // console.log(state)
    useEffect(() => {
        return localStorage.setItem("data-my-unsplash", JSON.stringify(state))
    }, [state])

    return <GlobalContext.Provider value={{ ...state, dispatch }}>

        {children}
    </GlobalContext.Provider>
}