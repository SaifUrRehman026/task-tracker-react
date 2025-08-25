import React, { useState, useEffect } from 'react'
import { getTasks, addTaskToStorage } from "../Utils/Storage";
const TaskAdd = () => {
  const [tasks, setTasks] = useState(getTasks()); 
  const [inputVal, setInputVal] = useState("");

  const addTask = () => {
    if (inputVal.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const updatedTasks = addTaskToStorage(inputVal); 
    setTasks(updatedTasks); 
    setInputVal(""); 
  };

  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Enter task here"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

  



export default TaskAdd;
