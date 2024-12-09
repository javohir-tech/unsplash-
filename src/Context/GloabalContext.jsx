import { createContext, useEffect, useReducer } from "react";
import { useCollection } from "../Hooks/useCollection";

export const GlobalContext = createContext();

const changesate = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_LIKED_IMAGE":
      return { ...state, likedImages: payload };
    case "DOWNLOAD":
      return { ...state, downloadImages: [...state.downloadImages, payload] };
    case "LOGIN":
      return { ...state, user: payload };
    case "UNLOGIN":
      return { ...state, user: null }
    case "AUTH_READY":
      return { ...state, alreadyAuth: true }
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const { data: likedImages } = useCollection("likedImages")
  const [state, dispatch] = useReducer(changesate, {
    likedImages: [],
    downloadImages: [],
    user: null,
    alreadyAuth: false
  });

  // console.log(state)

  useEffect(() => {
    if (likedImages) {
      dispatch({ type: "ADD_LIKED_IMAGE", payload: likedImages })
    }
  }, [likedImages]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
