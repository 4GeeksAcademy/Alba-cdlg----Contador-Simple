import React from "react";
import ReactDOM from "react-dom";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./components/icons.js";


// index.css'
import "../styles/index.css";

// components
import Home from "./components/Home";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
