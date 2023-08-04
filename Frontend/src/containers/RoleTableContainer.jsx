import React from "react";
import RoleTableComponent from "../components/roleTable/RoleTableComponent";
import { UpdateStatusSellerRequest } from "../redux/searchSeller";
import { useDispatch, useSelector } from "react-redux";

function RoleTableContainer(props) {
  const dispatch = useDispatch()
  const changeStatus = (id) => {
    dispatch(UpdateStatusSellerRequest(id))
  }
  return <RoleTableComponent {...props} statusToogle={changeStatus} />;
}

export default RoleTableContainer;
