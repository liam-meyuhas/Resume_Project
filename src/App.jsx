import React from "react";
import Home from "./pages/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResumeFormPage from "./pages/Resume/ResumeFormPage.jsx";
import Root from "./pages/Root/Root.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = () =>
  createTheme({
    direction: "rtl",
  });
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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
