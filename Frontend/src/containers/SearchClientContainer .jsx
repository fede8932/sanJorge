import React, { useEffect } from "react";
import SearchClientComponent from "../components/searchClient/SearchClientComponent";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getClientssByTextRequest } from "../redux/searchClient";

function SearchClientContainer(props) {
  const methods = useForm();
  const dispatch = useDispatch();
  const searchClient = (text) => {
    dispatch(getClientssByTextRequest(text.campo));
  };
  const result = useSelector((state) => state.searchClients);
  useEffect(() => {
    const data = {
      text: "null",
      page: 1,
      pageSize: 10,
      orderByColumn: "id",
    };
    dispatch(getClientssByTextRequest(data));
  }, []);
  return (
    <SearchClientComponent
      methods={methods}
      onSubmit={searchClient}
      result={result}
    />
  );
}

export default SearchClientContainer;
