import React from "react";
import styles from "./searchBrand.module.css";
import LongTableContainer from "../../containers/LongTableContainer";
import CustomInput from "../../commonds/input/CustomInput";
import Button from "react-bootstrap/Button";
import { FormProvider } from "react-hook-form";
import Spinner from "react-bootstrap/esm/Spinner";

function SearchBrandComponent(props) {
  const { onSubmit, methods, brands, status } = props;
  return (
    <FormProvider {...methods}>
      <form className={styles.formContainer}>
        <div className={styles.subFormContainer}>
          <div className={styles.inputContainer}>
            <span className={styles.subTitle}>Campos de filtrado</span>
            <div className={styles.searchContainer}>
              <CustomInput
                name="brandCode"
                type="text"
                width="extraMedium"
                placeholder="Código de la marca"
                icon="fas fa-hashtag"
                validate={{ required: true }}
              />
              <Button
                onClick={methods.handleSubmit(onSubmit)}
                style={{
                  backgroundColor: "#673ab7",
                  border: "1px solid #673ab7",
                  height: "47px",
                  width: "100px",
                  marginLeft: "10px",
                }}
              >
                {!status ? (
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
              colum={["Artículo", "Marca", "Acciones"]}
              data={brands}
              type="brand"
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default SearchBrandComponent;
