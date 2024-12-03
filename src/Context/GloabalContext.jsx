import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

// const dataFromLocal = () => {
//   return (
//     JSON.parse(localStorage.getItem("data-my-unsplash")) || {
//       likedImages: [],
//       downloadImages: [],
//       userData: [],
//     }
//   );
// };

const changesate = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_LIKED_IMAGE":
      return { ...state, likedImages: [...state.likedImages, payload] };
    case "UNLIKE":
      return {
        ...state,
        likedImages: state.likedImages.filter((image) => image.id != payload),
      };
    case "DOWNLOAD":
      return { ...state, downloadImages: [...state.downloadImages, payload] };
    case "LOGIN":
      return { ...state, user: payload };
      case "UNLOGIN": 
      return {...state, user:null}
    case "AUTH_READY":
      return { ...state, alreadyAuth: true }
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changesate, {
    likedImages: [],
    downloadImages: [],
    user: null,
    alreadyAuth: false
  });

  console.log(state)
  useEffect(() => {
    return localStorage.setItem("data-my-unsplash", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
