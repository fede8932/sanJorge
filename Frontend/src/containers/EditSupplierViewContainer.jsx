import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import EditSupplierViewComponent from "../components/editSupplierView/EditSupplierViewComponent";
import { UpdateSuppliersRequest } from "../redux/searchSupplier";
import EditRepresentativesViewComponent from "../components/editSupplierView/EditRepresentativesViewComponent";
import { addRepresentativeRequest } from "../redux/supplier";
import { message } from "antd";

function EditSupplierViewContainer(props) {
  const { supplier, close, template } = props;
  const { loading } = useSelector((state) => state.searchSuppliers);
  const newRepLoading = useSelector((state) => state.supplier.loading);
  const methods = useForm();
  const dispatch = useDispatch();
  const updateSupplier = (data) => {
    const { ...supplierData } = data;
    supplierData.altura = Number(supplierData.altura);
    supplierData.codigoPostal = Number(supplierData.codigoPostal);
    supplierData.id = supplier.id;
    dispatch(UpdateSuppliersRequest(supplierData)).then(() => {
      close();
    });
  };
  const createRepresentative = (dataRep) => {
    dataRep.supplierId = supplier.id;
    dispatch(addRepresentativeRequest(dataRep)).then(() => {
      close();
      message.success("Registrado!", 2);
    });
  };
  return (
    <>
      {template == "supplier" ? (
        <EditSupplierViewComponent
          {...props}
          update={updateSupplier}
          methods={methods}
          loading={loading}
        />
      ) : (
        <EditRepresentativesViewComponent
          {...props}
          update={createRepresentative}
          methods={methods}
          loading={newRepLoading}
        />
      )}
    </>
  );
}

export default EditSupplierViewContainer;
