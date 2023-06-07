import React from "react";
import styles from "./addUser.module.css";
import { useForm } from "react-form";
import CustomInput from "../../commonds/input/CustomInput";
import CustomSelect from "../../commonds/select/CustomSelect";
import Button from "react-bootstrap/Button";
import TableContainer from "../../containers/TableContainer";

function AddUser() {
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
      <h6 className={styles.formTitle}>Registrar vendedor</h6>
      <div>
        <Form className={styles.formContainer}>
          <div className={styles.subFormContainer}>
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
                type="text"
                width="large"
                placeholder="Cuil"
                icon="fa-solid fa-id-card"
              />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.subTitle}>Datos personales</span>
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
            <span className={styles.subTitle}>Set comisiones</span>
            <div className={styles.divContainer}>
              <div className={styles.containerTable1}>
                <div className={styles.subContainer}>
                  <CustomInput
                    width="small"
                    placeholder="Comisión base"
                    icon="fas fa-percentage"
                    type="number"
                    min="0"
                    max="15"
                    step="0.1"
                  />
                  <CustomInput
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
                <TableContainer proveedores={arrayPrueba3} />
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

export default AddUser;
