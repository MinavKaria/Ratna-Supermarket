import Layout from "../pages/Layout";
import Home from "../pages/Home";
import {createBrowserRouter,RouterProvider,Route,Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Signup from "../pages/Signup";
import TopCategoriesHead from "../components/TopCategoriesHead";
import TopCategoriesList from "../components/TopCategoriesList";

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar/>
          <Home/>
        </>
      )
    },{
      path:"/sign",
      element:(
        <>
          <Navbar/>
          <Signup/>
        </>
      )
    }
]);

export default router;