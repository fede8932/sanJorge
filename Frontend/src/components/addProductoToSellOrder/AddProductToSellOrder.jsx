import React from "react";
import styles from "./addProduct.module.css";
import Button from "react-bootstrap/esm/Button";
import Spinner from "react-bootstrap/esm/Spinner";
import CustomInput from "../../commonds/input/CustomInput";
import CustomTable from "../../commonds/table/CustomTable";
import { FormProvider } from "react-hook-form";

function AddProductToSellOrder(props) {
  const {
    setView,
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
  return (
    <FormProvider {...methods}>
      <form className={styles.addProductContainer}>
        <div className={styles.addProdSubContainer}>
          <div className={styles.searchContainer}>
            <span className={styles.subTitle}>Buscador de productos</span>
            <div className={styles.searchTableContainer}>
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
                  onClick={methods.handleSubmit(onSubmit)}
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
              <div className={styles.tableProdContainer}>
                <CustomTable
                  type="search"
                  color="blue"
                  products={productPages.data}
                  fnAdd={fnAdd}
                  fnInfo={fnInfo}
                  colum={[
                    { title: "Artículo", width: "40%" },
                    { title: "Marca", width: "20%" },
                    { title: "Precio Uni", width: "20%" },
                    { title: "Stock", width: "10%" },
                    { title: "Acción", width: "10%" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className={styles.resumenContainer}>
            <div className={styles.resume}>
              <span className={styles.subTitle}>Detalles de presupuesto</span>
              <div className={styles.prodToOrderContainer}>
                <div className={styles.infoProvContainer}>
                  <span className={styles.labelInfoProv}>
                    IVA:
                    <span className={styles.textInfoProv}>Final
                    </span>
                  </span>
                  <span className={styles.labelInfoProv}>
                    Punto de venta:
                    <span className={styles.textInfoProv}>San jorge
                    </span>
                  </span>
                  <span className={styles.labelInfoProv}>
                    Nº de presupuesto:
                    <span className={styles.textInfoProv}>0001-0001</span>
                  </span>
                </div>
                <div className={styles.infoProvContainer}>
                  <div className={styles.infoCostoCont}>
                    <h6 className={styles.precioLabel}>Subtotal:</h6>
                    <span
                      className={styles.precioText}
                    >{`$ ${order.data.total}`}</span>
                  </div>
                  <div className={styles.infoCostoCont}>
                    <h6 className={styles.precioLabel}>IVA:</h6>
                    <span className={styles.precioText}>{`$ ${(
                      order.data.total * 0.21
                    ).toFixed(2)}`}</span>
                  </div>
                  <div className={styles.infoCostoCont}>
                    <h6 className={styles.precioLabel}>Total:</h6>
                    <span className={styles.precioText}>{`$ ${(
                      order.data.total * 1.21
                    ).toFixed(2)}`}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.listContainer}>
              <span className={styles.subTitle}>Productos en presupuesto</span>
              <div className={styles.prodToOrderContainer}>
                <CustomTable
                  type="list"
                  fnDelete={fnDelete}
                  color="teal"
                  products={listOrder}
                  fnUpdate={fnUpdate}
                  fnPrUpdate={fnPrUpdate}
                  colum={[
                    { title: "Artículo", width: "35%" },
                    { title: "Marca", width: "20%" },
                    { title: "Precio Uni", width: "15%" },
                    { title: "Cantidad", width: "10%" },
                    { title: "Subtotal", width: "10%" },
                    { title: "Acción", width: "10%" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            className={`${styles.buttonStyle} ${styles.buttonStyleBack}`}
            variant="danger"
            onClick={() => {
              cancel(order.data.id)
            }}
          >
            Cancelar
          </Button>
          <Button
            className={`${styles.buttonStyle} ${styles.buttonStyleNext}`}
            variant="primary"
            onClick={() => {
              setView("Cliente")
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
