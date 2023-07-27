import React, { useEffect, useState } from "react";
import FormSelectProveedorComponent from "../components/formSelectProveedor/FormSelectProveedorComponent";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSupplierRequest } from "../redux/supplier";
import { getRepresentRequest } from "../redux/representative";
import { getInfoSupplierRequest } from "../redux/infoSupplier";
import { newBuyOrderRequest } from "../redux/newOrder";

function FormSelectProveedorContainer(props) {
  const { setView } = props;
  const [selectActive, setSelectActive] = useState(true);
  const dispatch = useDispatch();
  const methods = useForm();
  const proveedores = useSelector((state) => state.supplier.data);
  const representantes = useSelector((state) => state.representatives.data);
  const infoProveedor = useSelector((state) => state.infoSupplier.data);
  const newOrderState = useSelector((state) => state.newBuyOrder);
  const fnSelect = (a) => {
    dispatch(getRepresentRequest(a)).then(() => {
      setSelectActive(false);
    });
    dispatch(getInfoSupplierRequest(a));
  };
  const next = (data) => {
    dispatch(newBuyOrderRequest(data)).then(() => {
      setView("Productos");
    });
  };
  useEffect(() => {
    dispatch(getSupplierRequest());
  }, []);
  return (
    <FormSelectProveedorComponent
      {...props}
      methods={methods}
      proveedores={proveedores}
      representantes={representantes}
      subSelectStatus={selectActive}
      onSubmit={next}
      fnSelect={fnSelect}
      infoProveedor={infoProveedor}
      orderState={newOrderState}
    />
  );
}

export default FormSelectProveedorContainer;
