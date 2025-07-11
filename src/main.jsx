// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";  
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const container = document.getElementById("root");

// createRoot replaces ReactDOM.render
ReactDOM
  .createRoot(container)
  .render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
