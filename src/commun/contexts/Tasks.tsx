import { v4 as uuidv4 } from "uuid";
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { iTask, TaskContextValue, tasksInitalValue } from "../../Types/Task";
import axios from "axios";

export const TaskContext = createContext<TaskContextValue>(tasksInitalValue);
TaskContext.displayName = "Tasks";

export default function TaskProvider() {
  const [tasks, setTasks] = useState<iTask[] | []>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      setTasks(data.map((o: any) => ({ ...o, id: uuidv4() })));
    }
    if (tasks.length == 0) fetchTasks();
  }, []);

  const handleTaskAddition = (taskTitle: string) => {
    setTasks(prior => [
      ...prior,
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false
      }
    ]);
  }

  const handleTaskDeletion = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  const handleTaskClick = (taskId: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleTaskAddition,
        handleTaskDeletion,
        handleTaskClick
      }}
    >
      <Outlet />
    </TaskContext.Provider>
  )


}