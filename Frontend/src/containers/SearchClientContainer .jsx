import React from "react";
import SearchClientComponent from "../components/searchClient/SearchClientComponent"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getClientssByTextRequest } from "../redux/searchClient"

function SearchClientContainer(props) {
  const methods = useForm();
  const dispatch = useDispatch();
  const searchSeller = (text) => {
    dispatch(getClientssByTextRequest(text.campo));
  };
  const clients = useSelector((state) => state.searchClients);
  return (
    <SearchClientComponent
      methods={methods}
      onSubmit={searchSeller}
      list={clients}
    />
  );
}

export default SearchClientContainer;
