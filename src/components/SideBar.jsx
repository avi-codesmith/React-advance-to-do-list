export default function SideBar({ handleOpenform, projects }) {
  return (
    <aside>
      <h2>Your Projects</h2>
      <div>
        <button className="regular-btn" onClick={handleOpenform}>
          + Add Project
        </button>
      </div>
      <ul>
        <li>
          {projects.map((project) => (
            <li key={project.id}>
              <button className="hover">
                <p>{project.title}</p>
                <img src="go.svg" />
              </button>
            </li>
          ))}
        </li>
      </ul>
    </aside>
  );
}
