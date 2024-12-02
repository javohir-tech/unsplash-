import { createRoot } from 'react-dom/client'
import './index.css'

// react router dom
import { RouterProvider } from 'react-router-dom'

//router
import router from './Router.jsx'

//react toast 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//context
import { GlobalContextProvider } from './Context/GloabalContext.jsx';

createRoot(document.getElementById('root')).render(

  <>
    <GlobalContextProvider>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" />
    </GlobalContextProvider>

  </>

)
