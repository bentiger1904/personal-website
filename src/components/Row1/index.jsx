import React from "react";
import "../Row1/style.css";

function Row1(props) {
  return <div className="row1">{props.children}</div>;
}

export default Row1;
