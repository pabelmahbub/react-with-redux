import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../page/Login";
import Home from "../page/Home";
import App from "../App";
import NotFound from "../page/NotFound";
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <NotFound />,
    },

  ]);

  export default routes;