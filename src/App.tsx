import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/mainTheme";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { SecondPage } from "./views/SecondPage/SecondPage";
import { Projects } from "./views/Projects/Projects";

import Navbar from "./components/Navbar/Navbar";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='second' element={<SecondPage />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </ThemeProvider>
  </>
);

export default App;
