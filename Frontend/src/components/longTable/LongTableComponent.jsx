import React from "react";
import styles from "./longTable.module.css";
import ActionModalContainer from "../../containers/ActionModalContainer";
import CustomPopup from "../../commonds/popup/CustomPopup";
import { Label } from "semantic-ui-react";
import {
  dateConverter,
  formatNumberWithLeadingZeros,
  redondearADosDecimales,
} from "../../utils";

function LongTableComponent(props) {
  const { data, colum, type, setBuyOrder, deleteOrder, reception, cancelOrder } = props;
  return (
    <div className={styles.container}>
      <table className={`table ${styles.table}`}>
        <thead>
          <tr>
            {colum.map((obj, i) => (
              <th id={styles.title} key={i} scope="col" style={colum.ancho}>
                {obj.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {type == "product"
            ? data.map((obj) =>
                obj.brandProducts.map((brand, i) => {
                  console.log(obj);
                  return (
                    <tr key={i}>
                      <td>{obj.article}</td>
                      <td>
                        <CustomPopup content={obj.description} />
                      </td>
                      <td>{brand.brand.name}</td>
                      <td>{`$ ${obj.brandProducts[i].price.price}`}</td>
                      <td>{`$ ${
                        obj.brandProducts[i].price.price *
                        (1 + obj.brandProducts[i].price.sellPercentage)
                      }`}</td>
                      <td>
                        {1.21 *
                          obj.brandProducts[i].price.price *
                          (1 + obj.brandProducts[i].price.sellPercentage)}
                      </td>
                      <td>{brand.stock.stock}</td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            width: "130px",
                          }}
                        >
                          <ActionModalContainer
                            type="infoProduct"
                            icon="fa-regular fa-images"
                            size="lg"
                          />
                          <div
                            style={{
                              margin: "0px 0px 0px 8px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <ActionModalContainer
                              type="add"
                              size="lg"
                              title="Ordenes abiertas"
                              icon="fa-solid fa-arrow-right-from-bracket"
                              iconColor="iconStyleGreen"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )
            : null}
          {type == "brand"
            ? data.map((obj) =>
                obj.brandSuppliers.map((bs, i) => (
                  <tr key={i}>
                    <td>{obj.code}</td>
                    <td>{obj.name}</td>
                    <td>{bs.supplier.razonSocial}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <ActionModalContainer
                          type="brand"
                          size="lg"
                          title="Proveedores"
                          icon="fa-solid fa-user-plus"
                          data={obj}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              )
            : null}
          {type == "orders"
            ? data.map((obj, i) => (
                <tr key={i}>
                  <td>{dateConverter(obj.date)}</td>
                  <td>{obj.numero}</td>
                  <td>{obj.supplier.razonSocial}</td>
                  <td>{`$ ${redondearADosDecimales(obj.subTotal)}`}</td>
                  <td>{`$ ${redondearADosDecimales(obj.subTotal * 1.21)}`}</td>
                  <td style={{ padding: "2px" }}>
                    {obj.status == "Open" ? (
                      <Label color="yellow" style={{width:"75px", display: "flex", alignItems: "center", justifyContent: "center"}}>Abierta</Label>
                    ) : null}
                    {obj.status == "Confirm" ? (
                      <Label color="green" style={{width:"75px", display: "flex", alignItems: "center", justifyContent: "center"}}>Confirmada</Label>
                    ) : null}
                    {obj.status == "Ajusted" ? (
                      <Label color="teal" style={{width:"75px", display: "flex", alignItems: "center", justifyContent: "center"}}>Ajustada</Label>
                    ) : null}
                    {obj.status == "Cancel" ? (
                      <Label color="red" style={{width:"75px", display: "flex", alignItems: "center", justifyContent: "center"}}>Cancelada</Label>
                    ) : null}
                    {obj.status == "Recived" ? (
                      <Label color="blue" style={{width:"75px", display: "flex", alignItems: "center", justifyContent: "center"}}>Recibido</Label>
                    ) : null}
                  </td>
                  <td>{obj.voucher ? obj.voucher.numComprobante : null}</td>
                  <td>
                    {obj.controlOrder
                      ? formatNumberWithLeadingZeros(obj.controlOrder.id, 6)
                      : null}
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <button
                        className={styles.iconButton}
                        disabled={obj.status == "Open" ? false : true}
                        onClick={() => {
                          console.log("click");
                        }}
                        type="button"
                      >
                        <i
                          className={`fa-solid fa-circle-info fa-lg ${styles.blueIcon}`}
                        ></i>
                      </button>
                      <button
                        style={{ margin: "1px 0px 0px 7px" }}
                        className={styles.iconButton}
                        disabled={obj.status == "Open" ? false : true}
                        onClick={() => {
                          setBuyOrder(obj.id);
                        }}
                        type="button"
                      >
                        <i
                          className={`fa-regular fa-pen-to-square fa-lg ${
                            obj.status == "Open"
                              ? styles.blueIcon
                              : styles.greyIcon
                          }`}
                        ></i>
                      </button>
                      <button
                        style={{ margin: "1px 0px 0px 7px" }}
                        className={styles.iconButton}
                        disabled={
                          obj.status == "Open" || obj.status == "Confirm" || obj.status == "Ajusted"
                            ? false
                            : true
                        }
                        onClick={() => {
                          if (obj.status == "Open") {
                            deleteOrder(obj.id);
                          } else {
                            cancelOrder(obj.id)
                          }
                        }}
                        type="button"
                      >
                        <i
                          className={`fa-solid fa-xmark fa-xl ${
                            obj.status == "Open" || obj.status == "Confirm" || obj.status == "Ajusted"
                              ? styles.redIcon
                              : styles.greyIcon
                          }`}
                        ></i>
                      </button>
                      <button
                        style={{ margin: "1px 0px 0px 7px" }}
                        className={styles.iconButton}
                        disabled={obj.status == "Confirm" || obj.status == "Ajusted" ? false : true}
                        onClick={() => {
                          reception(obj.id);
                        }}
                        type="button"
                      >
                        <i
                          className={`fa-regular fa-circle-check fa-lg ${
                            obj.status == "Confirm" || obj.status == "Ajusted"
                              ? styles.blueIcon
                              : styles.greyIcon
                          }`}
                        ></i>
                      </button>
                      {/* <button
                        style={{margin: "1px 0px 0px 7px"}}
                        className={styles.iconButton}
                        disabled={obj.status == "Confirm" ? false : true}
                        onClick={()=>{ reception(obj.id) }}
                        type="button"
                      >
                        <i
                          className={`fa-solid fa-file-invoice fa-lg ${
                            obj.status == "Confirm"
                              ? styles.greenIcon
                              : styles.greyIcon
                          }`}
                        ></i>
                      </button> */}
                      {/* <ActionModalContainer
                        type="brand"
                        size="lg"
                        title="Proveedores"
                        icon="fa-regular fa-pen-to-square"
                        data={obj}
                      /> */}
                    </div>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default LongTableComponent;
