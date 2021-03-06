export interface iTask {
  id: string;
  title: string;
  completed: boolean;
}

export const taskInitialValue = {
  id: "",
  title: "",
  completed: false
}

export type TaskContextValue = {
  tasks: iTask[],
  handleTaskAddition: (taskTitle: string) => void,
  handleTaskDeletion: (taskId: string) => void,
  handleTaskClick: (taskId: string) => void
}


export const tasksInitalValue: TaskContextValue = {
  tasks: [taskInitialValue],
  handleTaskAddition: (taskTitle: string) => { },
  handleTaskDeletion: (taskId: string) => { },
  handleTaskClick: (taskId: string) => { }
}