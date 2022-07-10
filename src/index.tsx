import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ReactModal from "react-modal";
import { AppProvider } from "./providers/app/app.provider";
import ErrorBoundary from "./ui/error-boundary/error-boundary.component";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ErrorBoundary>{[<App key="App" />]}</ErrorBoundary>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

ReactModal.setAppElement("#root");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
