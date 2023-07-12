import React from "react";
import styles from "./addClient.module.css";
import AddClientContainer from "../../containers/AddClientContainer";

function AddClient() {
  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Registrar cliente</h6>
      <div>
        <AddClientContainer />
      </div>
    </div>
  );
}

export default AddClient;
