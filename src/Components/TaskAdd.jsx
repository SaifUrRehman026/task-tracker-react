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

   const deleteTask=(taskId)=>{
    let dataArray = JSON.parse(localStorage.getItem("dataArray")) || [];
    dataArray = dataArray.filter(task => task.id !== taskId);
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
    setTasks(dataArray);
  };

    const toggleStatus = (taskId) => {
    let dataArray = JSON.parse(localStorage.getItem("dataArray")) || [];
    dataArray = dataArray.map(task =>
      task.id === taskId
        ? { ...task, Status: task.Status === "complete" ? "undo" : "complete" }
        : task
    );
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
    setTasks(dataArray); 
  };



  return (
    <div>
      <input 
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Enter task here"
      />
      <button  onClick={addTask}>Add Task</button>

<ListData tasks={tasks} deleteTask={deleteTask} toggleStatus={toggleStatus}/>

        <Stats tasks={tasks}/>

    </div>
  );
};

  



export default TaskAdd;
