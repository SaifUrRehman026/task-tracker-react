// A helper file just for localStorage logic

const STORAGE_KEY = "dataArray";

export const getTasks = () => { 
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const addTaskToStorage = (task) => {
  const tasks = getTasks();
  const newtask={
    id:Date.now();
  }
  tasks.push(task);
  saveTasks(tasks);
  return tasks; // return updated list
};
