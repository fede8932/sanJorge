import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SearchCurrentAcount from "../components/searchCurrentAcount/SearchCurrentAcount";
import { getMovementsByTextRequest } from "../redux/searchCurrentAcount";

function SearchCurrentAcountContainer(props) {
  const methods = useForm();
  const dispatch = useDispatch();
  const searchCurrentAcount = (data) => {
    // const carcterInicial = parseInt(data.text.substring(0, 1), 10);
    // if (isNaN(carcterInicial)) {
    //   data.by = "razonSocial";
    // } else {
    //   data.by = "acount";
    // }
    dispatch(getMovementsByTextRequest(data));
  };
  const acount = useSelector((state) => state.searchMovements);
  return (
    <SearchCurrentAcount
      methods={methods}
      onSubmit={searchCurrentAcount}
      list={acount}
    />
  );
}

export default SearchCurrentAcountContainer;
