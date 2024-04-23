import PropTypes from "prop-types";
import styles from "../styles/index.module.css";

export default function TaskInput({ handleInput, inputValue, ...restProps }) {
  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        className={styles.input}
        {...restProps}
      ></input>
      {inputValue?.length < 4 && (
        <p className={styles.input__message}>Complete el campo</p>
      )}
    </div>
  );
}

TaskInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  name: PropTypes.string,
  inputValue: PropTypes.string,
};
