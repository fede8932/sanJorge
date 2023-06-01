import React from "react";
import styles from "./sidebar.module.css";
import CustomButton from "../../commonds/button/CustomButton";
import Separador from "../../commonds/separador/Separador";

function SideBarComponent() {
  return (
    <div className={styles.sidebarContainer}>
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
      <Separador props={{clase:"sideSeparador"}}/>
    </div>
  );
}

export default SideBarComponent;
