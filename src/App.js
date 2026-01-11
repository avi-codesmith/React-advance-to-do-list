import { useState } from "react";
import "./index.css";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";

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

  function handleSelectProject(id) {
    setprojectsState((prev) => {
      return {
        ...prev,
        setSelectedProjectId: id,
      };
    });
  }

  function handleDleteProject() {
    setprojectsState((prev) => {
      return {
        ...prev,
        setSelectedProjectId: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.setSelectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.setSelectedProjectId
  );

  let content = (
    <SelectedProject project={selectedProject} onDel={handleDleteProject} />
  );

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
        selectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
