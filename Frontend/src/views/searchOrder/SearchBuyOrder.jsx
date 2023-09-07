import React from "react";
import styles from "./searchOrder.module.css";
import SearchOrderContainer from "../../containers/SearchOrderContainer";

function SearchBuyOrder() {
  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Buscador de ordenes de compra</h6>
      <div>
        <SearchOrderContainer type="Buy" />
      </div>
    </div>
  );
}

export default SearchBuyOrder;
