import React from "react";
import RoleTableComponent from "../components/roleTable/RoleTableComponent";
import { UpdateStatusSellerRequest } from "../redux/searchSeller";
import { useDispatch, useSelector } from "react-redux";
import { UpdateStatusClientRequest } from "../redux/searchClient";

function RoleTableContainer(props) {
  const dispatch = useDispatch()
  const changeSellerStatus = (id) => {
    dispatch(UpdateStatusSellerRequest(id))
  }
  const changeClientStatus = (id) => {
    dispatch(UpdateStatusClientRequest(id))
  }
  return <RoleTableComponent {...props} statusSellerToogle={changeSellerStatus} statusClienToogle={changeClientStatus} />;
}

export default RoleTableContainer;
