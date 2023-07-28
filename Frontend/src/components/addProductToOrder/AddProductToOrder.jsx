import React from "react";
import styles from "./addProduct.module.css";
import Button from "react-bootstrap/esm/Button";
import Spinner from "react-bootstrap/esm/Spinner";
import { FormProvider } from "react-hook-form";
import CustomInput from "../../commonds/input/CustomInput";
import CustomTable from "../../commonds/table/CustomTable";
import CustomPagination from "../../commonds/pagination/CustomPagination";

function AddProductToOrder(props) {
  const { setView, methods, onSubmit, productPages } = props;
  return (
    <FormProvider {...methods}>
      <form className={styles.addProductContainer}>
        <div className={styles.tableProdContainerPrinc}>
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
                  color="blue"
                  rows={productPages.data.products}
                  colum={[
                    { title: "Artículo", width: "40%" },
                    { title: "Marca", width: "20%" },
                    { title: "Precio Uni", width: "20%" },
                    { title: "Stock", width: "10%" },
                    { title: "Acción", width: "10%" },
                  ]}
                />
                <div className={styles.pagContainer}>
                  <CustomPagination />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.resumenContainer}>
            <div className={styles.resume}>
              <span className={styles.subTitle}>Resumen de orden</span>
              <div className={styles.prodToOrderContainer}>
                <div className={styles.infoProvContainer}>
                  <span className={styles.labelInfoProv}>
                    Razon Social:
                    <span className={styles.textInfoProv}>Pirulino S.A.</span>
                  </span>
                  <span className={styles.labelInfoProv}>
                    CUIT:
                    <span className={styles.textInfoProv}>30-31214452-9</span>
                  </span>
                  <span className={styles.labelInfoProv}>
                    Nº de compra:
                    <span className={styles.textInfoProv}>0001-0001</span>
                  </span>
                </div>
                <div className={styles.infoProvContainer}>
                  <div className={styles.infoCostoCont}>
                    <h6 className={styles.precioLabel}>Subtotal:</h6>
                    <span className={styles.precioText}>$10000</span>
                  </div>
                  <div className={styles.infoCostoCont}>
                    <h6 className={styles.precioLabel}>IVA:</h6>
                    <span className={styles.precioText}>$2100</span>
                  </div>
                  <div className={styles.infoCostoCont}>
                    <h6 className={styles.precioLabel}>Total:</h6>
                    <span className={styles.precioText}>$12100</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.listContainer}>
              <span className={styles.subTitle}>Productos en orden</span>
              <div className={styles.prodToOrderContainer}>
                <CustomTable
                  color="teal"
                  rows={["", "", "", "", "", "", ""]}
                  colum={[
                    { title: "Artículo", width: "35%" },
                    { title: "Marca", width: "20%" },
                    { title: "Precio Uni", width: "15%" },
                    { title: "Cantidad", width: "10%" },
                    { title: "Subtotal", width: "10%" },
                    { title: "Acción", width: "10%" },
                  ]}
                />
                <div className={styles.pagContainer}>
                  <CustomPagination />
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
              setView("General");
            }}
          >
            Atras
          </Button>
          <Button
            className={`${styles.buttonStyle} ${styles.buttonStyleNext}`}
            variant="primary"
            onClick={() => {
              setView("Finalizar");
            }}
          >
            Siguiente
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default AddProductToOrder;
