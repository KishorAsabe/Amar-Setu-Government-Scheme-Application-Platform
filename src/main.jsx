import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { SchemaProvider } from "./context/SchemaContext"; // Import SchemaProvider

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SchemaProvider> {/* Wrap your app with SchemaProvider */}
          <App />
        </SchemaProvider>
        <Toaster />
      </BrowserRouter>
    </Provider>
  //{/* </React.StrictMode> */}
);
