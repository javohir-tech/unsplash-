import { createRoot } from 'react-dom/client'
import './index.css'

//react toast 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//context
import { GlobalContextProvider } from './Context/GloabalContext.jsx';

//app
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <>
    <GlobalContextProvider>
      <App />
      <ToastContainer position="bottom-right" />
    </GlobalContextProvider>
  </>

)
