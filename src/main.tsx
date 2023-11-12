import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "@src/App";
import Colections from "@src/pages/collecitons";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./styles";
import { CartProvider } from "./data/contexts/cartContext";
import HomePage from "./pages/home";
import { MediaQueriesProvider } from "./data/contexts/mediaQueries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/collections",
        element: <Colections />
      },
      {
        path: "/",
        element: <HomePage />
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <CartProvider>
        <MediaQueriesProvider>
          <RouterProvider router={router} />
        </MediaQueriesProvider>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
