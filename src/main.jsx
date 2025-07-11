// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";  
import { BrowserRouter } from "react-router-dom";  // ← note the “/client” import
import App from "./App.jsx";
import "./index.css";

const container = document.getElementById("root");

// createRoot replaces ReactDOM.render
ReactDOM
  .createRoot(container)
  .render(
    <React.StrictMode>
      <BrowserRouter basename="/demo">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
