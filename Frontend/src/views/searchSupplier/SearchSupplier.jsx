import React from "react";
import styles from "./searchSupplier.module.css";
import SearchSupplierContainer from "../../containers/SearchSupplierContainer";
import { useLocation } from "react-router";

function SearchSupplier() {
  const { pathname } = useLocation();
  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>{pathname == "/search/supplier" ? "Buscador de proveedores" : "Buscador de representantes"}</h6>
      <div>
        <SearchSupplierContainer />
      </div>
    </div>
  );
}

export default SearchSupplier;
