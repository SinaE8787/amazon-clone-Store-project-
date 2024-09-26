import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GetProducts from "./context/GetProducts.jsx";

createRoot(document.getElementById("root")).render(
  <GetProducts>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GetProducts>
);
