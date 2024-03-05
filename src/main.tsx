import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Global from "./components/Wrappers/Global";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <Global>
      <App />
    </Global>
  </React.StrictMode>,
);
