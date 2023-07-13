import React, { useEffect } from "react";
import SubFormAddClientComponent from "../components/subFormAddClientComponent/SubFormAddClient";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSupplierRequest } from "../redux/supplier";
import { addSupplierToTable } from "../redux/tableItems";

function SubFormAddClientContainer(props) {
  const tItems = useSelector((state) => state.tableItems.data);
  const dispatch = useDispatch();
  const selMethods = useForm();
  const supMethods = useForm();
  const addSupplier = (data) => {
    dispatch(addSupplierToTable(data));
  };
  useEffect(() => {
    dispatch(getSupplierRequest());
  }, []);
  return (
    <SubFormAddClientComponent
      {...props}
      supMethods={supMethods}
      selMethods={selMethods}
      onSubmitSupplier={addSupplier}
      tableItems={tItems}
    />
  );
}

export default SubFormAddClientContainer;
