import React, { useState } from "react";
import styles from "./newBuyOrder.module.css";
import SelectLink from "../../commonds/selectLink/SelectLink";
import AddProductToBuyOrderContainer from "../../containers/AddProductToBuyOrderContainer";
import FormSelectProveedorContainer from "../../containers/FormSelectProveedorContainer";
import FindBuyOrderContainer from "../../containers/FindBuyOrderContainer";

function NewBuyOrder() {
  const [viewActive, setViewActive] = useState("General");
  console.log(viewActive);
  const arrayPrueba = [
    { text: "Damian Cano", value: 1 },
    { text: "Romina Gutierrez", value: 2 },
    { text: "Fernando Lopez", value: 3 },
  ]; //los que esten asociados no deben aparecer

  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Crear orden de compra</h6>
      <SelectLink
        view={viewActive}
        order={["General", "Productos", "Finalizar"]}
      />
      {viewActive == "General" ? (
        <FormSelectProveedorContainer
          setView={setViewActive}
        />
      ) : null}
      {viewActive == "Productos" ? (
        <AddProductToBuyOrderContainer setView={setViewActive} />
      ) : null}
      {viewActive == "Finalizar" ? (
        <FindBuyOrderContainer setView={setViewActive} />
      ) : null}
    </div>
  );
}

export default NewBuyOrder;
