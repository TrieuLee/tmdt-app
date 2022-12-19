import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { AuthContextProvider } from "./context/AuthContext";
import { ForgetContextProvider } from "./context/ForgetContext";

import { Provider } from "react-redux";
import { store } from "./context/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthContextProvider>
        <ForgetContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ForgetContextProvider>
      </AuthContextProvider>
    </HelmetProvider>
  </React.StrictMode>
);
