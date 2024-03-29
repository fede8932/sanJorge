import React from "react";
import styles from "./subForm.module.css";
import TableContainer from "../../containers/TableContainer";
import FormClientSupplier from "../../commonds/subFormClient/FormClientSupplier";

function SubFormAddClientComponent(props) {
  const {
    supMethods,
    onSubmitSupplier,
    tableItems,
  } = props;
  return (
    <div className={styles.divContainer}>
      <FormClientSupplier
        supMethods={supMethods}
        onSubmitSupplier={onSubmitSupplier}
      />
      <div className={styles.containerTable2}>
        <TableContainer
          proveedores={tableItems}
          indicadores={["Proveedor", "% Desc"]}
        />
      </div>
    </div>
  );
}

export default SubFormAddClientComponent;
