import styles from './TaskList.module.css';
import { Trash } from 'phosphor-react';
import { useState } from 'react';


interface TaskListProps {
  id: string;
  content: string;
  onDeleteTask: (task: string) => void;
}

export function TaskList({id, content, onDeleteTask}:TaskListProps){
  const [isCompleted, setIsCompleted] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleOnCompletedTask() {
    if (isCompleted) {
      setIsCompleted(false);
    } else {
      setIsCompleted(true);
    }
  }
  
  return(
    <div className={styles.taskCard}>
      <div className={styles.rounded}>
        <input 
          name="checkbox"
          type="checkbox"
          id={id}
          checked={isCompleted}
          onClick={handleOnCompletedTask}
          readOnly
          
        />
        <label htmlFor={id}></label>
        </div>
        <span className={isCompleted === true ? styles.completed : ''}>{content}</span>
      <button
        type='button'
        onClick={handleDeleteTask}
      >
        <Trash size={20}/>
      </button>
    </div>
  )
}