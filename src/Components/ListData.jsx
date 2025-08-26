import React,{useState} from 'react'
import './ListData.css'
import { getTasks, addTaskToStorage } from "../Utils/Storage";
const ListData = () => {
       const [tasks, setTasks] = useState(getTasks()); 

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
    setTasks(dataArray); // ✅ update after status toggle
  };
  return (
    <div className='list'>
      
      <ul>
        {tasks.map((t) => (
          <li key={t.id} id={t.id}> {t.Task}{" "}
          <span
           style={{ cursor: "pointer", marginRight: "10px", color: t.Status === "complete" ? "green" : "red" }}
              onClick={() => toggleStatus(t.id)}
            >
              {t.Status === "complete" ? "✔ Completed" : "✔ Undo"}
            </span>
           <button onClick={()=>deleteTask(t.id)}>❌ Delete</button></li>
        ))}
      </ul>
    </div>
  )
}

export default ListData
