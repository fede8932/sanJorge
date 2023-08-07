import React, { useState } from "react";
import styles from "./tableInput.module.css";

const TableInput = (props) => {
  const { type, step, defValue, fn, dataItem } = props;
  const [inputValue, setInputValue] = useState(defValue);
  const [borderInput, setBorderInput] = useState("inputBorderGrey");
  const newDataItem = dataItem;
  newDataItem.editCamp = inputValue;
  const handleInputChange = (event) => {
    if (event.target.value >= 0) {
      setInputValue(event.target.value);
    }
  };
  const handleInputBlur = async (event) => {
    if (event.target.value <= 0) {
      setBorderInput("inputBorderRed");
    } else {
      setBorderInput("inputBorderGrey");
      await fn(newDataItem);
    }
  };
  return (
    <div className={`${styles[borderInput]} ${styles.inputContainer}`}>
      <input
        className={styles.inputStyle}
        type={type}
        step={step}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </div>
  );
};

export default TableInput;
