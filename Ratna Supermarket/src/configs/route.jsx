import Layout from "../pages/Layout";
import Home from "../pages/Home";
import {createBrowserRouter,RouterProvider,Route,Link } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
]);

export default router;