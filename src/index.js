import React from "react";
<<<<<<< HEAD
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
=======
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 0693b64e0b7091181a3a8abd09e5350344012238
);
