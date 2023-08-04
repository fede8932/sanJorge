import React from "react";
import styles from "./iconButon.module.css";

const IconButonUsersTable = (props) => {
  const { icon, iconInitialStyle, fn } = props;
  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        fn()
      }}
      className={styles.butStyle}
    >
      <i className={`${icon} ${styles[iconInitialStyle]}`}></i>
    </button>
  );
};

export default IconButonUsersTable;
