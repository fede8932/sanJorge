import React, { useState } from "react";
import styles from "./newBuyOrder.module.css";
import AddProductToBuyOrderContainer from "../../containers/AddProductToBuyOrderContainer";
import FormSelectProveedorContainer from "../../containers/FormSelectProveedorContainer";
import CustomStep from "../../components/step/CustomStep";
// import FindBuyOrderContainer from "../../containers/FindBuyOrderContainer";

function NewBuyOrder(props) {
  const { estado } = props;
  const [view, setView] = useState(estado);
  const steps = [
    {
      title: "Proveedor",
    },
    {
      title: "Productos",
    },
  ];

  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Crear orden de compra</h6>
      <div className={styles.stepContainer}>
        <CustomStep steps={steps} type="client" view={view} />
      </div>
      <div style={{ marginTop: "30px" }}>
        {view == 0 ? <FormSelectProveedorContainer nextFn={setView} /> : null}
        {view == 1 ? <AddProductToBuyOrderContainer nextFn={setView} /> : null}
      </div>
    </div>
  );
}

export default NewBuyOrder;
