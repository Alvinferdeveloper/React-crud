import { orderValues } from "../constants";
import styles from "../styles/index.module.css";
export function TasksController({controllerState, sortAlphabetically, showByStatus, resetOrder, setCurrentPage}) {
    const { byStatus, sorted } = controllerState;
  return (
    <div className={styles.tasksController}>
      <button
        onClick={() => sortAlphabetically(orderValues.ASCENDING)}
        className={sorted.ascending ? styles.tasksController__button__active: styles.tasksController__button }
      >
        Ascendente
      </button>
      <button
        onClick={() => sortAlphabetically(orderValues.DESCENDING)}
        className={sorted.descending ? styles.tasksController__button__active: styles.tasksController__button}
      >
        Descendente
      </button>
      <button
        onClick={() => {showByStatus(orderValues.DONE); setCurrentPage(1)}}
        className={byStatus.done ? styles.tasksController__button__active: styles.tasksController__button}
      >
        Done
      </button>
      <button
        onClick={() => showByStatus(orderValues.PENDING)}
        className={byStatus.pending ? styles.tasksController__button__active: styles.tasksController__button}
      >
        pending
      </button>
      <button onClick={resetOrder} className={styles.tasksController__button}>Reset</button>
    </div>
  );
}
