import { useRef, useState } from "react";
import { Task } from "./components/tasks";

import styles from  "./App.module.css"


export function App() {
  const inputRef = useRef(null)
  const [tasks, setTasks] = useState([])

  function handdleAddTask(){
    const newTask = {
      id: tasks.length + 1,
      title: inputRef.current.value,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
    inputRef.current.value = ''
  }

  function handdleCompleteTask(id){
    const taskIndex = tasks.findIndex(item => item.id === id);

    if(taskIndex === -1){return}

    const newTasks = [...tasks]
    newTasks[taskIndex].isCompleted = true;
    setTasks(newTasks);
  }

  return (
    <main className={styles.conteainer}> 
      <h1 className={styles.title}>Todo App</h1>

      <div className={styles.inputGroup}>
        <input placeholder="nova tarefa" ref={inputRef} type="text" />
        <button onClick={handdleAddTask}>Add</button>
      </div>

     <div className={styles.tasks}>
        {tasks.map(item => (
          <Task key={item.id} task={item} handdleCompleteTask={handdleCompleteTask}/>
        ))}

        {!tasks.length && <p>Nenhuma tarefa ainda 😓</p>}
     </div>

    </main>
  )
}
