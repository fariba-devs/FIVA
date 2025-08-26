import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Account from "./pages/Account.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Cart from "./pages/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace to="/home" /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "shop", element: <Shop /> },
      // زیرمنوهای Pages
      { path: "pages/contact", element: <Contact /> },
      { path: "pages/blog", element: <Blog /> },
      { path: "account", element: <Account /> },
      { path: "cart", element: <Cart /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
