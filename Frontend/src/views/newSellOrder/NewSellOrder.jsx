import React, { useState } from "react";
import styles from "./newSellOrder.module.css";
import Button from "react-bootstrap/Button";
import SelectLink from "../../commonds/selectLink/SelectLink";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router";
import CustomInput from "../../commonds/input/CustomInput";
import FormSelectClientContainer from "../../containers/FormSelectClientContainer";
import AddProductToSellOrderContainer from "../../containers/AddProductToSellOrderContainer";

function NewSellOrder() {
  const [viewActive, setViewActive] = useState("Cliente");
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
