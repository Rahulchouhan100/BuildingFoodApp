import React from "react";
import ReactDom from "react-dom/client";
import Body from "./src/Component/Body/Body";
import Footer from "./src/Component/Footer/Footer";
import Header from "./src/Component/Header/Header";
import About from "./src/component/AboutUs/About";
import Error from "./src/Component/Error Page/Error";
import Contact from "./src/Component/Contact/Contact";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./src/Component/RestMenu/RestaurantMenu";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default App;
