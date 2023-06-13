import React from "react";
import styles from "./addSupplier.module.css";
import { useForm } from "react-form";
import CustomInput from "../../commonds/input/CustomInput";
import CustomSelect from "../../commonds/select/CustomSelect";
import Button from "react-bootstrap/Button";
import TableContainer from "../../containers/TableContainer";
import CustomTextArea from "../../commonds/textarea/CustomTextArea";

function AddSupplier() {
  const { Form, meta, values, getFormProps, getFieldProps } = useForm({
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const arrayPrueba = ["Pepito SRL", "Juancito S.A", "Fulanito"]; //los que esten asociados no deben aparecer
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
      <h6 className={styles.formTitle}>Registrar proveedor</h6>
      <div>
        <Form className={styles.formContainer}>
          <div className={styles.subFormContainer}>
            <div className={styles.inputContainer}>
              <span className={styles.subTitle}>Datos comerciales</span>
              <CustomInput
                type="text"
                width="large"
                placeholder="Razón social"
                icon="fa-solid fa-id-card"
              />
              <CustomInput
                type="text"
                width="large"
                placeholder="Cuit"
                icon="fa-solid fa-id-card"
              />
              <CustomTextArea
                width="large"
                placeholder="En este campo puedes ingresar descripciones... (Máximo 160 caracteres)"
                type="textarea"
              />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.subTitle}>Datos de contacto</span>
              <CustomInput
                type="text"
                width="large"
                placeholder="Calle"
                icon="fa-solid fa-location-dot"
              />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <CustomInput
                  type="text"
                  width="small"
                  placeholder="Altura"
                  icon="fa-solid fa-location-dot"
                />
                <CustomInput
                  type="text"
                  width="small"
                  placeholder="Código postal"
                  icon="fa-solid fa-location-dot"
                />
              </div>
              <CustomInput
                type="text"
                width="large"
                placeholder="Localidad"
                icon="fa-solid fa-location-dot"
              />
              <CustomInput
                type="text"
                width="large"
                placeholder="Número de teléfono"
                icon="fa-solid fa-phone"
              />
            </div>
          </div>
          <div className={styles.inputContainerLong}>
            <span className={styles.subTitle}>Representantes</span>
            <div className={styles.divContainer}>
              <div className={styles.containerTable2}>
                <CustomInput
                  type="text"
                  width="large"
                  placeholder="Nombre"
                  icon="fa-solid fa-id-card"
                />
                <CustomInput
                  type="text"
                  width="large"
                  placeholder="Apellido"
                  icon="fa-solid fa-id-card"
                />
                <CustomInput
                  type="email"
                  width="large"
                  placeholder="Correo electrónico"
                  icon="fa-regular fa-envelope"
                />
                <CustomInput
                  type="text"
                  width="large"
                  placeholder="Número de teléfono"
                  icon="fa-solid fa-phone"
                />
              </div>
              <div className={styles.containerTable2}>
                <CustomTextArea
                  width="large"
                  placeholder="En este campo puedes ingresar datos adicionales... (Máximo 160 caracteres)"
                  type="textarea"
                />
              </div>
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

export default AddSupplier;
