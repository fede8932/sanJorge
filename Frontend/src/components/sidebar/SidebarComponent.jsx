import React from "react";
import styles from "./sidebar.module.css";
import CustomButton from "../../commonds/button/CustomButton";
import Separador from "../../commonds/separador/Separador";
import CustomAcordion from "../../commonds/acordion/CustomAcordion";

function SideBarComponent(props) {
  const { status } = props;
  return (
    <div className={`${styles.sidebarContainer} ${status ? "" : `${styles.close}`}`}>
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
                  console.log("01");
                },
              },
              {
                textButton: "Registrar cliente",
                fn: () => {
                  console.log("02");
                },
              },
              {
                textButton: "Registrar proveedor",
                fn: () => {
                  console.log("03");
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
                  console.log("01");
                },
              },
              {
                textButton: "Registrar producto",
                fn: () => {
                  console.log("02");
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
            textButton: "Vendedores",
            icon01: "fa fa-tag",
            items: [
              {
                textButton: "Buscar vendedor",
                fn: () => {
                  console.log("01");
                },
              },
              {
                textButton: "Editar vendedor",
                fn: () => {
                  console.log("02");
                },
              },
            ],
          }}
        />
        <CustomAcordion
          props={{
            textButton: "Clientes",
            icon01: "fa fa-smile",
            items: [
              {
                textButton: "Buscar cliente",
                fn: () => {
                  console.log("01");
                },
              },
              {
                textButton: "Editar cliente",
                fn: () => {
                  console.log("02");
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
                  console.log("01");
                },
              },
              {
                textButton: "Editar proveedor",
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
