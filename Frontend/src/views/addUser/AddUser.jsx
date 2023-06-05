import React from "react";
import styles from "./addUser.module.css";
import { useForm } from "react-form";
import CustomInput from "../../commonds/input/CustomInput";

function AddUser() {
  const { Form, meta, values, getFormProps, getFieldProps } = useForm({
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Registrar vendedor</h6>
      <div>
        <Form className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <span className={styles.subTitle}>Datos de usuario</span>
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
              type="password"
              width="large"
              placeholder="Contraseña"
              icon="fa-solid fa-key"
            />
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.subTitle}>Datos personales</span>
            <CustomInput
              type="text"
              width="large"
              placeholder="Cuil"
              icon="fa-solid fa-id-card"
            />
            <CustomInput
              type="text"
              width="large"
              placeholder="Calle"
              icon="fa-solid fa-location-dot"
            />
            <div
              style={{
                display: "flex",
                width: "92%",
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
        </Form>
      </div>
    </div>
  );
}

export default AddUser;
