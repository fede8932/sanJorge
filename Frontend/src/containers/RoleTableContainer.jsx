import React from "react";
import RoleTableComponent from "../components/roleTable/RoleTableComponent";
import { UpdateStatusSellerRequest } from "../redux/searchSeller";
import { useDispatch } from "react-redux";
import { UpdateStatusClientRequest } from "../redux/searchClient";
import { DeleteRepSupplierRequest, UpdateStatusSupplierRequest } from "../redux/searchSupplier";
import Swal from "sweetalert2";

function RoleTableContainer(props) {
  const dispatch = useDispatch();
  const alert = (id, type) => {
    const text =
      type !== "repSupplier"
        ? "Vas a cambiar el estado de un usuario"
        : "Vas a cambiar el estado de un representante";
    const confirmButtonText =
      type !== "repSupplier" ? "Si, actualizar" : "Si, actualizar";
    Swal.fire({
      title: "Estas seguro?",
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmButtonText,
    }).then((result) => {
      if (result.isConfirmed) {
        switch (type) {
          case "seller":
            dispatch(UpdateStatusSellerRequest(id)).then(() => {
              Swal.fire(
                "Actualizado!",
                "Has cambiado el estado exitosamente",
                "success"
              );
            });
            break;
          case "client":
            dispatch(UpdateStatusClientRequest(id)).then(() => {
              Swal.fire(
                "Actualizado!",
                "Has cambiado el estado exitosamente",
                "success"
              );
            });
            break;
          case "supplier":
            dispatch(UpdateStatusSupplierRequest(id)).then(() => {
              Swal.fire(
                "Actualizado!",
                "Has cambiado el estado exitosamente",
                "success"
              );
            });
            break;
          case "repSupplier":
            dispatch(DeleteRepSupplierRequest(id)).then(() => {
              Swal.fire(
                "Actualizado!",
                "Has cambiado el estado exitosamente",
                "success"
              );
            });
            break;
          default:
            console.log("El valor no coincide con ningún caso");
        }
      }
    });
  };
  return <RoleTableComponent {...props} statusToogle={alert} />;
}

export default RoleTableContainer;
