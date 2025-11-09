import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

// فقط Layout و Home را مستقیم import می‌کنیم
import AppLayout from "./components/ui/AppLayout.jsx";
import Home from "./pages/Home.jsx";

// بقیه صفحات را lazy load می‌کنیم
const About = lazy(() => import("./pages/About.jsx"));
const Shop = lazy(() => import("./pages/Shop.jsx"));
const Account = lazy(() => import("./pages/Account.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"));
const Checkout = lazy(() => import("./pages/Checkout.jsx"));
const SingleProduct = lazy(() => import("./pages/SingleProduct.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));

// کامپوننت Loading
const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace to="/home" /> },
      { path: "home", element: <Home /> },
      {
        path: "about",
        element: (
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
        )
      },
      {
        path: "shop",
        element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Shop />
            </Suspense>
        )
      },
      {
        path: "pages/contact",
        element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
        )
      },
      {
        path: "pages/blog",
        element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Blog />
            </Suspense>
        )
      },
      {
        path: "account",
        element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Account />
            </Suspense>
        )
      },
      {
        path: "cart",
        element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Cart />
            </Suspense>
        )
      },
      {
        path: "checkout",
        element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Checkout />
            </Suspense>
        )
      },
      {
        path: "singleProduct/:productId",
        element: (
            <Suspense fallback={<LoadingSpinner />}>
              <SingleProduct />
            </Suspense>
        )
      },
      {
        path: "*",
        element: (
            <Suspense fallback={<LoadingSpinner />}>
              <PageNotFound />
            </Suspense>
        )
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" reverseOrder={false} />
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  );
};

export default App;