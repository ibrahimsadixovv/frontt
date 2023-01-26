import {
    createBrowserRouter,
  } from "react-router-dom";
import Add from "../Pages/Add";
import App from "../Pages/App";
import Detail from "../Pages/Detail";
  const router = createBrowserRouter([
    {
      path: "/details/:id",
      element: <Detail/>,
    },
    {
        path: "/",
        element: <App/>,
      },
      {
        path: "/Add",
        element: <Add/>,
      },
  ]);
  export default router
