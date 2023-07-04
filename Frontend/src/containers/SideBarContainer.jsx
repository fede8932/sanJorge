import React from "react";
import SideBarComponent from "../components/sidebar/SidebarComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function SideBarContainer() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const navigate = useNavigate();
  return <SideBarComponent status={isOpen} fnNavigate={navigate} />;
}

export default SideBarContainer;
