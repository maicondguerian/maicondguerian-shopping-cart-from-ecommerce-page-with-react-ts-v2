import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "@src/App";
import Colections from "@src/pages/collecitons";
import { CartProvider } from "./data/contexts/cartContext";
// import HomePage from "./pages/home";
import { MediaQueriesProvider } from "@src/data/contexts/mediaQueries";
import { ThemeProvider } from "./data/contexts/themeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Colections />
      },
      {
        path: "/collections",
        element: <Colections />
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <MediaQueriesProvider>
          <RouterProvider router={router} />
        </MediaQueriesProvider>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
