import React, { useEffect } from "react";
import AddProductToSellOrder from "../components/addProductoToSellOrder/AddProductToSellOrder";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { searchProductsRequest } from "../redux/product";
import { deleteSellOrder, getBuyOrderRequest, newBuyOrderRequest } from "../redux/newOrder";
import { addOrderItemsRequest, deleteOrderItemsRequest, updateCantItemsRequest } from "../redux/addOrderItems";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function AddProductToSellOrderContainer(props) {
  const methods = useForm();
  const actualOrder = useSelector((state) => state.newBuyOrder);
  const navigate = useNavigate();
  const productPages = useSelector((state) => state.product);
  const listOrderItems = useSelector((state) => state.listOrderItems);
  const dispatch = useDispatch();
  const searchProd = (data) => {
    dispatch(searchProductsRequest(data.dataSearch));
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
  const cancelar = (id) => {
    Swal.fire({
      title: "Estás seguro?",
      text: "El presupuesto se eliminará",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteSellOrder(id)).then(() => {
          Swal.fire(
            "Eliminado!",
            "Has eliminado el presupuesto con éxito",
            "success"
          ).then(() => {
            navigate("/");
          });
        });
      }
    });
  };
  useEffect(() => {
    dispatch(newBuyOrderRequest({ supplier: "nosupplier" }));
  }, []);
  return (
    <AddProductToSellOrder
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
      cancel={cancelar}
    />
  );
}

export default AddProductToSellOrderContainer;
