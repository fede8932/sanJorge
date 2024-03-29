import React from "react";
import styles from "./table.module.css";

function TableComponent(props) {
  const { proveedores, indicadores } = props;
  return (
    <div className={styles.tableWrapper}>
      <table className={`${styles.tableContainer} table`}>
        <thead>
          <tr style={{backgroundColor: "#DCBEFF"}}>
            <th style={{width:"80%"}} id={styles.title} scope="col">{indicadores[0]}</th>
            <th style={{width:"15%"}} id={styles.title} scope="col">{indicadores[1]}</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor, i) => (
            <tr key={i}>
              <td>{proveedor.supplierRazonSocial}</td>
              <td>{proveedor.porcentaje}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
