import React from "react";
import styles from "../Button/button.module.css";
import { HiHeart } from "react-icons/hi2";

// const Button = ({ onClick, label, type }) => {
//   let buttonClass = "btn ";
//   if (type === "primary") {
//     buttonClass += "btn-primary ";
//   } else if (type === "danger") {
//     buttonClass += "btn-danger ";
//   }
//   buttonClass += styles.button;

//   return (
//     <HiHeart  className={buttonClass} onClick={onClick}>
//       {label}
//     </HiHeart>
//   );
// };

function Button(props) {
  return (
    <tbody>
                <tr className="table-primary">
                  <td colSpan="4">
                    <span 
                      style={{color: "green", cursor: "pointer", fontSize: "150%", position:"inherit", marginLeft:"10px", backgroundColor:"yellow", borderRadius:"5px"}}
                      onClick={props.onClick} 
                      className={`${props["data-value"]}`} 
                      data-value={props["data-value"]} 

                    >
                      Add Entry <HiHeart className="mb-12"/>
                    </span>
                  </td>
                </tr>
              </tbody>

  );
}

export default Button;