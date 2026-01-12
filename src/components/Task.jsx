import { useState } from "react";

export default function Task({ onAdd, onDelete, tasks }) {
  const [enteredText, setEnteredText] = useState("");

  function handleChange(e) {
    setEnteredText(e.target.value);
  }

  return (
    <section>
      <div>
        <h5>Your Tasks</h5>
        <div className="task-header">
          <input type="input" onChange={handleChange} value={enteredText} />
          <button
            onClick={() => {
              if (!enteredText || enteredText.trim() === "") return;
              onAdd(enteredText.trim());
              setEnteredText("");
            }}
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="task-div">
        {tasks.length === 0 && (
          <p className="info">You dont have any tasks in this project.</p>
        )}
        {tasks.length > 0 &&
          tasks.map((task) => (
            <div key={task.id}>
              <p className="task-p">{task.text}</p>
              <button
                className="task-btn hover"
                onClick={() => onDelete(task.id)}
              >
                ×
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}
