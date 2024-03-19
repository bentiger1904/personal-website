import React from "react";
import styles from "../Button/button.module.css";

const Button = ({ onClick, label, type }) => {
  let buttonClass = "btn ";
  if (type === "primary") {
    buttonClass += "btn-primary ";
  } else if (type === "danger") {
    buttonClass += "btn-danger ";
  }
  buttonClass += styles.button;

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;