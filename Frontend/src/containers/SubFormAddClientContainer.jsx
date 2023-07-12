import React, { useState, useEffect } from "react";
import SubFormAddClientComponent from "../components/subFormAddClientComponent/SubFormAddClient";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSupplierRequest } from "../redux/supplier";

function SubFormAddClientContainer(props) {
  const [tableItems, setTableItems] = useState([]);
  const dispatch = useDispatch();
  const selMethods = useForm();
  const supMethods = useForm();
  const addSupplier = (data) => {
    const arraySupplier = tableItems;
    if (arraySupplier.length !== 0) {
      const repetido = arraySupplier.map((sup) => {
        if (data.razonSocial == sup.razonSocial) return true;
        return null;
      });
      if (repetido.includes(true)) return;
    }
    arraySupplier.push(data);
    setTableItems(arraySupplier);
  };
  useEffect(() => {
    dispatch(getSupplierRequest())
  }, []);
  return (
    <SubFormAddClientComponent
      {...props}
      supMethods={supMethods}
      selMethods={selMethods}
      onSubmitSupplier={addSupplier}
      tableItems={tableItems}
    />
  );
}

export default SubFormAddClientContainer;
