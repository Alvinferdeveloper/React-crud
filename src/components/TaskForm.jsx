import PropTypes from "prop-types"
import styles from "../styles/index.module.css"
import TaskInput from "./taskInput";

export default function TaskForm({addTask,handleInput,task}){
    return (
    <form onSubmit={addTask} className={styles.form}>
        <TaskInput name={"taskInput"} placeholder={"Task"} handleInput={handleInput} inputValue={task.taskInput}/>
        <TaskInput name={"ownerInput"} placeholder={"owner"} handleInput={handleInput} inputValue={task.ownerInput}/>
        <input type="submit" className={styles.button}></input>
    </form>
    )
}

TaskForm.propTypes={
    handleInput:PropTypes.func,
    addTask:PropTypes.func,
    task:PropTypes.object.isRequired,
}

