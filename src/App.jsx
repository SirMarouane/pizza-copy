import * as React from "react";
import './index.css';
import Home from "./components/Home.jsx";
import Card from "./components/Card.jsx";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  
    {
      path: "/pizza/:id",
      element: <Card/>,
    },
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}
