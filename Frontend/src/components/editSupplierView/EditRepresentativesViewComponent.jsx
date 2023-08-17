import React from "react";
import styles from "./editRepresView.module.css";
import Button from "react-bootstrap/esm/Button";
import CustomInput from "../../commonds/input/CustomInput";
import { FormProvider } from "react-hook-form";
import Spinner from "react-bootstrap/esm/Spinner";
import CustomTextArea from "../../commonds/textarea/CustomTextArea";

function EditRepresentativesViewComponent(props) {
  const { supplier, methods, update, loading } = props;
  return (
    <div className={styles.editContainer}>
      <div className={styles.dataContainer}>
        <span>
          Supplier ID:<span className={styles.dataUser}>{supplier.id}</span>
        </span>
        <span>
          Proveedor:
          <span className={styles.dataUser}>{supplier.razonSocial}</span>
        </span>
        <span>
          IVA:<span className={styles.dataUser}>No definido</span>
        </span>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(update)}
          className={styles.formContainer}
        >
          <div className={styles.inputContainer}>
            <div className={styles.leftInputContainer}>
              <span className={styles.inputLabel}>Nombre</span>
              <CustomInput
                name="name"
                type="text"
                width="large"
                placeholder="Nombre"
                icon="fa-solid fa-id-card"
                validate={{ required: true }}
              />
              <span className={styles.inputLabel}>Apellido</span>
              <CustomInput
                name="apellido"
                type="text"
                width="large"
                placeholder="Apellido"
                icon="fa-solid fa-id-card"
                validate={{ required: true }}
              />
              <span className={styles.inputLabel}>Email</span>
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
              <span className={styles.inputLabel}>Teléfono</span>
              <CustomInput
                name="telefono"
                type="text"
                width="large"
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
            </div>
            <div className={styles.rigthInputContainer}>
              <span className={styles.inputLabel}>Comentarios</span>
              <CustomTextArea
                name="comentarios"
                width="medium"
                placeholder="En este campo puedes ingresar descripciones... (Máximo 160 caracteres)"
                type="textarea"
                validate={{ required: false, maxLength: 160 }}
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonSubContainer}>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#673ab7",
                  border: "1px solid #673ab7",
                  height: "35px",
                  width: "100px",
                  marginLeft: "10px",
                }}
              >
                {!loading ? (
                  "Agregar"
                ) : (
                  <Spinner animation="border" variant="light" size="sm" />
                )}
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default EditRepresentativesViewComponent;
