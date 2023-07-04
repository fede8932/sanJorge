import React from "react";
import styles from "./searchProduct.module.css";
import { useForm } from "react-form";
import CustomInput from "../../commonds/input/CustomInput";
import CustomSelect from "../../commonds/select/CustomSelect";
import Button from "react-bootstrap/Button";
import LongTableContainer from "../../containers/LongTableContainer";

function SearchProduct() {
  const { Form, meta, values, getFormProps, getFieldProps } = useForm({
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const arrayPrueba = ["Damian Cano", "Juan Martinez", "Sofia Altamirano"]; //los que esten asociados no deben aparecer
  const content = [
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
  ];
  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Buscador de productos</h6>
      <div>
        <Form className={styles.formContainer}>
          <div className={styles.subFormContainer}>
            <div className={styles.inputContainer}>
              <span className={styles.subTitle}>Campos de filtrado</span>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <CustomInput
                  type="text"
                  width="extraMedium"
                  placeholder="Código de artículo"
                  icon="fas fa-hashtag"
                />
                <CustomInput
                  type="text"
                  width="extraMedium"
                  placeholder="Código de barras"
                  icon="fa-solid fa-barcode"
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
                  width="extraMedium"
                  placeholder="Nombre / marca / referencia"
                  icon="fa-solid fa-id-card"
                />
                <CustomSelect
                  text="Seleccioná la proveedor"
                  clientes={arrayPrueba}
                  width="selectContainerMedium"
                />
              </div>
            </div>
          </div>
          <Button
            style={{
              backgroundColor: "#673ab7",
              border: "1px solid #673ab7",
              marginTop: "35px",
              marginBottom: "35px",
            }}
          >
            Buscar
          </Button>
          <div className={styles.tableContainer}>
            <span className={styles.subTitle}>Detalle de productos</span>
            <div>
                <LongTableContainer colum={["Artículo", "Precio de lista", "Precio de venta", "Marca", "Stock", "Acciones"]} content={content} type="product" />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SearchProduct;
