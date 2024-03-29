import React from "react";
import styles from "./editUserView.module.css";
import Button from "react-bootstrap/esm/Button";
import CustomInput from "../../commonds/putInput/CustomInput";
import { FormProvider } from "react-hook-form";
import Spinner from "react-bootstrap/esm/Spinner";

function EditUserViewComponent(props) {
  const { seller, update, methods, loading } = props;
  return (
    <div className={styles.editContainer}>
      <div className={styles.dataContainer}>
        <span className={styles.inputLabel}>
          User ID:<span className={styles.dataUser}>{seller.user.id}</span>
        </span>
        <span>
          Seller ID:<span className={styles.dataUser}>{seller.id}</span>
        </span>
        <span>
          Vendedor:
          <span
            className={styles.dataUser}
          >{`${seller.user.name} ${seller.user.lastName}`}</span>
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
                defaultValue={seller.user.name}
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
                defaultValue={seller.user.lastName}
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
                defaultValue={seller.user.email}
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
                defaultValue={seller.cuil}
              />
              <span className={styles.inputLabel}>Localidad</span>
              <CustomInput
                name="localidad"
                type="text"
                width="large"
                placeholder="Localidad"
                icon="fa-solid fa-location-dot"
                validate={{ required: true, maxLength: 25 }}
                defaultValue={seller.localidad}
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
                defaultValue={seller.calle}
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
                    defaultValue={seller.altura}
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
                    defaultValue={seller.codigoPostal}
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
                defaultValue={seller.telefono}
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
                    name="comisionBase"
                    width="complete"
                    placeholder="Comisión base"
                    icon="fas fa-percentage"
                    type="number"
                    min="0"
                    max="15"
                    step="0.1"
                    validate={{ required: true }}
                    defaultValue={seller.comisionBase}
                  />
                </div>
                <div style={{ width: "50%", padding: "0px 0px 0px 5px" }}>
                  <span className={styles.inputLabel}>Comisión oferta</span>
                  <CustomInput
                    name="comisionOferta"
                    width="complete"
                    placeholder="Comisión oferta"
                    icon="fas fa-tags"
                    type="number"
                    min="0"
                    max="15"
                    step="0.1"
                    validate={{ required: true }}
                    defaultValue={seller.comisionOferta}
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

export default EditUserViewComponent;
