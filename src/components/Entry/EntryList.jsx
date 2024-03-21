import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "./index.css";

const EntryList = ({ entries, onEdit, onDelete }) => {
  return (
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className='heading'>Title</th>
              <th className='heading'>Description</th>
              <th className='heading'>Date</th>
              <th className='heading'>Actions</th>
            </tr>
          </thead>
          <tbody>
          {entries && entries.map((entry, index) => (
  entry && <tr key={index}>
    <td className="larger-cell">{entry.title}</td>
    <td className="larger-cell">{entry.description}</td>
    <td>{entry.date}</td>
    <td>
    <button
            style={{ backgroundColor: "#ec8027" }}
            type="button"
            className="btn-danger"
            onClick={() => onEdit(index)}
          >
            <FaEdit />
          </button>
      {/* <button className="btn btn-warning" onClick={() => onEdit(index)}>Edit</button> */}
      <button
            style={{ backgroundColor: "#db2828", paddingLeft: "5px", borderRadius: "5px" }}
            type="button"
            className="btn-danger"
            onClick={() => onDelete(index)}
          >
            <FaTrashAlt />
          </button>
      {/* <button className="btn btn-danger" onClick={() => onDelete(index)}>Delete</button> */}
    </td>
  </tr>
))}

          </tbody>
        </table>
      </div>
    );
};

export default EntryList;
