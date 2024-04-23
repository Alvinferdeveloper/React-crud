import PropTypes from "prop-types";
import "boxicons";
import styles from "../styles/index.module.css";

function Task({ task, removeTask, updateTaskState }) {
  const styleOfTaskState = task.done
    ? styles.task__item__done
    : styles.task__item;
  const { taskInput, ownerInput, done, id } = task;
  return (
    <div className={styles.task}>
      <p className={styleOfTaskState}>{taskInput}</p>
      <p className={styles.task__item}>{ownerInput}</p>
      <p>
        {done == true ? (
          <box-icon name="check" color="green" size="md"></box-icon>
        ) : (
          <box-icon name="x" color="red" size="md"></box-icon>
        )}
      </p>
      <button
        className={styles.tasks__button}
        onClick={() => removeTask({ id })}
      >
        Delete ya
      </button>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={task.done}
        onChange={() => {
          updateTaskState({ id });
        }}
      ></input>
    </div>
  );
}

export default Task;

Task.propTypes = {
  task: PropTypes.object.isRequired,
  removeTask: PropTypes.func.isRequired,
  updateTaskState: PropTypes.func.isRequired,
};
