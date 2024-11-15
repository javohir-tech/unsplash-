import { createContext, useReducer } from "react";

export const GlobalContext = createContext()

const changeState = (state, action) => {
    const { payload, type } = action

    switch (type) {
        case "ADD_IMAGES":
            return { ...state, images: [...state.images, ...payload] }
    }
}


export function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer(changeState, {
        images: [],
        likedImages: []
    })

    // console.log(state);

    return (<GlobalContext.Provider value={{ ...state, dispatch }} >
        {children}
    </GlobalContext.Provider>
    )
}