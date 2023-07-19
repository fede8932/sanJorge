import React from "react";
import styles from "./searchProduct.module.css";
import SearchProductContainer from "../../containers/SearchProductContainer";

function SearchProduct() {
  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Buscador de productos</h6>
      <div>
        <SearchProductContainer />
      </div>
    </div>
  );
}

export default SearchProduct;
