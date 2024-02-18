import Layout from "../pages/Layout";
import Home from "../pages/Home";
import {createBrowserRouter,RouterProvider,Route,Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar/>
          
        </>
      )
    },{
      path:"/sign",
      element:(
        <>
          <Signup/>
        </>
      )
    }
]);

export default router;