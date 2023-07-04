import React, { useRef, useState } from "react";
import styles from "./customTextArea.module.css";

function CustomTextArea(props) {
  const { type, width, placeholder } = props;
  const inputRef = useRef(null);
  const [classDivContainer, setClassDivContainer] = useState("inputContainer");
  return (
    <div
      onClick={() => {
        inputRef.current.focus();
        setClassDivContainer("inputContainerActive");
      }}
      onBlur={() => {
        setClassDivContainer("inputContainer");
      }}
      className={`${styles[classDivContainer]} ${styles[width]}`}
    >
      <textarea
        ref={inputRef}
        className={styles.input}
        {...props}
        maxLength={160}
      />
    </div>
  );
}

export default CustomTextArea;
