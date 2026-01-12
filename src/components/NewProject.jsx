import ErrorModal from "../components/ErrorModal";
import Input from "./Input.jsx";
import { useRef } from "react";

export default function NewProject({ handleAddProject, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const EnteredTitle = title.current.value;
    const EnteredDescription = description.current.value;
    const EnteredDueDate = dueDate.current.value;

    if (
      EnteredTitle.trim() === "" ||
      EnteredDescription.trim() === "" ||
      EnteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    handleAddProject({
      title: EnteredTitle,
      description: EnteredDescription,
      dueDate: EnteredDueDate,
    });
  }

  return (
    <>
      <ErrorModal ref={modal}>
        <h1>Invalid Input!</h1>
        <p>Please make sure you provided a valid value for every input</p>
      </ErrorModal>
      <div className="NewProject">
        <menu>
          <button className="btn hover" onClick={onCancel}>
            Cancel
          </button>
          <button onClick={handleSave} className="btn hover btn-fill">
            Save
          </button>
        </menu>
        <div>
          <p>
            <Input ref={title} label="Title" type="text" />
          </p>
          <p>
            <Input ref={description} label="Description" textArea />
          </p>
          <p>
            <Input ref={dueDate} label="Due Date" type="date" />
          </p>
        </div>
      </div>
    </>
  );
}
