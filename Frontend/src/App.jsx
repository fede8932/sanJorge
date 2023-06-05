import React from "react";
import "./App.css";
import LoginView from "./views/loginView/LoginView";
import NavbarContainer from "./containers/NavbarContainer";
import SideBarContainer from "./containers/SideBarContainer";
import { useSelector } from "react-redux";
import AddUser from "./views/addUser/AddUser";
import BreadCrumbContainer from "./containers/BreadCrumbContainer";

function App() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <div className="panelViewContainer">
      {/* <LoginView/>
      <PanelAdministracion /> */}
      <NavbarContainer />
      <div className="panelSubContainer">
        <SideBarContainer />
        <div className={`viewContainer ${isOpen ? "" : "big"}`}>
          <BreadCrumbContainer />
          <AddUser />
        </div>
      </div>
    </div>
  );
}

export default App;
