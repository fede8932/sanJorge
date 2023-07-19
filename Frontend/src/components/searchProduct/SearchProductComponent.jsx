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
      <form className={styles.formContainer}>
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
                onClick={methods.handleSubmit(onSubmit)}
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
                "Artículo",
                "Precio de lista",
                "Precio de venta",
                "Marca",
                "Stock",
                "Acciones",
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
