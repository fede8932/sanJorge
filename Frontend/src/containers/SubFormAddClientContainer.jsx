import React, { useState, useEffect } from "react";
import SubFormAddClientComponent from "../components/subFormAddClientComponent/SubFormAddClient";
import { getSuppliers } from "../request/supplierRequest";
import { useForm } from "react-hook-form";

function SubFormAddClientContainer(props) {
  const [supplierList, setSupplierList] = useState([]);
  const [tableItems, setTableItems] = useState([]);
  const selMethods = useForm();
  const supMethods = useForm();
  const addSupplier = (data) => {
    const arraySupplier = tableItems;
    if (arraySupplier.length !== 0) {
      const repetido = arraySupplier.map((sup) => {
        if (data.razonSocial == sup.razonSocial) return true;
        return false;
      });
      if (repetido) return;
    }
    arraySupplier.push(data);
    setTableItems(arraySupplier);
  };
  useEffect(() => {
    async function fetchSuppliers() {
      const suppliers = await getSuppliers();
      setSupplierList(suppliers);
    }
    fetchSuppliers();
  }, []);
  return (
    <SubFormAddClientComponent
      {...props}
      suppliers={supplierList}
      supMethods={supMethods}
      selMethods={selMethods}
      onSubmitSupplier={addSupplier}
      tableItems={tableItems}
    />
  );
}

export default SubFormAddClientContainer;
