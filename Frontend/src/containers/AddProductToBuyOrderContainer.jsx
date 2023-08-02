import React from "react";
import AddProductToOrder from "../components/addProductToOrder/AddProductToOrder";
import { useForm } from "react-hook-form";
import { searchProductRequest } from "../redux/product";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrderItemsRequest,
  deleteOrderItemsRequest,
} from "../redux/addOrderItems";
import { getBuyOrderRequest } from "../redux/newOrder";
import { updateOrderItem, updatePriceOrderItem } from "../request/buyOrderRequest";

function AddProductToBuyOrderContainer(props) {
  const actualOrder = useSelector((state) => state.newBuyOrder);
  const listOrderItems = useSelector((state) => state.listOrderItems);
  const methods = useForm();
  const dispatch = useDispatch();
  const productPages = useSelector((state) => state.product);
  const searchProd = (data) => {
    data.supplierId = actualOrder.data.supplierId;
    dispatch(searchProductRequest(data));
  };
  const addProductToOrder = (brandProduct) => {
    const { product, brand } = brandProduct;
    const objSend = {
      productId: product.id,
      brandId: brand.id,
      orderId: actualOrder.data.id,
      cantidad: 1,
    };
    dispatch(addOrderItemsRequest(objSend)).then(() => {
      dispatch(getBuyOrderRequest(actualOrder.data.id));
    });
  };
  const infoProduct = (product) => {
    console.log("anda", product, productPages, actualOrder);
  };
  const deleteOrder = (dataOrder) => {
    console.log(dataOrder);
    dispatch(deleteOrderItemsRequest(dataOrder)).then(() => {
      dispatch(getBuyOrderRequest(actualOrder.data.id));
    });
  };
  const updateCantOrderItem = async (dataOrderItem) => {
    try {
      const respuesta = await updateOrderItem(dataOrderItem);
      dispatch(getBuyOrderRequest(actualOrder.data.id));
      console.log(respuesta)
    } catch (e) {
      console.log(e);
    }
  };
  const updatePrecOrderItem = async (dataOrderItem) => {
    try {
      const respuesta = await updatePriceOrderItem(dataOrderItem);
      dispatch(getBuyOrderRequest(actualOrder.data.id));
      console.log(respuesta)
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AddProductToOrder
      {...props}
      methods={methods}
      onSubmit={searchProd}
      productPages={productPages}
      fnAdd={addProductToOrder}
      fnInfo={infoProduct}
      fnDelete={deleteOrder}
      fnUpdate={updateCantOrderItem}
      fnPrUpdate={updatePrecOrderItem}
      listOrder={listOrderItems.data}
      order={actualOrder}
    />
  );
}

export default AddProductToBuyOrderContainer;
