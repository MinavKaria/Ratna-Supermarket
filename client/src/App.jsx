 
import './App.css';
import "@fontsource/poppins/400.css";
import {createBrowserRouter,RouterProvider,Route,Link } from "react-router-dom";
import router from './configs/route';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  
  return (
    <>
      <GoogleOAuthProvider clientId="1024591027781-7a07fpb7aflgaoqc8tgv9qsrd8ka8tdc.apps.googleusercontent.com">
        <RouterProvider router={router}/>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
