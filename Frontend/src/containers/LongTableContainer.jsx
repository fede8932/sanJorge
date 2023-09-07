import React from "react";
import LongTableComponent from "../components/longTable/LongTableComponent";
import { useDispatch } from "react-redux";
import { getBuyOrderRequest } from "../redux/newOrder";
import { useNavigate } from "react-router";
import { getOrderItemsRequest } from "../redux/addOrderItems";
import Swal from "sweetalert2";
import {
  cancelOrderById,
  deleteOrderById,
  updateOrderConfirmById,
} from "../redux/searchOrders";
import { deleteOrderAjust } from "../request/orderAjustRequest";

function LongTableContainer(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setBuyOrder = (id) => {
    dispatch(getBuyOrderRequest(id)).then(({ payload }) => {
      dispatch(getOrderItemsRequest(payload.id)).then((res) => {
        navigate("/edit/buy");
      });
    });
  };
  const deleteOrder = (orderId) => {
    Swal.fire({
      title: "Estás Seguro?",
      text: "Vas a eliminar la orden",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteOrderById(orderId)).then(() => {
          Swal.fire(
            "Eliminado!",
            "Se ha eliminado la orden exitosamente",
            "success"
          );
        });
      }
    });
  };
  const cancelOrder = (orderId) => {
    Swal.fire({
      title: "Estás Seguro?",
      text: "Vas a cancelar la orden",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(cancelOrderById({ orderId: orderId, status: "Cancel" })).then(
          () => {
            deleteOrderAjust(orderId);
            Swal.fire(
              "Orden cancelada!",
              "Has cancelado la orden exitosamente",
              "success"
            );
          }
        );
      }
    });
  };
  const receptOrder = async (id) => {
    dispatch(getBuyOrderRequest(id)).then(() => {
      navigate("/search/buy/addfac");
    });
  };
  return (
    <LongTableComponent
      {...props}
      setBuyOrder={setBuyOrder}
      deleteOrder={deleteOrder}
      cancelOrder={cancelOrder}
      reception={receptOrder}
    />
  );
}

export default LongTableContainer;
