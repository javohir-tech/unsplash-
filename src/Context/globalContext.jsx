import { createContext, useMemo, useReducer } from "react";

export const GlobalContext = createContext()

const changeState = (state, action) => {
    const { payload, type } = action

    switch (type) {
        case "ADD_IMAGES":
            return { ...state, images: [...state.images, ...payload] }
        case "ADD_LIKE_IMAGES":
            return { ...state, likedImages: [...state.likedImages, payload] }
        default:
            return state
    }
}


export function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer(changeState, {
        images: [],
        likedImages: []
    })

    // console.log(state);

    const contextValue = useMemo(() => ({ ...state, dispatch }), [state, dispatch]);

    return (<GlobalContext.Provider value={contextValue} >
        {children}
    </GlobalContext.Provider>
    )
}