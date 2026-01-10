export default function NoProject({ handleOpenform }) {
  return (
    <div className="flexbox noProject">
      <img alt="No project icon" src="notepad.svg" />
      <p>No Project Selected</p>
      <p className="sm-reg">
        Select an existing project to continue your work, or start a brand-new
        project and bring your next idea to life.
      </p>
      <button onClick={handleOpenform} className="regular-btn">
        Create an Project
      </button>
    </div>
  );
}
