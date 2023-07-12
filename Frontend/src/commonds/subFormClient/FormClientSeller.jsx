import React from "react";
import styles from "./formClient.module.css";
import Button from "react-bootstrap/Button";
import { FormProvider } from "react-hook-form";
import CustomSelect from "../select/CustomSelect";

const FormClientSeller = (props) => {
  const { selMethods, onSubmitSeller } = props;
  const arrayPrueba = ["Damian Cano", "Juan Martinez", "Sofia Altamirano"]; //los que esten asociados no deben aparecer

  return (
    <FormProvider {...selMethods}>
      <form
        className={styles.containerTable1}
        onSubmit={selMethods.handleSubmit(onSubmitSeller)}
      >
        <CustomSelect
          name="vendedor"
          text="Seleccioná un vendedor si deseas asociarlo"
          clientes={arrayPrueba}
          validate={{ required: true }}
        />
        <Button
          className={styles.selectButton}
          style={{
            backgroundColor: "#673ab7",
            border: "1px solid #673ab7",
          }}
        >
          Asociar
        </Button>
      </form>
    </FormProvider>
  );
};

export default FormClientSeller;
