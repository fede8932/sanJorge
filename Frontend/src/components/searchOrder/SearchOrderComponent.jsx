import React from "react";
import styles from "./searchOrder.module.css";
import Button from "react-bootstrap/esm/Button";
import CustomInput from "../../commonds/input/CustomInput";
import LongTableContainer from "../../containers/LongTableContainer";
import { FormProvider } from "react-hook-form";
import Spinner from "react-bootstrap/esm/Spinner";

function SearchOrderComponent(props) {
  const { onSubmit, orders, methods } = props;
  return (
    <FormProvider {...methods}>
      <form
        className={styles.formContainer}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className={styles.subFormContainer}>
          <div className={styles.inputContainer}>
            <span className={styles.subTitle}>Campos de filtrado</span>
            <div
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <CustomInput
                name="text"
                type="text"
                width="extraMedium"
                placeholder="Número de compra / Cuit / Razón Social"
                icon="fas fa-hashtag"
                validate={{ required: true }}
              />
              <Button
                type="submit"
                style={{
                  backgroundColor: "#673ab7",
                  border: "1px solid #673ab7",
                  height: "48px",
                  width: "100px",
                  marginLeft: "10px",
                }}
              >
                {!orders.loading ? (
                  "Buscar"
                ) : (
                  <Spinner animation="border" variant="light" size="sm" />
                )}
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <span className={styles.subTitle}>Detalle de productos</span>
          <div>
            <LongTableContainer
              colum={[
                { title: "Fecha", ancho: {width: "10%"}},
                { title: "Numero", ancho: {width: "25%"}},
                { title: "Proveedor", ancho: {width: "10%"}},
                { title: "Total", ancho: {width: "10%"}},
                { title: "Total con IVA", ancho: {width: "10%"}},
                { title: "Status", ancho: {width: "10%"}},
                { title: "Nº Factura", ancho: {width: "10%"}},
                { title: "Ord de control", ancho: {width: "10%"}},
                { title: "Acciones", ancho: {width: "5%"}},
              ]}
              data={orders.data}
              type="orders"
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default SearchOrderComponent;
