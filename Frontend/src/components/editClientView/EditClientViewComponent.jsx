import React from "react";
import styles from "./editClientView.module.css";
import Button from "react-bootstrap/esm/Button";
import CustomInput from "../../commonds/putInput/CustomInput";
import { FormProvider } from "react-hook-form";
import Spinner from "react-bootstrap/esm/Spinner";
import CustomSelect from "../../commonds/select/CustomSelect";

function EditClientViewComponent(props) {
  const { client, update, methods, loading, sellers } = props;
  return (
    <div className={styles.editContainer}>
      <div className={styles.dataContainer}>
        <span className={styles.inputLabel}>
          User ID:<span className={styles.dataUser}>{client.user.id}</span>
        </span>
        <span>
          Client ID:<span className={styles.dataUser}>{client.id}</span>
        </span>
        <span>
          Cliente:
          <span
            className={styles.dataUser}
          >{`${client.user.name} ${client.user.lastName}`}</span>
        </span>
        <span>
          Vendedor Asigando:
          <span
            className={styles.dataUser}
          >{`${client.seller.user.name} ${client.seller.user.lastName}`}</span>
        </span>
        <span>
          IVA:<span className={styles.dataUser}>{client.iva}</span>
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
                readOnly={true}
                name="name"
                type="text"
                width="large"
                placeholder="Nombre"
                icon="fa-solid fa-id-card"
                validate={{ required: false }}
                defaultValue={client.user.name}
              />
              <span className={styles.inputLabel}>Apellido</span>
              <CustomInput
                readOnly={true}
                name="lastName"
                type="text"
                width="large"
                placeholder="Apellido"
                icon="fa-solid fa-id-card"
                validate={{ required: false }}
                defaultValue={client.user.lastName}
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
                defaultValue={client.user.email}
              />
              <span className={styles.inputLabel}>CUIL</span>
              <CustomInput
                readOnly={true}
                name="cuil"
                type="text"
                width="large"
                placeholder="Cuil"
                icon="fa-solid fa-id-card"
                validate={{ required: false }}
                defaultValue={client.cuit}
              />
              <span className={styles.inputLabel}>Localidad</span>
              <CustomInput
                name="localidad"
                type="text"
                width="large"
                placeholder="Localidad"
                icon="fa-solid fa-location-dot"
                validate={{ required: true, maxLength: 25 }}
                defaultValue={client.localidad}
              />
            </div>
            <div className={styles.rigthInputContainer}>
              <span className={styles.inputLabel}>Calle</span>
              <CustomInput
                name="calle"
                type="text"
                width="large"
                placeholder="Calle"
                icon="fa-solid fa-location-dot"
                validate={{ required: true, maxLength: 25 }}
                defaultValue={client.calle}
              />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "50%", padding: "0px 5px 0px 0px" }}>
                  <span className={styles.inputLabel}>Altura</span>
                  <CustomInput
                    name="altura"
                    type="text"
                    width="complete"
                    placeholder="Altura"
                    icon="fa-solid fa-location-dot"
                    validate={{ required: true, maxLength: 10 }}
                    defaultValue={client.altura}
                  />
                </div>
                <div style={{ width: "50%", padding: "0px 0px 0px 5px" }}>
                  <span className={styles.inputLabel}>Código postal</span>
                  <CustomInput
                    name="codigoPostal"
                    type="text"
                    width="complete"
                    placeholder="Código postal"
                    icon="fa-solid fa-location-dot"
                    validate={{ required: true, maxLength: 10 }}
                    defaultValue={client.codigoPostal}
                  />
                </div>
              </div>
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
                defaultValue={client.telefono}
              />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "50%", padding: "0px 5px 0px 0px" }}>
                  <span className={styles.inputLabel}>Vendedor</span>
                  <CustomSelect
                    name="sellerId"
                    text="Seleccioná un vendedor"
                    arrayOptions={sellers}
                    validate={{ required: false }}
                  />
                </div>
                <div style={{ width: "50%", padding: "0px 0px 0px 5px" }}>
                  <span className={styles.inputLabel}>IVA</span>
                  <CustomSelect
                    name="iva"
                    text="Seleccioná el tipo de iva"
                    arrayOptions={[
                      {
                        value: "ResponsableInscripto",
                        text: "ResponsableInscripto",
                      },
                      { value: "Monotributista", text: "Monotributista" },
                      { value: "Excento", text: "Excento" },
                      { value: "NoGravado", text: "NoGravado" },
                      { value: "Final", text: "Final" },
                    ]}
                    validate={{ required: false }}
                  />
                </div>
              </div>
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
                  "Actualizar"
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

export default EditClientViewComponent;
