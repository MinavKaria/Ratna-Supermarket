import Layout from "../pages/Layout";
import Home from "../pages/Home";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Signup from "../pages/Signup";
import TopCategoriesHead from "../components/TopCategoriesHead";
import TopCategoriesList from "../components/TopCategoriesList";
import NotFound from "../components/NotFound";
import CategoryList from "../components/CategoryList";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Tracking from "../components/Tracking";
import Vendor from "../pages/Vendor";
import Orders from "../pages/Orders";
import ProductPage from "../pages/ProductPage";
import VendorOrders from "../pages/VendorOrders";
import VendorProducts from "../pages/VendorProducts";
import Feedback from "../pages/Feedback";
import VendorFeedback from "../pages/VendorFeedback";

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <Signup /> },
      { path: "/categories/:categoryName", element: <CategoryList /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/tracking/:id", element: <Tracking /> },
      { path: "/orders", element: <Orders /> },
      { path: "/vendor", element: <Vendor /> },
      { path: "/product/:id", element: <ProductPage /> },
      { path: "/vendor/orders", element: <VendorOrders /> },
      { path: "/vendor/products", element: <VendorProducts /> },
      { path: "/feedback/:id", element: <Feedback /> },
      { path: "/vendor/feedback", element: <VendorFeedback /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
