import { useContext } from "react";
import { TaskContext } from "../../commun/contexts/Tasks";
import Task from "../Task";

function Tasks() {
  const { tasks, handleTaskClick, handleTaskDeletion } = useContext(TaskContext);
  return (
    <>
      {
        tasks.map((task, i) => (
          <Task
            key={i}
            task={task}
            handleTaskClick={handleTaskClick}
            handleTaskDeletion={handleTaskDeletion} />
        ))
      }
    </>
  );
}

export default Tasks;