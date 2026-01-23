export default function SideBar({
  handleOpenform,
  projects,
  selectProject,
  // selectProjectID,
}) {
  return (
    <aside>
      <h2>Your Projects</h2>
      <div>
        <button className="regular-btn" onClick={handleOpenform}>
          + Add Project
        </button>
      </div>
      <ul>
        {projects.map((project) => {
          // let cssClass;
          // if (project.id === selectProjectID) {
          //   cssClass = "hover";
          // } else {
          //   cssClass = "";
          // }
          return (
            <li key={project.id}>
              <button
                className="hover"
                onClick={() => selectProject(project.id)}
              >
                <p>{project.title}</p>
                <img src="go.svg" alt="Title img" />
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
