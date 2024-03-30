import Layout from "../pages/Layout";
import Home from "../pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Signup from "../pages/Signup";
import TopCategoriesHead from "../components/TopCategoriesHead";
import TopCategoriesList from "../components/TopCategoriesList";
import NotFound from "../components/NotFound";
import CategoryList from "../components/CategoryList";
import Cart from "../pages/Cart";
import Checkout from "../components/Checkout";
import Tracking from "../components/Tracking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
       
            <Home />
     
          </>
        ),
      },
      {
        path: "/sign",
        element: (
          <>
            <Signup />
          </>
        ),
      },
      {
        path: "/categories/:categoryName",
        element: (
          <>
            <CategoryList/>
          </>
        )
      },{
        path: "/cart",
        element: (
          <>
            
            <Cart />
            
          </>
        ),
      },{
        path: "/checkout",
        element: (
          <>
          
            <Checkout/>
            
          </>
        ),
      },
      {
        path:'/tracking',
        element: (
          <>
     
            <div className="">
              <Tracking/>
            </div>
         
          </>
        )
      },
      {
        path: "*",
        element: (
          <>
             <NotFound/>
          </>
        ),
      },
    ],
  },


]);

export default router;
