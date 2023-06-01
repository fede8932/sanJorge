import React from "react";
import styles from "./panel.module.css"
import NavbarContainer from "../../containers/NavbarContainer";
import SideBarContainer from "../../containers/SideBarContainer"

function PanelAdministracion(){
    return (
        <div className={styles.panelViewContainer}>
            <NavbarContainer/>
            <div className={styles.panelSubContainer}>
                <SideBarContainer />
            </div>
        </div>
    )
}

export default PanelAdministracion;