import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "@src/App";
import HomePage from "@src/pages/home";
import Colections from "@src/pages/collecitons";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<Colections />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
