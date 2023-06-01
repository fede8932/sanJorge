import React, { useState } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo/logo.png";
import CustomButton from "../../commonds/button/CustomButton";
import CustomSearch from "../../commonds/search/CustomSearch";
import avatar from "../../assets/avatars/mujer.png";

function NavbarComponent() {
  const [classIcon, setClassIcon] = useState("configIconBlue");
  const [classConfigContainer, setClassConfigContainer] = useState(
    "configContainerWhite"
  );
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
          <div
            onMouseOver={() => {
              setClassIcon("configIconWhite");
              setClassConfigContainer("configContainerBlue");
            }}
            onMouseOut={() => {
              setClassIcon("configIconBlue");
              setClassConfigContainer("configContainerWhite");
            }}
            className={styles[classConfigContainer]}
          >
            <div className={styles.avatarContainer}>
              <img
                src={avatar}
                alt="Avatar de usuario"
                style={{ heigth: "25px", width: "25px" }}
              />
            </div>
            <div>
              <i className={`${styles[classIcon]} fa-solid fa-gear`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
