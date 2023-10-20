import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import { PrimeReactProvider } from "primereact/api";

const value = {
  appendTo: "self",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider value={value}>
        <App />
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>
);
