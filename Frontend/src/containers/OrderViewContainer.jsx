import React from "react";
import OrderViewComponent from "../components/orderView/OrderViewComponent";

function OrderViewContainer(props) {
  return (
    <OrderViewComponent
      {...props}
    />
  );
}

export default OrderViewContainer;
