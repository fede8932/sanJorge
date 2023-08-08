import React from "react";
import AddProductToOrder from "../components/addProductToOrder/AddProductToOrder";
import { useForm } from "react-hook-form";
import { searchProductRequest } from "../redux/product";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrderItemsRequest,
  deleteOrderItemsRequest,
  updateCantItemsRequest,
  updatePriceItemsRequest,
} from "../redux/addOrderItems";
import { getBuyOrderRequest } from "../redux/newOrder";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { updateStatusOrder } from "../request/buyOrderRequest";

function AddProductToBuyOrderContainer(props) {
  const navigate = useNavigate();
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
    dispatch(deleteOrderItemsRequest(dataOrder)).then(() => {
      dispatch(getBuyOrderRequest(actualOrder.data.id));
    });
  };
  const updateCantOrderItem = async (dataOrderItem) => {
    dispatch(updateCantItemsRequest(dataOrderItem)).then(() => {
      dispatch(getBuyOrderRequest(actualOrder.data.id));
    });
  };
  const updatePrecOrderItem = async (dataOrderItem) => {
    dispatch(updatePriceItemsRequest(dataOrderItem)).then(() => {
      dispatch(getBuyOrderRequest(actualOrder.data.id));
    });
  };
  const confirmOrder = () => {
    Swal.fire({
      title: "Confirmar orden?",
      text: "Ya no podrás modificarla",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        updateStatusOrder({ id: actualOrder.data.id, status: "Confirm" }).then(
          () => {
            Swal.fire(
              "Orden confirmada",
              "Tu orden se ha confirmado correctamente",
              "success"
            ).then(() => {
              navigate("/");
            });
          }
        );
      }
    });
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
      fnEnd={confirmOrder}
    />
  );
}

export default AddProductToBuyOrderContainer;
