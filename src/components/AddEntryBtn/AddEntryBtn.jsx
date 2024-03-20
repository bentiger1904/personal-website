import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const AddEntryBtn = (onClick) => {
  return (
    <>
      <span
        onClick={onClick}
        style={{
          padding: "5px",
          border: "2px solid green",
          borderRadius: "5px",
          backgroundColor: "#eff0b8",
          color: "green",
          cursor: "pointer",
        }}
      >
        Add Entry <FaPlusCircle className="mb-1" />
      </span>
    </>
  );
};

export default AddEntryBtn;
