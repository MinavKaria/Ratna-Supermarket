 
import './App.css';
import {createBrowserRouter,RouterProvider,Route,Link } from "react-router-dom";
import router from './configs/route';

function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
