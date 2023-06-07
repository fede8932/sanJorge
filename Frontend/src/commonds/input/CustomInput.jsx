import React, {useRef, useState} from "react";
import styles from "./customInput.module.css";

function CustomInput(props) {
  const { type, width, placeholder, icon } = props;
  const inputRef = useRef(null);
  const [classDivContainer, setClassDivContainer] = useState("inputContainer")
  return (
    <div
      onClick={() => {
        inputRef.current.focus();
        setClassDivContainer("inputContainerActive")
      }}
      onBlur={()=>{
        setClassDivContainer("inputContainer")
      }}
      className={`${styles[classDivContainer]} ${styles[width]}`}
    >
      <i className={`${styles.searchIcon} ${icon}`}></i>
      <input ref={inputRef} className={styles.input} {...props} />
    </div>
  );
}

export default CustomInput;
