import React from "react";
import SideBarComponent from "../components/sidebar/SidebarComponent";
import { useSelector } from "react-redux";

function SideBarContainer() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  return <SideBarComponent status={isOpen} />;
}

export default SideBarContainer;
