import React from "react";
import FormSelectClientSellOrder from "../components/formSelectSellOrder/FormSelectClientSellOrder";
import { useDispatch, useSelector } from "react-redux";
import { getClientByTextRequest } from "../redux/searchClient";
import Swal from "sweetalert2";
import { updateClientStatusOrder } from "../request/buyOrderRequest";
import { useNavigate } from "react-router";

function FormSelectClientContainer(props) {
  const navigate = useNavigate();
  const client = useSelector((state) => state.searchClients);
  const order = useSelector((state) => state.newBuyOrder);
  const dispatch = useDispatch();
  const searchClient = (text) => {
    dispatch(getClientByTextRequest(text.campo));
  };
  const confirm = () => {
    Swal.fire({
      title: "Estás seguro?",
      text: "Vas a confirmar una compra y ya no podrás modificarla.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        updateClientStatusOrder({
          id: order.data.id,
          status: "Confirm",
          clientId: client.data[0].id,
        }).then(() => {
          Swal.fire(
            "Orden de venta",
            "Se ha registrado la venta",
            "success"
          ).then(()=>{
            navigate("/")
          });
        });
      }
    });
  };
  return (
    <FormSelectClientSellOrder
      {...props}
      searchClient={searchClient}
      client={client.data[0]}
      confirmFn={confirm}
    />
  );
}

export default FormSelectClientContainer;
