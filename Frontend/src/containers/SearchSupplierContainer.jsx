import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SearchSupplierComponent from "../components/searchSupplier/SearchSupplierComponent";
import { getSuppliersByTextRequest } from "../redux/searchSupplier";

function SearchSupplierContainer(props) {
  const methods = useForm();
  const dispatch = useDispatch();
  const searchSupplier = (text) => {
    dispatch(getSuppliersByTextRequest(text.campo));
  };
  const suppliers = useSelector((state) => state.searchSuppliers);
  return (
    <SearchSupplierComponent
      methods={methods}
      onSubmit={searchSupplier}
      list={suppliers}
    />
  );
}

export default SearchSupplierContainer;
