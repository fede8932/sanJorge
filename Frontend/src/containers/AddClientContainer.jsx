import React, { useEffect } from "react";
import AddClientComponent from "../components/addClient/AddClientComponent";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { clientCreateRequest } from "../redux/client";
import { getSellersRequest } from "../redux/seller";

function AddClientContainer(props) {
  const createClientStatus = useSelector((state) => state.client.loading);
  const methods = useForm();
  const dispatch = useDispatch();
  const addClient = (data) => {
    dispatch(clientCreateRequest(data))
      .then((res) => {
        if (res.error) {
          Swal.fire({
            title: "Error!",
            text: "No se pudo guardar tu registro",
            icon: "error",
            confirmButtonText: "Cerrar",
          });
          return;
        }
        Swal.fire({
          icon: "success",
          title: "Registrado con éxito",
          showConfirmButton: false,
          timer: 1500,
        });
        methods.reset();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error!",
          text: "No se pudo registrar",
          icon: "error",
          confirmButtonText: "Cerrar",
        });
      });
  };
  useEffect(()=>{
    dispatch(getSellersRequest())
  },[])
  return (
    <AddClientComponent
      {...props}
      onSubmit={addClient}
      status={createClientStatus}
      methods={methods}
    />
  );
}

export default AddClientContainer;
