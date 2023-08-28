import React from "react";
import SubFormAddClientComponent from "../components/subFormAddClientComponent/SubFormAddClient";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addBrandToTable, delBrandToTable } from "../redux/tableItems";

function SubFormAddClientContainer(props) {
  const dispatch = useDispatch();
  const methods = useForm();
  const tItems = useSelector((state) => state.tableItems.data);
  const client = useSelector((state) => state.client.data);
  const addBrand = (data) => {
    data.porcentaje = parseFloat(data.porcentaje) / 100;
    data.brandId = parseFloat(data.brandId);
    data.clientId = client.id;
    methods.reset();
    dispatch(addBrandToTable(data));
  };
  const delBrand = (brandId, clientId) => {
    const ids = { brandId: brandId, clientId: clientId };
    dispatch(delBrandToTable(ids));
  };
  return (
    <SubFormAddClientComponent
      delFn={delBrand}
      methods={methods}
      onSubmitBrand={addBrand}
      tableItems={tItems}
    />
  );
}

export default SubFormAddClientContainer;
