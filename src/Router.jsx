import { createBrowserRouter } from "react-router-dom";


//pages
import App from "./App";
import { About, Contact, DownloadImages, Home, LikedImages, UserPage } from "./Pages";

//actions 
import { action as HomeAction } from "./Pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
                action: HomeAction
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/likedImages",
                element: <LikedImages />
            },
            {
                path: "/userpage/:id",
                element: <UserPage />
            },
            {
                path:"/downloadImages",
                element:<DownloadImages/>
            }
        ]
    }
])

export default router