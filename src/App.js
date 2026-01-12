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
    tasks: [],
  });

  function handleAddTask(enteredText) {
    setprojectsState((prevState) => {
      const newTask = {
        text: enteredText,
        projectId: prevState.setSelectedProjectId,
        id: Math.random(),
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDelTask(id) {
    setprojectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== id),
      };
    });
  }

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

  function handleCancel() {
    setprojectsState((prev) => {
      return {
        ...prev,
        setSelectedProjectId: undefined,
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.setSelectedProjectId
  );

  const selectedProjectTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.setSelectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDel={handleDleteProject}
      onAddTask={handleAddTask}
      tasks={selectedProjectTasks}
      onDelete={handleDelTask}
    />
  );

  if (projectsState.setSelectedProjectId === null) {
    content = (
      <NewProject handleAddProject={handleAddProject} onCancel={handleCancel} />
    );
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
