import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./context/provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>
);
