import React from "react";
import AddProductToOrder from "../components/addProductToOrder/AddProductToOrder";
import { useForm } from "react-hook-form";
import { searchProductPageRequest } from "../redux/productPageList";
import { useDispatch, useSelector } from "react-redux";

function AddProductToBuyOrderContainer(props) {
  const methods = useForm();
  const dispatch = useDispatch();
  const productPages = useSelector((state) => state.productByPages);
  const searchProduct = (data) => {
    data.cant = 8;
    data.page = 1;
    dispatch(searchProductPageRequest(data));
  };
  return (
    <AddProductToOrder
      {...props}
      methods={methods}
      onSubmit={searchProduct}
      productPages={productPages}
    />
  );
}

export default AddProductToBuyOrderContainer;
