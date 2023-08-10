import React from "react";
import FormSelectClientSellOrder from "../components/formSelectSellOrder/FormSelectClientSellOrder";
import { useDispatch, useSelector } from "react-redux";
import { getClientByTextRequest } from "../redux/searchClient";

function FormSelectClientContainer(props) {
  const client = useSelector((state) => state.searchClients);
  const dispatch = useDispatch();
  const searchClient = (text) => {
    dispatch(getClientByTextRequest(text.campo));
  };
  return <FormSelectClientSellOrder {...props} searchClient={searchClient} client={client.data[0]} />;
}

export default FormSelectClientContainer;
