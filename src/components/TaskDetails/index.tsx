import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TaskContext } from '../../commun/contexts/Tasks';
import Button from '../Button';
import styles from './TaskDetails.module.scss';

function TaskDetails() {
  const { tasks } = useContext(TaskContext);
  const navigate = useNavigate();
  const { taskid } = useParams();

  return (
    <>
      <div className={styles['back-button-container']}>
        <Button onClick={() => navigate(-1)}>VOLTAR</Button>
      </div>
      <div
        className={styles['task-details-container']}>
        <h2>
          {
            tasks.find(task => task.id == taskid)?.title || 'Not found'
          }
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates velit quidem quas culpa a blanditiis!</p>
      </div>
    </>
  );
}

export default TaskDetails;