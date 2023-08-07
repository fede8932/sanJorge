import React from "react";
import styles from "./addProduct.module.css";
import AddProductFormContainer from "../../containers/AddProductFormContainer";

function AddProduct() {
  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Registrar producto</h6>
      <div>
        <AddProductFormContainer />
      </div>
    </div>
  );
}

export default AddProduct;
