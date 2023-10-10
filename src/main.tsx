import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home/index.tsx";
import Colections from "@/pages/collecitons/index.tsx";
import App from "@/App";

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
