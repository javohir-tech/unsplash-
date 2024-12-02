import { createBrowserRouter, Navigate } from "react-router-dom";

//pages
import App from "./App";
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

//actions
import { action as HomeAction } from "./Pages/Home";
import { action as RegisterAction } from "./Pages/Register";

//components
import { ProtectedRotet } from "./Components";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRotet>
        <App />
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
    element:(
      <ProtectedRotet redirectIfLoggedIn>
        <Login/>
      </ProtectedRotet>
    )
  },
  {
    path: "/register",
    element: (
      <ProtectedRotet redirectIfLoggedIn>
        <Register/>
      </ProtectedRotet>
    ),
    action: RegisterAction,
  },
]);

export default router;
