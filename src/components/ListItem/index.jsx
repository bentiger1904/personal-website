import React from "react";

function ListItem({ taskItem, index, handleEdit, handleDelete }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>{taskItem.task}</strong>
        <p>{taskItem.taskDescription}</p>
      </div>
      <div>
        <button
          className="btn btn-sm btn-info mr-2"
          onClick={() => handleEdit(index)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ListItem;