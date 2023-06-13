import React from "react";
import styles from "./addProduct.module.css";
import { useForm } from "react-form";
import CustomInput from "../../commonds/input/CustomInput";
import CustomSelect from "../../commonds/select/CustomSelect";
import Button from "react-bootstrap/Button";
import TableContainer from "../../containers/TableContainer";
import CustomTextArea from "../../commonds/textarea/CustomTextArea";

function AddProduct() {
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
      <h6 className={styles.formTitle}>Registrar producto</h6>
      <div>
        <Form className={styles.formContainer}>
          <div className={styles.subFormContainer}>
            <div className={styles.inputContainer}>
              <span className={styles.subTitle}>Datos generales</span>
              <CustomInput
                type="text"
                width="large"
                placeholder="Código de artículo"
                icon="fa-solid fa-id-card"
              />
              <CustomInput
                type="text"
                width="large"
                placeholder="Código de barras"
                icon="fa-solid fa-id-card"
              />
              <CustomInput
                type="text"
                width="large"
                placeholder="Nombre / referencia"
                icon="fa-solid fa-id-card"
              />
              <CustomSelect
                text="Seleccioná la proveedor"
                clientes={arrayPrueba}
              />
              <CustomSelect text="Seleccioná la marca" clientes={arrayPrueba} />
            </div>
            <div className={styles.inputContainer}>
              <span className={styles.subTitle}>Datos adicionales</span>
              <CustomTextArea
                width="large"
                placeholder="En este campo puedes ingresar la descripción... (Máximo 160 caracteres)"
                type="textarea"
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
                  width="extraSmall"
                  placeholder="Precio de lista"
                  icon="fa-solid fa-location-dot"
                />
                <CustomInput
                  width="extraSmall"
                  placeholder="Porcentaje de costo"
                  icon="fas fa-percentage"
                  type="number"
                  min="-100"
                  max="100"
                  step="0.1"
                />
                <CustomInput
                  width="extraSmall"
                  placeholder="Porcentaje de venta"
                  icon="fas fa-percentage"
                  type="number"
                  min="-100"
                  max="100"
                  step="0.1"
                />
              </div>
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
                  placeholder="Oferta"
                  icon="fa-solid fa-phone"
                />
                <CustomInput
                  type="text"
                  width="small"
                  placeholder="Cantidad"
                  icon="fa-solid fa-location-dot"
                />
              </div>
                <CustomInput
                  width="extraSmall"
                  placeholder="Porcentaje de oferta"
                  icon="fas fa-percentage"
                  type="number"
                  min="-100"
                  max="100"
                  step="0.1"
                />
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

export default AddProduct;
