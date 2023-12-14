import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import "./index.css";
import Main from "./lauout/Main";
import Home from "./component/Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;