import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import {
  About,
  Contact,
  DownloadImages,
  Home,
  ImageInfo,
  LikedImages,
  Login,
  Register,
  UserPage,
} from "./Pages";
import MainLayout from './Layout/MainLayout'

//actions
import { action as HomeAction } from "./Pages/Home";
import { action as RegisterAction } from "./Pages/Register";
import { action as LoginAction } from "./Pages/Login";

//components
import { ProtectedRotet } from "./Components";

//react 
import { useEffect } from 'react';

import { auth } from './firebase/useFireBaseConfig'
import { onAuthStateChanged } from "firebase/auth";

//context
import { useGlobalContext } from './Hooks/useGlobalContext';
import { toast } from 'react-toastify';

function App() {
  const { dispatch, alreadyAuth } = useGlobalContext()
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRotet>
          <MainLayout />
        </ProtectedRotet>
      ),
      children: [
        {
          index: true,
          element: <Home />,
          action: HomeAction,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/likedImages",
          element: <LikedImages />,
        },
        {
          path: "/userpage/:id",
          element: <UserPage />,
        },
        {
          path: "/downloadImages",
          element: <DownloadImages />,
        },
        {
          path: "/imageInfo/:id",
          element: <ImageInfo />,
        },
      ],
    },

    {
      path: "/login",
      element: (
        <ProtectedRotet redirectIfLoggedIn>
          <Login />
        </ProtectedRotet>
      ),
      action : LoginAction,
    },
    {
      path: "/register",
      element: (
        <ProtectedRotet redirectIfLoggedIn>
          <Register />
        </ProtectedRotet>
      ),

      action: RegisterAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user })
      dispatch({ type: "AUTH_READY" })
    });
  }, [])
  return <>
    {alreadyAuth && <RouterProvider router={router} />}
  </>

}

export default App
