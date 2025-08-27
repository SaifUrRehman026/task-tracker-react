import './ListData.css'
import { getTasks, addTaskToStorage } from "../Utils/Storage";
const ListData = ({tasks, deleteTask, toggleStatus}) => {
      
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
