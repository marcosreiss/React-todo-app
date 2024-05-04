import styles from './style.module.css'

export function Task(props){
    return(
        <div className={styles.container}>
            <p className={props.task.isCompleted && styles.completed} >
                {props.task.id}. {props.task.title}
            </p>
            {!props.task.isCompleted && (
                <button onClick={() => props.handdleCompleteTask(props.task.id)}>
                    OK
                </button>
            )}
        </div>
    )
}