import { createRoot } from 'react-dom/client'
import './index.css'

// react router dom
import { RouterProvider } from 'react-router-dom'

//router
import router from './Router.jsx'

//react toast 
import { ToastContainer } from 'react-toastify';

//context
import { GlobalContextProvider } from './Context/GloabalContext.jsx';

createRoot(document.getElementById('root')).render(

  <>
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>

  </>

)
