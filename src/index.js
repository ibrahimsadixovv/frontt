import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from "./Routes"
import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
);