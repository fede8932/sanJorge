import React, { useEffect, useState } from "react";
import AddClientComponent from "../components/addClient/AddClientComponent";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSuppliers } from "../request/supplierRequest";

function AddClientContainer(props) {
  const [supplierList, setSupplierList] = useState([]);
  const createSupplierStatus = useSelector((state) => state.supplier.loading);
  const methods = useForm();
  const dispatch = useDispatch();
  const addSupplier = (data) => {
    console.log(data);
    // dispatch(supplierCreateRequest(data))
    //   .then((res) => {
    //     console.log("Registrado", res);
    //     if (res.error) {
    //       Swal.fire({
    //         title: "Error!",
    //         text: "No se pudo guardar tu registro",
    //         icon: "error",
    //         confirmButtonText: "Cerrar",
    //       });
    //       return;
    //     }
    //     Swal.fire({
    //       icon: "success",
    //       title: "Registrado con éxito",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //     methods.reset();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     Swal.fire({
    //       title: "Error!",
    //       text: "No se pudo registrar",
    //       icon: "error",
    //       confirmButtonText: "Cerrar",
    //     });
    //   });
  };
  useEffect(() => {
    async function fetchSuppliers() {
      const suppliers = await getSuppliers();
      setSupplierList(suppliers);
    }
    fetchSuppliers();
  }, []);
  return (
    <AddClientComponent
      {...props}
      suppliers={supplierList}
      onSubmit={addSupplier}
      status={createSupplierStatus}
      methods={methods}
    />
  );
}

export default AddClientContainer;
