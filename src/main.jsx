

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./context/ContextProvider";
registerLicense(
"ORg4AjUWIQA/Gnt2VlhiQlVPd0BDWXxLflFyVWJTelh6dVRWACFaRnZdQVxhSHlTc0FmWHdbdnNQ"
  );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);