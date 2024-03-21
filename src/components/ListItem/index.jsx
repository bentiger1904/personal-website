import React from "react";

import styles from "../ListItem/style.module.css"; // Import CSS module
import { FaTrashAlt, FaEdit } from "react-icons/fa";

function ListItem({ taskItem, index, handleEdit, handleDelete }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>{taskItem.task}</strong>
        <p>{taskItem.taskDescription}</p>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className="edit-button"
          onClick={() => handleEdit(index)}
        >
          <FaEdit className="mb-1"/>
        </button>
        <button
          type="button"
          className="delete-button"
          onClick={() => handleDelete(index)}
        >
          <FaTrashAlt className="mb-1"/>
        </button>
      </div>
    </li>
  );
}

export default ListItem;
