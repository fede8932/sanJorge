import React, { useState } from "react";
import styles from "./addProduct.module.css";
import Button from "react-bootstrap/esm/Button";
import Spinner from "react-bootstrap/esm/Spinner";
import CustomInput from "../../commonds/input/CustomInput";
import CustomTable from "../../commonds/table/CustomTable";
import { FormProvider } from "react-hook-form";
import CustomDrawer from "../../commonds/drawer/CustomDrawer";
import PresupPDF from "../../commonds/presupuestoPDF/PresupPDF";
import ReactDOM from 'react-dom';

function AddProductToSellOrder(props) {
  const {
    nextFn,
    methods,
    onSubmit,
    productPages,
    fnAdd,
    fnInfo,
    fnDelete,
    fnUpdate,
    fnPrUpdate,
    listOrder,
    order,
    cancel,
  } = props;

  const [ventanaAbierta, setVentanaAbierta] = useState(null);

  const abrirNuevaVentana = () => {
    const nuevaVentana = window.open('', '', 'width=800,height=950');
    const container = nuevaVentana.document.createElement('div');
    nuevaVentana.document.body.appendChild(container);
    setVentanaAbierta(container);

    ReactDOM.render(<PresupPDF list={listOrder} order={order}/>, container);
  };
  return (
    <FormProvider {...methods}>
      <form
        className={styles.addProductContainer}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className={styles.addProdSubContainer}>
          <div className={styles.resumenContainer}>
            <div className={styles.resume}>
              <span className={styles.subTitle}>Detalles de presupuesto</span>
              <div className={styles.prodToOrderContainer}>
                <div className={styles.infoProvContainer}>
                  <span className={styles.labelInfoProv}>
                    IVA:
                    <span className={styles.textInfoProv}>Final</span>
                  </span>
                  <span className={styles.labelInfoProv}>
                    Punto de venta:
                    <span className={styles.textInfoProv}>San jorge</span>
                  </span>
                  <span className={styles.labelInfoProv}>
                    Nº de presupuesto:
                    <span className={styles.textInfoProv}>
                      {order.data.numero}
                    </span>
                  </span>
                </div>
                <div className={styles.infoProvContainer}>
                  <div className={styles.infoCostoCont}>
                    <h6 className={styles.precioLabel}>Subtotal:</h6>
                    <span
                      className={styles.precioText}
                    >{`$ ${order.data.subTotal}`}</span>
                  </div>
                  <div className={styles.infoCostoCont}>
                    <h6 className={styles.precioLabel}>IVA:</h6>
                    <span className={styles.precioText}>{`$ ${(
                      order.data.subTotal * 0.21
                    ).toFixed(2)}`}</span>
                  </div>
                  <div className={styles.infoCostoCont}>
                    <h6 className={styles.precioLabel}>Total:</h6>
                    <span className={styles.precioText}>{`$ ${(
                      order.data.subTotal * 1.21
                    ).toFixed(2)}`}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.searchContainer}>
              <span className={styles.subTitle}>Buscador de productos</span>
              <div className={styles.searchTableContainer}>
                <div className={styles.buttonSearchCotainer}>
                  <div className={styles.inputSearchContainer}>
                    <CustomInput
                      name="dataSearch"
                      type="text"
                      width="medium"
                      placeholder="Artículo"
                      icon="fa-solid fa-magnifying-glass"
                      validate={{ required: true }}
                    />
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: "#673ab7",
                        border: "1px solid #673ab7",
                        height: "47px",
                        marginLeft: "20px",
                        width: "100px",
                      }}
                    >
                      {!productPages.loading ? (
                        "Buscar"
                      ) : (
                        <Spinner animation="border" variant="light" size="sm" />
                      )}
                    </Button>
                  </div>
                  <div className={styles.buttonInfoContainer}>
                    <button type="button" className="ui button" onClick={abrirNuevaVentana}>
                      Imprimir
                    </button>
                    <CustomDrawer
                      type={"type"}
                      orderType="OS"
                      fnDelete={fnDelete}
                      fnUpdate={fnUpdate}
                      fnPrUpdate={fnPrUpdate}
                      listOrder={listOrder}
                      orderAjust={"orderAjust"}
                    />
                  </div>
                </div>
                <div className={styles.tableProdContainer}>
                  <CustomTable
                    type="search"
                    process="sell"
                    color="blue"
                    products={productPages.data}
                    fnAdd={fnAdd}
                    fnInfo={fnInfo}
                    colum={[
                      { title: "Artículo", width: "8%" },
                      { title: "Descripción", width: "47%" },
                      { title: "Marca", width: "8%" },
                      { title: "Precio", width: "10%" },
                      { title: "Precio c/IVA", width: "10%" },
                      { title: "Stock", width: "10%" },
                      { title: "Acción", width: "7%" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            className={`${styles.buttonStyle} ${styles.buttonStyleBack}`}
            variant="danger"
            onClick={() => {
              cancel(order.data.id);
            }}
          >
            Cancelar
          </Button>
          <Button
            className={`${styles.buttonStyle} ${styles.buttonStyleNext}`}
            variant="primary"
            onClick={() => {
              nextFn(1);
            }}
          >
            Siguiente
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default AddProductToSellOrder;
