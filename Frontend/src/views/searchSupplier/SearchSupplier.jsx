import React from "react";
import styles from "./searchSupplier.module.css";
import SearchSupplierContainer from "../../containers/SearchSupplierContainer";

function SearchSupplier() {
  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Buscador de proveedores</h6>
      <div>
        <SearchSupplierContainer />
      </div>
    </div>
  );
}

export default SearchSupplier;
