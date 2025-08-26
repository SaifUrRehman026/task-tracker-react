import React, { useState, useEffect } from 'react'
import { getTasks, addTaskToStorage } from "../Utils/Storage";
import ListData from './ListData';
import './TaskAdd.css'
import Stats from './Stats';

const TaskAdd = () => {
  const [tasks, setTasks] = useState(getTasks()); 
  const [inputVal, setInputVal] = useState("");

  const addTask = () => {
    if (inputVal.trim() === "") {
      alert("Please enter a task");
      return;
    }

     addTaskToStorage(inputVal); 
    setTasks(getTasks()); 
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

<ListData tasks={tasks} key={tasks} />

        <Stats tasks={tasks}/>

    </div>
  );
};

  



export default TaskAdd;
