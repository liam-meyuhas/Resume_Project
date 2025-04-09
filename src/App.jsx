import React from "react";
import Home from "./pages/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResumeFormPage from "./pages/Resume/ResumeFormPage.jsx";
import Root from "./pages/Root/Root.jsx";
import { CssBaseline } from "@mui/material";
import ModeContextProvider from "./context/ModeContext/ModeContextProvider.jsx";
import PaletteContextProvider from "./context/PaletteContext/PaletteContextProvider.jsx";
import SelectedTemplate from "./pages/SelectedTemplate/SelectedTemplate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "resume", element: <ResumeFormPage /> },
      { path: "templates", element: <SelectedTemplate /> },
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
