import React from 'react'
import { FaTrashAlt } from "react-icons/fa";


const DeleteBtn = (deleteEntry, index ) => {
  return (
    <>
        <button
            style={{ backgroundColor: "#db2828" }}
            type="button"
            className="btn-danger"
            onClick={() => deleteEntry(index)}
          >
            <FaTrashAlt />
          </button>
    </>
  )
}
 
export default DeleteBtn
