import React from "react";
import styles from "./customSelect.module.css";

function CustomSelect(props) {
  const { text, clientes, width } = props;
  return (
    <select className={`form-select ${styles.selectContainer} ${styles[width]}`}>
      <option selected>{text}</option>
      {clientes.map((cliente, i) => (
        <option key={i} value={cliente}>
          {cliente}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
