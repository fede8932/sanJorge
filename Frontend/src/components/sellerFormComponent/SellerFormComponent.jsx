import React from "react";
import styles from "./sellerForm.module.css";
import CustomInput from "../../commonds/input/CustomInput";
import Button from "react-bootstrap/Button";
import CustomSelect from "../../commonds/select/CustomSelect";
import TableContainer from "../../containers/TableContainer";
import { useForm, FormProvider } from "react-hook-form";

function SellerFormComponent(props) {
  const { suppliers } = props
  const methods = useForm();
  const onSubmit = (data) => console.log(data);
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
    <FormProvider {...methods}>
      <form
        className={styles.formContainer}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className={styles.subFormContainer}>
          <div className={styles.inputContainer}>
            <span className={styles.subTitle}>Datos de usuario</span>
            <CustomInput
              name="name"
              type="text"
              width="large"
              placeholder="Nombre"
              icon="fa-solid fa-id-card"
              validate={{ required: true, maxLength: 25 }}
            />
            <CustomInput
              name="lastName"
              type="text"
              width="large"
              placeholder="Apellido"
              icon="fa-solid fa-id-card"
              validate={{ required: true, maxLength: 25 }}
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
            <CustomInput
              name="cuil"
              type="text"
              width="large"
              placeholder="Cuil"
              icon="fa-solid fa-id-card"
              validate={{
                required: true,
                pattern: {
                  value: /^\d{2}-\d{8}-\d{1}$/,
                  message: "El CUIT debe tener el formato 99-99999999-9",
                },
              }}
            />
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.subTitle}>Datos personales</span>
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
            <CustomInput
              name="phone"
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
        </div>
        <div className={styles.inputContainerLong}>
          <span className={styles.subTitle}>Set comisiones</span>
          <div className={styles.divContainer}>
            <div className={styles.containerTable1}>
              <div className={styles.subContainer}>
                <CustomInput
                  name="comBase"
                  width="small"
                  placeholder="Comisión base"
                  icon="fas fa-percentage"
                  type="number"
                  min="0"
                  max="15"
                  step="0.1"
                />
                <CustomInput
                  name="comOfer"
                  width="small"
                  placeholder="Comisión oferta"
                  icon="fas fa-tags"
                  type="number"
                  min="0"
                  max="15"
                  step="0.1"
                />
              </div>
              <CustomSelect
                text="Seleccioná un cliente si deseas asociarlo"
                clientes={arrayPrueba}
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
            </div>
            <div className={styles.containerTable1}>
              <CustomSelect
                text="Seleccioná un proveedor"
                clientes={suppliers}
              />
              <CustomInput
              name="comision"
              width="small"
              placeholder="Comisión"
              icon="fas fa-percentage"
              type="number"
              min="0"
              max="15"
              step="0.1"
            />
              <Button
                className={styles.selectButton}
                style={{
                  backgroundColor: "#673ab7",
                  border: "1px solid #673ab7",
                }}
              >
                Agregar
              </Button>
            </div>
            <div className={styles.containerTable2}>
              <TableContainer
                proveedores={arrayPrueba3}
                indicadores={["Proveedor", "% Comisión"]}
              />
            </div>
          </div>
        </div>
        <Button
          type="submit"
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

export default SellerFormComponent;
