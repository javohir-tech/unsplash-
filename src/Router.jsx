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

const user = false;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRotet user={user}>
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
    element: user ? <Navigate to="/" /> : <Login />,
  },
  {
    path: "/register",
    element: user ? <Navigate to="/" /> : <Register />,
    action: RegisterAction,
  },
]);

export default router;
