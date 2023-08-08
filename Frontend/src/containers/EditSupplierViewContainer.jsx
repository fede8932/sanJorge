import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import EditSupplierViewComponent from "../components/editSupplierView/EditSupplierViewComponent";
import { UpdateSuppliersRequest } from "../redux/searchSupplier";

function EditSupplierViewContainer(props) {
  const { supplier, close } = props;
  const { loading } = useSelector((state) => state.searchSuppliers);
  const methods = useForm();
  const dispatch = useDispatch();
  const updateSupplier= (data) => {
    const { cuit, razonSocial, ...supplierData } = data;
    supplierData.altura = Number(supplierData.altura);
    supplierData.codigoPostal = Number(supplierData.codigoPostal);
    supplierData.id = supplier.id;
    dispatch(UpdateSuppliersRequest(supplierData)).then(() => {
      close();
    });
  };
  return (
    <EditSupplierViewComponent
      {...props}
      update={updateSupplier}
      methods={methods}
      loading={loading}
    />
  );
}

export default EditSupplierViewContainer;
