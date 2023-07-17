import React from "react";
import styles from "./addBrand.module.css";
import CustomInput from "../../commonds/input/CustomInput";
import CustomSelect from "../../commonds/select/CustomSelect";
import CustomTextArea from "../../commonds/textarea/CustomTextArea";
import Button from "react-bootstrap/esm/Button";
import { FormProvider } from "react-hook-form";

function AddBrandComponent(props) {
  const { onSubmit, status, methods } = props;
  return (
    <FormProvider {...methods}>
      <form className={styles.formContainer}>
        <div className={styles.subFormContainer}>
          <div className={styles.inputContainer}>
            <span className={styles.subTitle}>Datos generales</span>
            <CustomInput
              name="code"
              type="text"
              width="large"
              placeholder="Código de marca"
              icon="fas fa-hashtag"
            />
            <CustomInput
              name="name"
              type="text"
              width="large"
              placeholder="Nombre"
              icon="fa-solid fa-id-card"
            />
            <CustomSelect
              text="Seleccioná el proveedor"
              name="supplierId"
              validate={{ required: true }}
              arrayOptions={[{ text: "aaaa", value: "AAA" }]}
            />
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.subTitle}>Datos adicionales</span>
            <CustomTextArea
              name="notas"
              width="large"
              placeholder="En este campo puedes ingresar la descripción... (Máximo 160 caracteres)"
              type="textarea"
              validate={{ required: false, maxLength: 160 }}
            />
          </div>
        </div>
        <Button
          style={{
            backgroundColor: "#673ab7",
            border: "1px solid #673ab7",
            marginTop: "35px",
          }}
        >
          Agregar
        </Button>
      </form>
    </FormProvider>
  );
}

export default AddBrandComponent;
