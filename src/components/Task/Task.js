import Checkbox from "../Checkbox/Checkbox";
import styles from "./Task.module.css";

export default function Task({ task, onToggleDone, onDelete, onEdit }) {
  if (!task) {
    return null;
  }
  return (
    <li className={styles.items} key={task.id}>
      <span
        style={{
          textDecoration: task.checked ? "line-through" : "none",
          flexGrow: 1,
        }}
      >
        {task.title}
      </span>
      <Checkbox
        isChecked={task.checked}
        onChange={() => onToggleDone(task.id)}
      />
      <button className={styles.deleteBtn} onClick={onEdit}>
        Edit
      </button>
      <button className={styles.deleteBtn} onClick={() => onDelete(task.id)}>
        X
      </button>
    </li>
  );
}
