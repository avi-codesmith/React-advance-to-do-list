import Task from "./Task";

export default function SelectedProject({
  project,
  onDel,
  onAddTask,
  tasks,
  onDelete,
}) {
  const formattedDate = new Date(project.dueDate)
    .toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .toUpperCase();

  return (
    <section className="project-details">
      <header className="project-header">
        <div className="project-header-top">
          <h1 className="project-title">
            ● {project.title.toLocaleUpperCase()}
          </h1>
          <button className="btn-delete" onClick={onDel}>
            Delete
          </button>
        </div>

        <p className="project-description">{project.description}</p>
        <p className="project-date">- {formattedDate}</p>
      </header>
      <Task onAdd={onAddTask} tasks={tasks} onDelete={onDelete} />
    </section>
  );
}
