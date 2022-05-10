import styles from './Task.module.scss';
import { iTask } from "../../Types/Task";
import classNames from 'classnames';
import { CgClose, CgInfo } from 'react-icons/cg';
import { Link } from 'react-router-dom';

interface Props {
  task: iTask,
  handleTaskClick: (taskId: string) => void,
  handleTaskDeletion: (taskId: string) => void
}

function Task({ task, handleTaskClick, handleTaskDeletion }: Props) {
  return (
    <div className={classNames({
      [styles['task-container']]: true,
      [styles['task-container--completed']]: task.completed,
    })}>
      <div
        className={styles['task-title']}
        onClick={() => handleTaskClick(task.id)}
      >
        {task.title}
      </div>
      <div className={styles['buttons-container']}>
        <button
          className={styles['remove-task-button']}
          onClick={() => { handleTaskDeletion(task.id) }}
        >
          <CgClose />
        </button>
        <Link
          className={styles['see-task-detail-button']}
          to={"/" + task.id}
        >
          <CgInfo />
        </Link>
      </div>
    </div>
  );
}

export default Task;