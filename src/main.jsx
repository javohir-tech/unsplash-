import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// react router dom
import { RouterProvider } from 'react-router-dom'

//router
import router from './Router.jsx'
import { GlobalContextProvider } from './Context/globalContext.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <RouterProvider router={router} />
  </GlobalContextProvider>


)
