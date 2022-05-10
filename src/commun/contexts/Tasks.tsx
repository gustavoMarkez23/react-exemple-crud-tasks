import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Task, TaskContextValue, taskInitialValue, tasksInitalValue } from "../../Types/Task";

export const TaskContext = createContext<TaskContextValue>(tasksInitalValue);
TaskContext.displayName = "Tasks";

export default function TaskProvider() {
  const [tasks, setTasks] = useState<Task[]>([taskInitialValue]);

  const handleTaskAddition = (taskTitle: string) => {
    const newTasks: Task[] = [...tasks, {
      id: uuidv4(),
      title: taskTitle,
      completed: false
    }];
    setTasks(newTasks);
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