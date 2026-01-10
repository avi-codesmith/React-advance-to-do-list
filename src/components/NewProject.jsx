import Input from "./Input.jsx";

export default function NewProject({ handleOpenform }) {
  return (
    <div className="NewProject">
      <menu>
        <button className="btn hover" onClick={handleOpenform}>
          Cancel
        </button>
        <button className="btn hover btn-fill">Save</button>
      </menu>
      <div>
        <p>
          <Input label="Title" type="text" />
        </p>
        <p>
          <Input label="Description" textArea />
        </p>
        <p>
          <Input label="Due Date" type="date" />
        </p>
      </div>
    </div>
  );
}
