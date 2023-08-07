import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import EditClientViewComponent from "../components/editClientView/EditClientViewComponent";
import { getSellersRequest } from "../redux/seller";
import { UpdateClientsRequest } from "../redux/searchClient";

function EditClientViewContainer(props) {
  const { client, close } = props;
  const { loading } = useSelector((state) => state.searchSellers);
  const sellers = useSelector((state) => state.seller);
  const methods = useForm();
  const dispatch = useDispatch();
  const updateClient= (data) => {
    const { cuil, name, lastName, iva, sellerId, ...clientData } = data;
    clientData.iva = iva != "" ? iva : client.iva
    clientData.sellerId = sellerId != "" ? Number(sellerId) : client.sellerId
    clientData.altura = Number(clientData.altura);
    clientData.codigoPostal = Number(clientData.codigoPostal);
    clientData.id = client.id;
    dispatch(UpdateClientsRequest(clientData)).then(() => {
      close();
    });
  };
  useEffect(() => {
    dispatch(getSellersRequest());
  }, []);
  return (
    <EditClientViewComponent
      {...props}
      sellers={sellers.data}
      update={updateClient}
      methods={methods}
      loading={loading}
    />
  );
}

export default EditClientViewContainer;
