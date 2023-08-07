import React from "react";
import styles from "./searchClient.module.css";
import SearchClientContainer from "../../containers/SearchClientContainer ";

function SearchClient() {
  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Buscador de clientes</h6>
      <div>
        <SearchClientContainer />
      </div>
    </div>
  );
}

export default SearchClient;
