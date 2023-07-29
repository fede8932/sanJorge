import React from "react";
import styles from "./iconButon.module.css";
import { useState } from "react";

const IconButton = (props) => {
  const { icon, iconInitialStyle, fn } = props;
  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        fn();
      }}
      className={styles.butStyle}
    >
      <i className={`${icon} ${styles[iconInitialStyle]}`}></i>
    </button>
  );
};

export default IconButton;
