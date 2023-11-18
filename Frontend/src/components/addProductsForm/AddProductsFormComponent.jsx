import React from "react";
import styles from "./addProduct.module.css";
import { FormProvider } from "react-hook-form";
import CustomInput from "../../commonds/input/CustomInput";
import CustomSelect from "../../commonds/select/CustomSelect";
import Button from "react-bootstrap/esm/Button";
import Spinner from "react-bootstrap/esm/Spinner";
import ExcelUpload from "../../commonds/upload/ExcelUpload";

function AddProductsFormComponent(props) {
  const {
    onSubmit,
    status,
    methods,
    suppliers,
    brands,
    selectStatus,
    setSelectStatus,
    setAddProducts,
    addProducts,
  } = props;
  return (
    <FormProvider {...methods}>
      <form className={styles.formContainer}>
        <div className={styles.subFormContainer}>
          <div className={styles.infoInputContainer}>
            <div className={styles.inputContainer}>
              <span className={styles.subTitle}>Datos generales</span>
              {suppliers && (
                <CustomSelect
                  text="Seleccioná la proveedor"
                  name="supplierName"
                  validate={{ required: true }}
                  arrayOptions={suppliers}
                  fnSelect={setSelectStatus}
                />
              )}
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.subTitle}>Datos adicionales</span>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <CustomInput
                  name="sellProcent"
                  width="small"
                  placeholder="Por. Venta"
                  icon="fas fa-percentage"
                  type="number"
                  min="-100"
                  max="100"
                  step="1"
                  validate={{ required: true }}
                />
                <CustomInput
                  name="saleProcent"
                  width="small"
                  placeholder="Por. Oferta"
                  icon="fas fa-percentage"
                  type="number"
                  min="-100"
                  max="100"
                  step="1"
                  validate={{ required: true }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              ></div>
            </div>
          </div>
          <div className={styles.subUploadContainer}>
            <span className={styles.subTitle}>Subir productos</span>
            <div className={styles.uploadContainer}>
              <ExcelUpload
                fnState={setAddProducts}
                state={addProducts.loading}
              />
            </div>
          </div>
        </div>
        <Button
          disabled={addProducts.products.length > 0 ? false : true}
          onClick={methods.handleSubmit(onSubmit)}
          style={{
            backgroundColor: "#673ab7",
            border: "1px solid #673ab7",
            marginTop: "35px",
            height: "48px",
          }}
        >
          {!status ? (
            "Agregar"
          ) : (
            <Spinner animation="border" variant="light" size="sm" />
          )}
        </Button>
      </form>
    </FormProvider>
  );
}

export default AddProductsFormComponent;
