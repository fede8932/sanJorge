import React, { useEffect } from "react";
import SubFormAddClientComponent from "../components/subFormAddClientComponent/SubFormAddClient";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSupplierRequest } from "../redux/supplier";
import { addSupplierToTable } from "../redux/tableItems";

function SubFormAddClientContainer(props) {
  const tItems = useSelector((state) => state.tableItems.data);
  const dispatch = useDispatch();
  const supMethods = useForm();
  const addSupplier = (data) => {
    data.porcentaje = parseFloat(data.porcentaje);
    dispatch(addSupplierToTable(data));
    supMethods.reset();
  };
  useEffect(() => {
    dispatch(getSupplierRequest());
  }, []);
  return (
    <SubFormAddClientComponent
      {...props}
      supMethods={supMethods}
      onSubmitSupplier={addSupplier}
      tableItems={tItems}
    />
  );
}

export default SubFormAddClientContainer;
