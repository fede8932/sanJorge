import React from "react";
import styles from "./table.module.css";

function TableComponent(props) {
  const { proveedores } = props;
  return (
    <div className={styles.tableWrapper}>
      <table className={`${styles.tableContainer} table`}>
        <thead>
          <tr >
            <th id={styles.title} scope="col">Proveedor</th>
            <th id={styles.title} scope="col">% Comisión</th>
          </tr>
        </thead>
        <tbody className={`${styles.divider}`}>
          {proveedores.map((proveedor, i) => (
            <tr key={i}>
              <td>{proveedor.razonSocial}</td>
              <td>{proveedor.comision}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
