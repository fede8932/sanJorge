import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SearchOrderComponent from "../components/searchOrder/SearchOrderComponent";
import { getOrdersByTextRequest } from "../redux/searchOrders";

function SearchOrderContainer(props) {
  const { type } = props;
  const orders = useSelector((state) => state.searchOrders);
  const methods = useForm();
  const dispatch = useDispatch();
  const search = (data) => {
    data.type = type;
    dispatch(getOrdersByTextRequest(data));
  };
  return (
    <SearchOrderComponent
      {...props}
      methods={methods}
      onSubmit={search}
      orders={orders}
    />
  );
}

export default SearchOrderContainer;
