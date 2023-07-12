import React from "react";
import styles from "./formClient.module.css";
import CustomSelect from "../select/CustomSelect";
import CustomTextArea from "../textarea/CustomTextArea";
import CustomInput from "../input/CustomInput";
import Button from "react-bootstrap/Button";
import { FormProvider } from "react-hook-form";
import { useSelector } from "react-redux";

const FormClientSupplier = (props) => {
  const { supMethods, onSubmitSupplier } = props;
  const suppliers = useSelector((state) => state.supplier.data);
  return (
    <FormProvider {...supMethods}>
      <form className={styles.containerTable1}>
        {suppliers && (
          <CustomSelect
            name="razonSocial"
            text="Seleccioná un proveedor"
            arrayOptions={suppliers}
            validate={{ required: true }}
          />
        )}
        <CustomTextArea
          name="comentarios"
          width="large"
          placeholder="En este campo puedes ingresar comentarios adicionales... (Máximo 160 caracteres)"
          type="textarea"
          validate={{ required: false, maxLength: 160 }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CustomInput
            name="comision" //es descuento
            width="small"
            placeholder="Descuento"
            icon="fas fa-percentage"
            type="number"
            min="-100"
            max="100"
            step="0.1"
            validate={{ required: true }}
          />
          <Button
            className={styles.selectButton}
            style={{
              backgroundColor: "#673ab7",
              border: "1px solid #673ab7",
            }}
            onClick={supMethods.handleSubmit(onSubmitSupplier)}
          >
            Agregar
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormClientSupplier;
