import React from "react";
import styles from "./sidebar.module.css";
import CustomButton from "../../commonds/button/CustomButton";
import Separador from "../../commonds/separador/Separador";
import CustomAcordion from "../../commonds/acordion/CustomAcordion";

function SideBarComponent(props) {
  const { status, fnNavigate } = props;
  return (
    <div
      className={`${styles.sidebarContainer} ${
        status ? "" : `${styles.close}`
      }`}
    >
      <div className={styles.section}>
        <h5 className={styles.sideTitle}>Dashboard</h5>
        <CustomButton
          props={{
            buttonStyle: "sideOptionButton",
            icon: "fas fa-tachometer-alt",
            iconStyle: "sideIconGri",
            iconHoverStyle: "sideIconVio",
            textButton: "Dashbord",
          }}
        />
      </div>
      <Separador props={{ clase: "sideSeparador" }} />
      <div className={styles.section}>
        <h5 className={styles.sideTitle}>Registro</h5>
        <CustomAcordion
          props={{
            textButton: "Usuarios",
            icon01: "fa-solid fa-user",
            items: [
              {
                textButton: "Registrar vendedor",
                fn: () => {
                  fnNavigate("/add/seller");
                },
              },
              {
                textButton: "Registrar cliente",
                fn: () => {
                  fnNavigate("/add/client");
                },
              },
              {
                textButton: "Registrar proveedor",
                fn: () => {
                  fnNavigate("/add/supplier");
                },
              },
            ],
          }}
        />
        <CustomAcordion
          props={{
            textButton: "Modelos",
            icon01: "fa fa-box",
            items: [
              {
                textButton: "Registrar marca",
                fn: () => {
                  fnNavigate("/add/brand");
                },
              },
              {
                textButton: "Registrar producto",
                fn: () => {
                  fnNavigate("/add/product");
                },
              },
            ],
          }}
        />
      </div>
      <Separador props={{ clase: "sideSeparador" }} />
      <div className={styles.section}>
        <h5 className={styles.sideTitle}>Administración</h5>
        <CustomAcordion
          props={{
            textButton: "Usuarios",
            icon01: "fa fa-smile",
            items: [
              {
                textButton: "Buscar vendedor",
                fn: () => {
                  fnNavigate("search/seller");
                },
              },
              {
                textButton: "Buscar cliente",
                fn: () => {
                  fnNavigate("search/client");
                },
              },
            ],
          }}
        />
        <CustomAcordion
          props={{
            textButton: "Proveedores",
            icon01: "fa fa-dolly",
            items: [
              {
                textButton: "Buscar proveedor",
                fn: () => {
                  fnNavigate("search/supplier");
                },
              },
              {
                textButton: "Representantes",
                fn: () => {
                  fnNavigate("search/supplier/representative");
                },
              },
            ],
          }}
        />
      </div>
      <Separador props={{ clase: "sideSeparador" }} />
      <div className={styles.section}>
        <h5 className={styles.sideTitle}>Registros</h5>
        <CustomAcordion
          props={{
            textButton: "Modelos",
            icon01: "fa fa-tag",
            items: [
              {
                textButton: "Marcas",
                fn: () => {
                  fnNavigate("/search/brand");
                },
              },
              {
                textButton: "Productos",
                fn: () => {
                  fnNavigate("/search/product");
                },
              },
            ],
          }}
        />
        <CustomAcordion
          props={{
            textButton: "Compras",
            icon01: "fa fa-tag",
            items: [
              {
                textButton: "Nueva orden de compra",
                fn: () => {
                  fnNavigate("/new/buy");
                },
              },
              {
                textButton: "Buscar orden de compra",
                fn: () => {
                  console.log("02");
                },
              },
            ],
          }}
        />
        <CustomAcordion
          props={{
            textButton: "Ventas",
            icon01: "fa fa-smile",
            items: [
              {
                textButton: "Nuevo presupuesto",
                fn: () => {
                  fnNavigate("/new/sell");
                },
              },
              {
                textButton: "Buscar venta",
                fn: () => {
                  console.log("02");
                },
              },{
                textButton: "Buscar venta o presupuesto",
                fn: () => {
                  console.log("01");
                },
              },
            ],
          }}
        />
        <CustomAcordion
          props={{
            textButton: "Comprobantes",
            icon01: "fa fa-dolly",
            items: [
              {
                textButton: "Generar comprobante",
                fn: () => {
                  console.log("01");
                },
              },
              {
                textButton: "Buscar comprobantes",
                fn: () => {
                  console.log("02");
                },
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default SideBarComponent;
