import React from "react";
import styles from "./orderView.module.css";
import { Label } from "semantic-ui-react";
import OrderDetailTable from "../../commonds/orderDetailTable/OrderDetailTable";

function OrderViewComponent(props) {
  const { close, order } = props;
  console.log(order);
  return (
    <div className={styles.editContainer}>
      <div className={styles.dataContainer}>
        <span className={styles.inputLabel}>
          ID Orden:<span className={styles.dataUser}>{order.id}</span>
        </span>
        <span>
          Nº de Orden:<span className={styles.dataUser}>{order.numero}</span>
        </span>
        <span>
          Tipo:<span className={styles.dataUser}>Compra</span>
        </span>
        <span>
          Proveedor:
          <span className={styles.dataUser}>{order.supplier.razonSocial}</span>
        </span>
        <span>
          Total:
          <span className={styles.dataUser}>{`$ ${order.total}`}</span>
        </span>
        <div>
          <Label color="blue">{order.status}</Label>
        </div>
      </div>
      <div>
        <OrderDetailTable
          columns={[
            { title: "Código", width: "10%" },
            { title: "Descripción", width: "50%" },
            { title: "Marca", width: "10%" },
            { title: "Precio", width: "10%" },
            { title: "Cantidad", width: "10%" },
            { title: "Total", width: "10%" },
          ]}
          color="teal"
          data={order}
        />
      </div>
    </div>
  );
}

export default OrderViewComponent;
