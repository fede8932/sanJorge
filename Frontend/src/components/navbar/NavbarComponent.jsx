import React, { useState } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo/logo.png";
import CustomButton from "../../commonds/button/CustomButton";
import CustomSearch from "../../commonds/search/CustomSearch";
import CustomMenu from "../../commonds/menu/CustomMenu";

function NavbarComponent(props) {
  const { fnSidebar } = props;
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.titleLogo}>
        <div>
          <img className={styles.logo} src={logo} alt="Logo" />
          <h1 className={styles.title}>Ad panel</h1>
        </div>
        <CustomButton
          props={{
            buttonStyle: "menuButton",
            icon: "fa-solid fa-bars",
            iconStyle: "menuIconVio",
            iconHoverStyle: "menuIconBla",
            fnSidebar: fnSidebar,
          }}
        />
      </div>
      <div className={styles.barContainer}>
        <CustomSearch />
        <div className={styles.perfilContainer}>
          <CustomButton
            props={{
              buttonStyle: "menuButton",
              icon: "fa-regular fa-bell",
              iconStyle: "menuIconVio",
              iconHoverStyle: "menuIconBla",
            }}
          />
          <CustomMenu />
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
