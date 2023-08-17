import React, { useState } from "react";
import styles from "./newSellOrder.module.css";
import SelectLink from "../../commonds/selectLink/SelectLink";
import FormSelectClientContainer from "../../containers/FormSelectClientContainer";
import AddProductToSellOrderContainer from "../../containers/AddProductToSellOrderContainer";

function NewSellOrder() {
  const [viewActive, setViewActive] = useState("Productos");
  const arrayPrueba = ["Damian Cano", "Juan Martinez", "Sofia Altamirano"]; //los que esten asociados no deben aparecer

  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Crear presupuesto</h6>
      <SelectLink
        view={viewActive}
        order={["Productos", "Cliente"]}
      />
      {viewActive == "Productos" ? (
        <AddProductToSellOrderContainer setView={setViewActive} />
      ) : null}
      {viewActive == "Cliente" ? (
        <FormSelectClientContainer
          proveedores={arrayPrueba}
          setView={setViewActive}
        />
      ) : null}
    </div>
  );
}

export default NewSellOrder;
