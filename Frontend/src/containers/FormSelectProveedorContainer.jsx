import React, { useEffect } from "react";
import FormSelectProveedorComponent from "../components/formSelectProveedor/FormSelectProveedorComponent";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSupplierRequest } from "../redux/supplier";

function FormSelectProveedorContainer(props) {
  const dispatch = useDispatch();
  const methods = useForm();
  const proveedores = useSelector((state) => state.supplier.data);
  useEffect(() => {
    dispatch(getSupplierRequest());
  }, []);
  return (
    <FormSelectProveedorComponent
      {...props}
      methods={methods}
      proveedores={proveedores}
    />
  );
}

export default FormSelectProveedorContainer;
