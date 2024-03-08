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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
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
    path: "/categories/:categoryName",
    element: (
      <>
        <CategoryList/>
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
]);

export default router;
