import React from "react";
import styles from "./searchSeller.module.css";
import SearchSellerContainer from "../../containers/SearchSellerContainer";

function SearchSeller() {
  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Buscador de vendedores</h6>
      <div>
        <SearchSellerContainer />
      </div>
    </div>
  );
}

export default SearchSeller;
