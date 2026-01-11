import { useState, useRef } from "react";

export default function Task() {
  const [addTasks, setAddTasks] = useState([]);

  const input = useRef("");

  function HandleAddTask(e) {
    e.preventDefault();

    setAddTasks((prev) => [
      ...prev,
      {
        id: Math.random(),
        text: input.current.value,
      },
    ]);
  }
  // input.current.value = "";

  return (
    <>
      <div>
        <h1>Task</h1>
        <form>
          <input ref={input} type="input" required />
          <button onClick={HandleAddTask}>Add Task</button>
        </form>
      </div>
      <div className="task-div">
        {addTasks.map((task) => (
          <>
            <p className="task-p" key={task.id}>
              {task.text}
            </p>
            <button className="task-btn">×</button>
          </>
        ))}
      </div>
    </>
  );
}
