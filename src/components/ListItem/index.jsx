import React from "react";
import styles from "../ListItem/style.module.css"; // Import CSS module

const ListItem = ({ taskItem, index, handleEdit, handleDelete }) => {
  return (
    <li key={index} className={`list-group-item ${styles.listItem}`}>
      <div>
        <span className={styles.task}>{taskItem.task}</span>
        <span className={styles.taskDescription}>
          - {taskItem.taskDescription}
        </span>
      </div>
      <div className={styles.actions}>
        <button
          className={`btn btn-primary ${styles.editButton}`}
          onClick={() => handleEdit(index)}
        >
          Edit
        </button>
        <button
          className={`btn btn-danger ml-2 ${styles.deleteButton}`}
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListItem;