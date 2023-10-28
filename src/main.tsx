import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "@src/App";
import HomePage from "@src/pages/home";
import Colections from "@src/pages/collecitons";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./styles";
import { ItemContextProvider2 } from "./data/contexts/use-item-quantity";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={LightTheme}>
        <ItemContextProvider2>
          <App />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections" element={<Colections />} />
          </Routes>
        </ItemContextProvider2>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
