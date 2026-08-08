import { createBrowserRouter } from "react-router-dom";
import Home from "./App.jsx";
import ProductDetailsPage from "../features/products/pages/ProductDetailsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/products/:slug",
    element: <ProductDetailsPage />,
  },
]);

export default router;
