import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StepperContextProvider from "./context/stepper/StepperContextProvider.jsx";
import FormContextProvider from "./context/form/FormContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormContextProvider>
      <StepperContextProvider>
        <App />
      </StepperContextProvider>
    </FormContextProvider>
  </React.StrictMode>
);
