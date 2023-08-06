import React, { useState } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo/logo.png";
import CustomButton from "../../commonds/button/CustomButton";
import CustomSearch from "../../commonds/search/CustomSearch";
import avatar from "../../assets/avatars/mujer.png";
import CustomMenu from "../../commonds/menu/CustomMenu";

function NavbarComponent(props) {
  const { fnSidebar } = props;
  const [classIcon, setClassIcon] = useState("configIconBlue");
  const [classConfigContainer, setClassConfigContainer] = useState(
    "configContainerWhite"
  );
  const [menuStatus, setMenuStatus] = useState(false);
  console.log(menuStatus);
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
          <div className="dropdown">
            <div
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onMouseOver={() => {
                setClassIcon("configIconWhite");
                setClassConfigContainer("configContainerBlue");
              }}
              onMouseOut={() => {
                setClassIcon("configIconBlue");
                setClassConfigContainer("configContainerWhite");
              }}
              className={`${styles[classConfigContainer]} dropdown-toggle`}
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
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
