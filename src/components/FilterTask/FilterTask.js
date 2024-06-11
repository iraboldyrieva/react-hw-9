import styles from "./FilterTask.module.css";

export default function FilterTask({ filter, onFilterChange }) {
  return (
    <select className={styles.select} value={filter} onChange={onFilterChange}>
      <option value="All">All</option>
      <option value="Done">Done</option>
      <option value="Active">Active</option>
    </select>
  );
}
