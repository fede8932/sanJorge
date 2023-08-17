import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SearchSupplierComponent from "../components/searchSupplier/SearchSupplierComponent";
import { getSuppliersByTextRequest } from "../redux/searchSupplier";
import { useLocation } from "react-router-dom";
import SearchRepSupplierComponent from "../components/searchSupplier/SearchRepSupplierComponent";

function SearchSupplierContainer(props) {
  const { pathname } = useLocation();
  const methods = useForm();
  const dispatch = useDispatch();
  const searchSupplier = (text) => {
    dispatch(getSuppliersByTextRequest(text.campo));
  };
  const suppliers = useSelector((state) => state.searchSuppliers);
  return (
    <>
      {pathname == "/search/supplier" ? (
        <SearchSupplierComponent
          methods={methods}
          onSubmit={searchSupplier}
          list={suppliers}
        />
      ) : (
        <SearchRepSupplierComponent
          methods={methods}
          onSubmit={searchSupplier}
          list={suppliers}
        />
      )}
    </>
  );
}

export default SearchSupplierContainer;
