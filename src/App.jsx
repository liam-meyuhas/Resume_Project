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
// import React from "react";
// import { Box, Typography, TextField } from "@mui/material"; // הוספת הייבוא הנכון
// import { formFields } from "./pages/Resume/categoryTypes/formsFields";
// import Checkbox from "@mui/material/Checkbox";
// import "./pages/Resume/categories/categories.css";
// const App = () => {
//   return (
//     <Box>
//       {formFields.map((category) => (
//         <Box key={category.title} className="boxForm">
//           <Typography variant="h6">{category.title}</Typography>{" "}
//           {category.fields.map((field) => (
//             <Box key={field.label} className="formFiledColumn">
//               <Typography>{field.name}</Typography>
//               {field.type === "checkbox" ? (
//                 <Checkbox inputProps={{ "aria-label": "controlled" }} />
//               ) : (
//                 <TextField sx={{ width: "50%" }} type={field.type} />
//               )}
//             </Box>
//           ))}
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default App;
