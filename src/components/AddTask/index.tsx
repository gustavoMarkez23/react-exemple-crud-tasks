import { useContext, useState } from 'react';
import { TaskContext } from '../../commun/contexts/Tasks';
import Button from '../Button';
import styles from './AddTask.module.scss';

function AddTask() {
  const { handleTaskAddition } = useContext(TaskContext);
  const [inputData, setInputData] = useState<string>('');
  const handleTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData('');
  }

  return (
    <div className={styles['add-task-container']}>
      <input
        type="text"
        onChange={(e) => setInputData(e.target.value)}
        className={styles['add-task-input']}
        value={inputData} />

      <div className={styles['add-task-button-container']}>
        <Button
          onClick={handleTaskClick}>ADICIONAR</Button>
      </div>
    </div>
  );
}

export default AddTask;