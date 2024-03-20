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
            style={{ backgroundColor: "#ec8027" }}
            type="button"
            className="btn-danger"
            onClick={() => handleEdit(index)}
          >
            <FaEdit />
          </button>
        {/* <button
          className={`btn btn-primary ${styles.editButton}`}

      <div>
        <button
          className="btn btn-sm btn-info mr-2"

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

          className="btn btn-sm btn-danger"

          onClick={() => handleDelete(index)}
        >
          Delete
        </button> */}
      </div>
    </li>
  );
}

export default ListItem;