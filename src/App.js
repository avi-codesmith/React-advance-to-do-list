import { useState } from "react";
import "./index.css";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";

function App() {
  const [projectsState, setprojectsState] = useState({
    setSelectedProjectId: undefined,
    projects: [],
  });

  function handleOpenProject() {
    setprojectsState((prevState) => {
      return {
        ...prevState,
        setSelectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setprojectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        setSelectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;

  if (projectsState.setSelectedProjectId === null) {
    content = <NewProject handleAddProject={handleAddProject} />;
  } else if (projectsState.setSelectedProjectId === undefined) {
    content = <NoProject handleOpenform={handleOpenProject} />;
  }

  return (
    <main>
      <SideBar
        handleOpenform={handleOpenProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
