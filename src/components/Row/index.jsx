import React from "react";
import "../Row/style.css";

function Row(props) {
  return <div className="row">{props.children}</div>;
}

document.documentElement.style.setProperty('--animate-duration', '2s');

export default Row;
