import React from "react";
import styles from "./subForm.module.css";
import TableContainer from "../../containers/TableContainer";
import FormClientSeller from "../../commonds/subFormClient/FormClientSeller";
import FormClientSupplier from "../../commonds/subFormClient/FormClientSupplier";

function SubFormAddClientComponent(props) {
  const {
    suppliers,
    supMethods,
    selMethods,
    onSubmitSeller,
    onSubmitSupplier,
    tableItems,
  } = props;
  return (
    <div className={styles.divContainer}>
      <FormClientSeller selMethods={selMethods} onSubmitSeller={onSubmitSeller} />
      <FormClientSupplier suppliers={suppliers} supMethods={supMethods} onSubmitSupplier={onSubmitSupplier} />
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
