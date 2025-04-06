import React from "react";
import Home from "./pages/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResumeFormPage from "./pages/Resume/ResumeFormPage.jsx";
import Root from "./pages/Root/Root.jsx";
import { CssBaseline } from "@mui/material";
import ModeContextProvider from "./context/ModeContext/ModeContextProvider.jsx";
import PaletteContextProvider from "./context/PaletteContext/PaletteContextProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "resume", element: <ResumeFormPage /> },
    ],
  },
]);
const App = () => {
  return (
    <ModeContextProvider>
      <CssBaseline />
      <PaletteContextProvider>
        <RouterProvider router={router} />
      </PaletteContextProvider>
    </ModeContextProvider>
  );
};

export default App;
