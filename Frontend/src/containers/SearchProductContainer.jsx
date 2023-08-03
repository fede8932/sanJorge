import React, { useEffect } from "react";
import SearchProductComponent from "../components/searchProduct/SearchProductComponent";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSupplierRequest } from "../redux/supplier";
import { searchProductsRequest } from "../redux/product";

function SearchProductContainer(props) {
  const { data } = useSelector((state) => state.supplier);
  const products = useSelector((state) => state.product);
  const methods = useForm();
  const dispatch = useDispatch();
  const search = (data) => {
    dispatch(searchProductsRequest(data.campo));
  };

  useEffect(() => {
    dispatch(getSupplierRequest());
  }, []);
  return (
    <SearchProductComponent
      {...props}
      methods={methods}
      onSubmit={search}
      suppliers={data}
      products={products}
    />
  );
}

export default SearchProductContainer;
