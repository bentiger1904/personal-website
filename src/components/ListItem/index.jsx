import React from "react";
import styles from "../ListItem/style.module.css"; // Import CSS module
import { FaTrashAlt, FaEdit } from "react-icons/fa";


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
            style={{ backgroundColor: "#ec8027" }}
            type="button"
            className="btn-danger"
            onClick={() => handleEdit(index)}
          >
            <FaEdit />
          </button>
        {/* <button
          className={`btn btn-primary ${styles.editButton}`}
          onClick={() => handleEdit(index)}
        >
          Edit
        </button> */}
        <button
            style={{ backgroundColor: "#db2828" }}
            type="button"
            className="btn-danger"
            onClick={() => handleDelete(index)}
          >
            <FaTrashAlt />
          </button>
        {/* <button
          className={`btn btn-danger ml-2 ${styles.deleteButton}`}
          onClick={() => handleDelete(index)}
        >
          Delete
        </button> */}
      </div>
    </li>
  );
};

export default ListItem;