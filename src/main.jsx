import { createRoot } from 'react-dom/client'
import './index.css'

// react router dom
import { RouterProvider } from 'react-router-dom'

//router
import router from './Router.jsx'

//react toast 
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(

  <>
    <RouterProvider router={router} />
  </>

)
