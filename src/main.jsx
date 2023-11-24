import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import AuthProvider from "@/store/contexts/authContext";
import ComponentProvider from "@/store/contexts/componentContext.jsx";
import MessagesProvider from "@/store/contexts/messagesContext";
import ThemeProvider from "@/store/contexts/themeContext";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MessagesProvider>
          <ThemeProvider>
            <ComponentProvider>
              <App />
            </ComponentProvider>
          </ThemeProvider>
        </MessagesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
