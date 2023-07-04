import React from "react";
import styles from "./addBrand.module.css";
import { useForm } from "react-form";
import CustomInput from "../../commonds/input/CustomInput";
import CustomSelect from "../../commonds/select/CustomSelect";
import Button from "react-bootstrap/Button";
import TableContainer from "../../containers/TableContainer";
import CustomTextArea from "../../commonds/textarea/CustomTextArea";

function AddBrand() {
  const { Form, meta, values, getFormProps, getFieldProps } = useForm({
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const arrayPrueba = ["Damian Cano", "Juan Martinez", "Sofia Altamirano"]; //los que esten asociados no deben aparecer
  const arrayPrueba2 = ["Corven", "SKF", "Katana"];
  const arrayPrueba3 = [
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
    { razonSocial: "fulanito", comision: "0.003" },
  ];
  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Registrar marca</h6>
      <div>
        <Form className={styles.formContainer}>
          <div className={styles.subFormContainer}>
            <div className={styles.inputContainer}>
              <span className={styles.subTitle}>Datos generales</span>
              <CustomInput
                type="text"
                width="large"
                placeholder="Código de marca"
                icon="fas fa-hashtag"
              />
              <CustomInput
                type="text"
                width="large"
                placeholder="Nombre"
                icon="fa-solid fa-id-card"
              />
              <CustomSelect
                text="Seleccioná el proveedor"
                clientes={arrayPrueba}
              />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.subTitle}>Datos adicionales</span>
              <CustomTextArea
                width="large"
                placeholder="En este campo puedes ingresar la descripción... (Máximo 160 caracteres)"
                type="textarea"
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
        </Form>
      </div>
    </div>
  );
}

export default AddBrand;
