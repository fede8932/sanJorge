import React from "react";
import styles from "./addClient.module.css";
import CustomInput from "../../commonds/input/CustomInput";
import Button from "react-bootstrap/Button";
import { FormProvider } from "react-hook-form";
import SubFormAddClientContainer from "../../containers/SubFormAddClientContainer";

function AddClientComponent(props) {
  const { onSubmit, status, methods } = props;
  return (
    <div className={styles.formContainer}>
      <FormProvider {...methods}>
        <form>
          <div className={styles.subFormContainer}>
            <div className={styles.inputContainer}>
              <span className={styles.subTitle}>Datos de usuario</span>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <CustomInput
                  name="name"
                  type="text"
                  width="small"
                  placeholder="Nombre"
                  icon="fa-solid fa-id-card"
                  validate={{ required: true, maxLength: 25 }}
                />
                <CustomInput
                  name="lastName"
                  type="text"
                  width="small"
                  placeholder="Apellido"
                  icon="fa-solid fa-id-card"
                  validate={{ required: true, maxLength: 25 }}
                />
              </div>
              <CustomInput
                name="razonSocial"
                type="text"
                width="large"
                placeholder="Razon social"
                icon="fa-solid fa-id-card"
                validate={{ required: true, maxLength: 25 }}
              />
              <CustomInput
                name="cuit"
                type="text"
                width="large"
                placeholder="Cuit"
                icon="fa-solid fa-id-card"
                validate={{
                  required: true,
                  pattern: {
                    value: /^\d{2}-\d{8}-\d{1}$/,
                    message: "El CUIT debe tener el formato 99-99999999-9",
                  },
                }}
              />
              <CustomInput
                name="email"
                type="email"
                width="large"
                placeholder="Correo electrónico"
                icon="fa-regular fa-envelope"
                validate={{
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ingrese un correo electrónico válido",
                  },
                }}
              />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.subTitle}>Datos adicionales</span>
              <CustomInput
                name="calle"
                type="text"
                width="large"
                placeholder="Calle"
                icon="fa-solid fa-location-dot"
                validate={{ required: true, maxLength: 25 }}
              />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <CustomInput
                  name="altura"
                  type="text"
                  width="small"
                  placeholder="Altura"
                  icon="fa-solid fa-location-dot"
                  validate={{ required: true, maxLength: 10 }}
                />
                <CustomInput
                  name="cp"
                  type="text"
                  width="small"
                  placeholder="Código postal"
                  icon="fa-solid fa-location-dot"
                  validate={{ required: true, maxLength: 10 }}
                />
              </div>
              <CustomInput
                name="localidad"
                type="text"
                width="large"
                placeholder="Localidad"
                icon="fa-solid fa-location-dot"
                validate={{ required: true, maxLength: 25 }}
              />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <CustomInput
                  name="phone"
                  type="text"
                  width="small"
                  placeholder="Número de teléfono"
                  icon="fa-solid fa-phone"
                  validate={{
                    required: true,
                    validate: (value) => {
                      const isValid = /^\d{8,10}$/.test(value);
                      if (!isValid) {
                        return "El número de teléfono debe tener entre 8 y 10 dígitos";
                      }
                    },
                  }}
                />
                <CustomInput
                  name="coordenadas"
                  type="text"
                  width="small"
                  placeholder="Coordenadas"
                  icon="fa-solid fa-location-dot"
                  validate={{
                    required: false,
                  }}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
      <div className={styles.inputContainerLong}>
        <span className={styles.subTitle}>Set descuentos</span>
        <SubFormAddClientContainer />
      </div>
      <Button
        onClick={methods.handleSubmit(onSubmit)}
        style={{
          backgroundColor: "#673ab7",
          border: "1px solid #673ab7",
          marginTop: "35px",
        }}
      >
        Agregar
      </Button>
    </div>
  );
}

export default AddClientComponent;
