import React, { useEffect } from "react";
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
    const data = {
      text: text.campo,
      page: 1,
      pageSize: 10,
      orderByColumn: "id",
    };
    dispatch(getSuppliersByTextRequest(data));
  };
  const dataSupplier = useSelector((state) => state.searchSuppliers);
  useEffect(() => {
    const data = {
      text: "null",
      page: 1,
      pageSize: 10,
      orderByColumn: "id",
    };
    dispatch(getSuppliersByTextRequest(data));
  }, []);
  return (
    <>
      {pathname == "/search/supplier" ? (
        <SearchSupplierComponent
          methods={methods}
          onSubmit={searchSupplier}
          result={dataSupplier}
        />
      ) : (
        <SearchRepSupplierComponent
          methods={methods}
          onSubmit={searchSupplier}
          result={dataSupplier}
        />
      )}
    </>
  );
}

export default SearchSupplierContainer;
