import React from "react";
import NavbarComponent from "../components/navbar/NavbarComponent";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/sidebar";

function NavbarContainer() {
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  
  return <NavbarComponent fnSidebar={handleToggleSidebar}/>;
}

export default NavbarContainer;
