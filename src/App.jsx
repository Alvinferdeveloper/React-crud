import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import styles from "./styles/index.module.css";
import { PageControl } from "./components/PageControl";
import { useStore } from "./hooks/useStore";
import { usePagination } from "./hooks/usePagination";
import { useController } from "./hooks/useCurrentTasks";
import { TasksController } from "./components/TasksController";


export default function App() {
  const [task, setTask] = useState({});
  const { taskList, addNewTask, removeTask, updateTaskState } =
    useStore();
  const { currentTasks, showByStatus, sortAlphabetically, resetOrder, controllerState } = useController(taskList);
  const { pageToRender, pages, nextPage, currentPage, setCurrentPage} = usePagination(currentTasks);

  function handleInput(e) {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  }

  function addTask(e) {
    e.preventDefault();
    if (task.taskInput?.length  > 3  && task.ownerInput?.length > 3) {
      const taskItem = {
        id: new Date().getTime(),
        done: false,
        ...task,
      };
      addNewTask(taskItem);
      e.target.reset();
      setTask({});
    }
  }

  return (
    <main className={styles.main}>
      <TasksController controllerState={controllerState} sortAlphabetically={sortAlphabetically} showByStatus={showByStatus} resetOrder={resetOrder} setCurrentPage={setCurrentPage}/>
      <div>
        <TaskForm handleInput={handleInput} addTask={addTask} task={task} />
        <div className={styles.tasks}>
          <Tasks
            tasks={pageToRender}
            removeTask={removeTask}
            updateTaskState={updateTaskState}
          />
        </div>
      </div>
      {pages > 0 && <PageControl nextPage={nextPage} pages={pages} currentPage={currentPage}/>}
    </main>
  );
}

function Tasks({ tasks, ...restOfProps }) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...restOfProps}></Task>
      ))}
    </>
  );
}
