import React from "react";
import styles from "./editUserView.module.css";
import Button from "react-bootstrap/esm/Button";

function EditUserViewComponent(props) {
  return (
    <div className={styles.editContainer}>
      <h4>Leandro Federico Angel</h4>
      <form className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.leftInputContainer}></div>
          <div className={styles.rigthInputContainer}></div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonSubContainer}>
            <Button>Actualizar</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditUserViewComponent;
