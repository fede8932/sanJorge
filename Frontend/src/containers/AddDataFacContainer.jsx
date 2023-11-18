import React, { useState } from "react";
import AddDataFac from "../components/addDataFac/AddDataFac";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { convertToDate, redondearADosDecimales } from "../utils";
import { updateOrderConfirmById } from "../redux/searchOrders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import orderAjust, { addOrderAjust, getOrderAjust } from "../redux/orderAjust";
import { updateStatusOrder } from "../request/buyOrderRequest";

function AddDataFacContainer(props) {
  const dispatch = useDispatch();
  // const [boolAfip, setBoolAfip] = useState(false);
  const [fecha, setFecha] = useState("");
  const dataChange = (date, dateString) => {
    setFecha(dateString);
  };
  // const stract = {
  //   afip: { value: boolAfip, setValue: setBoolAfip },
  // };
  const order = useSelector((state) => state.newBuyOrder);
  const methods = useForm();
  const navigate = useNavigate();
  const addFac = (data) => {
    data.afip = data.code != "P" ? true : false;
    data.fecha = convertToDate(fecha);
    data.type = "Factura";
    data.iva =
      data.code == "A"
        ? redondearADosDecimales(parseFloat(data.subtotal) * 0.21)
        : 0;
    data.total =
      data.code == "A"
        ? redondearADosDecimales(parseFloat(data.subtotal) * 1.21)
        : data.subtotal;
    const { numRemito, ...factura } = data;
    let totalOrder;
    if (order.data.orderAjust) {
      if (order.data.orderAjust.status == "Confirm") {
        totalOrder = order.data.orderAjust.total;
      } else {
        totalOrder = order.data.total;
      }
    }
    const noFact = data.noFact ? Number(data.noFact) : 0;
    console.log(noFact)
    const totalFac = Number(data.total) + noFact;
    if (Math.abs(totalOrder - totalFac) > 0.05) {
      Swal.fire({
        title: "Diferencia con el monto de la orden de compra",
        text: "Revisá si la factura corresponde a la orden o registrá un ajuste si es necesario",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ajustar Orden",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(getOrderAjust(order.data.id)).then((res) => {
            if (res.payload.id) {
              navigate("/buy/orden/ajuste");
              return;
            }
            dispatch(addOrderAjust(order.data.id)).then(() => {
              updateStatusOrder({ id: order.data.id, status: "Ajusted" });
              navigate("/buy/orden/ajuste");
            });
          });
        }
      });
      return;
    }
    dispatch(
      updateOrderConfirmById({
        orderId: order.data.id,
        status: "Recived",
        remito: numRemito,
        factura: factura,
      })
    ).then(() => {
      Swal.fire({
        icon: "success",
        title: "Actualización de orden exitosa",
        text: "Se guardo la factura y se generó la orden de control",
      }).then(() => {
        methods.reset();
        navigate("/");
      });
    });
  };
  const ajustFn = () => {
    Swal.fire({
      title: "Se gererará un ajuste en el pedido",
      text: "Revisá si la factura corresponde a la orden o registrá un ajuste si es necesario",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ajustar Orden",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(getOrderAjust(order.data.id)).then((res) => {
          if (res.payload.id) {
            navigate("/buy/orden/ajuste");
            return;
          }
          dispatch(addOrderAjust(order.data.id)).then(() => {
            updateStatusOrder({ id: order.data.id, status: "Ajusted" });
            navigate("/buy/orden/ajuste");
          });
        });
      }
    });
  };
  return (
    <AddDataFac
      {...props}
      methods={methods}
      addFac={addFac}
      order={order}
      // stractData={stract}
      dataChange={dataChange}
      ajustFn={ajustFn}
    />
  );
}

export default AddDataFacContainer;
