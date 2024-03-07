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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/sign",
    element: (
      <>
        <Navbar />
        <Signup />
      </>
    ),
  },
  {
    path: "/categories",
    element: (
      <>
        <Navbar />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
         <NotFound/>
      </>
    ),
  },
]);

export default router;
