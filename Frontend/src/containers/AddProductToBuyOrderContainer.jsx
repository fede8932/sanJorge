import React from "react";
import AddProductToOrder from "../components/addProductToOrder/AddProductToOrder";
import { useForm } from "react-hook-form";
import { searchProductRequest } from "../redux/product";
import { useDispatch, useSelector } from "react-redux";

function AddProductToBuyOrderContainer(props) {
  const methods = useForm();
  const dispatch = useDispatch();
  const productPages = useSelector((state) => state.product);
  const searchProd = (data) => {
    dispatch(searchProductRequest(data.dataSearch));
  };
  return (
    <AddProductToOrder
      {...props}
      methods={methods}
      onSubmit={searchProd}
      productPages={productPages}
    />
  );
}

export default AddProductToBuyOrderContainer;
