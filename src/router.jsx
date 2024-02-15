import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Gallery from "./pages/gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/*",
        element: (
          <h1 className="my-8 text-center text-4xl text-slate-500 ">
            Not Found
          </h1>
        ),
      },
    ],
  },
]);

export default router;
