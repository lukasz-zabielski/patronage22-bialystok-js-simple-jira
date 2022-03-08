import { useState } from "react";
import { Routes, Route, useParams, Navigate, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/mainTheme";
import { Home } from "./views/Home/Home";
import { Projects } from "./views/Projects/Projects";
import { Board } from "./views/Board/Board";
import Navbar from "./components/Navbar/Navbar";
import { Owl_components } from "./views/Owl/Owl";
import {
  toProject,
  toHome,
  toIssue,
  toBoard,
  toProjects,
} from "./views/routes";

const Boards = () => {
  const { projectID } = useParams();

  return (
    <div style={{ marginTop: 100 }}>
      <h1>Project/Boards list</h1>
      {!!projectID && (
        <>
          <p>Project: {projectID}</p>
          <Link to={toProjects}>Go back to Projects</Link>
          <Link style={{ margin: 5 }} to={toBoard({ projectID, boardID: "2" })}>
            Go to Board 2
          </Link>
        </>
      )}
    </div>
  );
};

const Issue = () => {
  const { projectID, boardID, issueID } = useParams();

  return (
    <div style={{ marginTop: 100 }}>
      <h1>Issue page</h1>
      {!!projectID && !!boardID && !!issueID && (
        <>
          <p>Project: {projectID}</p>
          <p>Board: {boardID}</p>
          <p>Issue: {issueID}</p>
        </>
      )}
    </div>
  );
};

const App = () => {
  const [token, setToken] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {!token ? (
        <Owl_components
        // setToken={setToken}
        />
      ) : (
        <Routes>
          <Route path={toHome} element={<Home />} />
          <Route path={toProjects} element={<Projects />} />
          <Route path={toProject()} element={<Boards />} />
          <Route path={toBoard()} element={<Board />} />
          <Route path={toIssue()} element={<Issue />} />
          <Route path='*' element={<Navigate to={toProjects} />} />
        </Routes>
      )}
    </ThemeProvider>
  );
};

export default App;
