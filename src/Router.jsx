import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { About, Contact, Home, LikedImages } from "./Pages";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
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
                path:"/likedImages",
                element: <LikedImages/>
            }
        ]
    }
])

export default router