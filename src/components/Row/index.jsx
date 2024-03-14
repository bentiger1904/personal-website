import React from "react";
import "../Row/style.css";

function Row(props) {
  return <div className="row">{props.children}</div>;
}

export default Row;
