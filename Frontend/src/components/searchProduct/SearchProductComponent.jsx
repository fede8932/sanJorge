import React from "react";
import styles from "./searchProduct.module.css";
import Button from "react-bootstrap/esm/Button";
import CustomInput from "../../commonds/input/CustomInput";
import LongTableContainer from "../../containers/LongTableContainer";
import { FormProvider } from "react-hook-form";
import Spinner from "react-bootstrap/esm/Spinner";

function SearchProductComponent(props) {
  const { onSubmit, products, methods } = props;
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
                name="campo"
                type="text"
                width="extraMedium"
                placeholder="Código de artículo / Nombre / Referencia"
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
                {!products.loading ? (
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
                { title: "Artículo", ancho: {width: "10%"}},
                { title: "Descripción", ancho: {width: "30%"}},
                { title: "Marca", ancho: {width: "10%"}},
                { title: "Precio de lista", ancho: {width: "10%"}},
                { title: "Precio de venta", ancho: {width: "10%"}},
                { title: "Precio con IVA", ancho: {width: "10%"}},
                { title: "Stock", ancho: {width: "10%"}},
                { title: "Acciones", ancho: {width: "10%"}},
              ]}
              data={products.data}
              type="product"
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default SearchProductComponent;
