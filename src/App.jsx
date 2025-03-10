import React from "react";
import HomePage from "./components/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Resume from "./components/Resume";
import Root from "./pages/Root";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "resume", element: <Resume /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
