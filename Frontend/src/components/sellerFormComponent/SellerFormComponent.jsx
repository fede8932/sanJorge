import React from "react";
import styles from "./sellerForm.module.css";
import CustomInput from "../../commonds/input/CustomInput";
import Button from "react-bootstrap/Button";
import CustomSelect from "../../commonds/select/CustomSelect";
import TableContainer from "../../containers/TableContainer";
import { useForm, FormProvider } from "react-hook-form";

function SellerFormComponent(props) {
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
              obligatorio={true}
              type="text"
              width="large"
              placeholder="Nombre"
              icon="fa-solid fa-id-card"
            />
            <CustomInput
              name="lastName"
              obligatorio={true}
              type="text"
              width="large"
              placeholder="Apellido"
              icon="fa-solid fa-id-card"
            />
            <CustomInput
              name="email"
              obligatorio={true}
              type="email"
              width="large"
              placeholder="Correo electrónico"
              icon="fa-regular fa-envelope"
            />
            <CustomInput
              name="cuil"
              obligatorio={true}
              type="text"
              width="large"
              placeholder="Cuil"
              icon="fa-solid fa-id-card"
            />
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.subTitle}>Datos personales</span>
            <CustomInput
              name="calle"
              obligatorio={true}
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
                name="altura"
                obligatorio={true}
                type="text"
                width="small"
                placeholder="Altura"
                icon="fa-solid fa-location-dot"
              />
              <CustomInput
                name="cp"
                obligatorio={true}
                type="text"
                width="small"
                placeholder="Código postal"
                icon="fa-solid fa-location-dot"
              />
            </div>
            <CustomInput
              name="localidad"
              obligatorio={true}
              type="text"
              width="large"
              placeholder="Localidad"
              icon="fa-solid fa-location-dot"
            />
            <CustomInput
              name="phone"
              obligatorio={true}
              type="text"
              width="large"
              placeholder="Número de teléfono"
              icon="fa-solid fa-phone"
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
                clientes={arrayPrueba2}
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
