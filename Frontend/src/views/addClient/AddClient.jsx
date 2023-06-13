import React from "react";
import styles from "./addClient.module.css";
import { useForm } from "react-form";
import CustomInput from "../../commonds/input/CustomInput";
import CustomSelect from "../../commonds/select/CustomSelect";
import Button from "react-bootstrap/Button";
import TableContainer from "../../containers/TableContainer";
import CustomTextArea from "../../commonds/textarea/CustomTextArea";

function AddClient() {
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
      <h6 className={styles.formTitle}>Registrar cliente</h6>
      <div>
        <Form className={styles.formContainer}>
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
                  type="text"
                  width="small"
                  placeholder="Nombre"
                  icon="fa-solid fa-id-card"
                />
                <CustomInput
                  type="text"
                  width="small"
                  placeholder="Apellido"
                  icon="fa-solid fa-id-card"
                />
              </div>
              <CustomInput
                type="text"
                width="large"
                placeholder="Razon social"
                icon="fa-solid fa-id-card"
              />
              <CustomInput
                type="text"
                width="large"
                placeholder="Cuit"
                icon="fa-solid fa-id-card"
              />
              <CustomInput
                type="email"
                width="large"
                placeholder="Correo electrónico"
                icon="fa-regular fa-envelope"
              />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.subTitle}>Datos adicionales</span>
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
                  placeholder="Número de teléfono"
                  icon="fa-solid fa-phone"
                />
                <CustomInput
                  type="text"
                  width="small"
                  placeholder="Coordenadas"
                  icon="fa-solid fa-location-dot"
                />
              </div>
            </div>
          </div>
          <div className={styles.inputContainerLong}>
            <span className={styles.subTitle}>Set descuentos</span>
            <div className={styles.divContainer}>
              <div className={styles.containerTable1}>
                <CustomSelect
                  text="Seleccioná un vendedor si deseas asociarlo"
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
                <CustomSelect
                  text="Seleccioná un proveedor"
                  clientes={arrayPrueba2}
                />
                <CustomInput
                  width="small"
                  placeholder="Descuento"
                  icon="fas fa-percentage"
                  type="number"
                  min="-100"
                  max="100"
                  step="0.1"
                />
              </div>
              <div className={styles.containerTable1}>
                <CustomTextArea
                  width="large"
                  placeholder="En este campo puedes ingresar comentarios adicionales... (Máximo 160 caracteres)"
                  type="textarea"
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
                <TableContainer proveedores={arrayPrueba3} indicadores={["Proveedor", "% Descuento"]} />
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

export default AddClient;
