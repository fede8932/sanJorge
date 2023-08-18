import React from "react";
import styles from "./searchCurrentAcount.module.css";
import SearchCurrentAcountContainer from "../../containers/SearchCurrentAcountContainer";

function SearchCurrentAcount() {
  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Buscador de Cuentas corriente</h6>
      <div>
        <SearchCurrentAcountContainer />
      </div>
    </div>
  );
}

export default SearchCurrentAcount;
