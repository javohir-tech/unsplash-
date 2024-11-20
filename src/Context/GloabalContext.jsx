import { createContext, useReducer } from "react";


export const GlobalContext = createContext()

const changesate = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_LIKED_IMAGE":
            return { ...state, likedImages: [...state.likedImages, payload] }
        default:
            return state
    }
}

export function GlobalContextProvider({ children }) {

    const [state, dispatch] = useReducer(changesate, {
        likedImages: []
    })

    console.log(state)

    return <GlobalContext.Provider value={{ ...state, dispatch }}>
        {children}
    </GlobalContext.Provider>
}