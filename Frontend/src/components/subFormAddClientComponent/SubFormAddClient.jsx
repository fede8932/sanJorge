import React from "react";
import styles from "./subForm.module.css";
import TableContainer from "../../containers/TableContainer";
import FormClientSupplier from "../../commonds/subFormClient/FormClientSupplier";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

function SubFormAddClientComponent(props) {
  const { methods, onSubmitBrand, tableItems, delFn } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.inputContainerLong}>
      <span className={styles.subTitle}>Set descuentos</span>
      <div className={styles.divContainer}>
        <FormClientSupplier
          supMethods={methods}
          onSubmitBrand={onSubmitBrand}
        />
        <div className={styles.containerTable2}>
          <TableContainer
            delFn={delFn}
            brands={tableItems}
            indicadores={["Marca", "Concepto", "Porcentaje", "Acciones"]}
          />
        </div>
      </div>
      <Button
        onClick={() => {
          navigate("/");
        }}
        style={{
          backgroundColor: "#673ab7",
          border: "1px solid #673ab7",
          margin: "35px 0px",
          height: "38px",
        }}
      >Finalizar</Button>
    </div>
  );
}

export default SubFormAddClientComponent;
