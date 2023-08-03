import React from "react";
import SearchSellerComponent from "../components/searchSeller/SearchSellerComponent";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSellersByTextRequest } from "../redux/searchSeller";

function SearchSellerContainer(props) {
  const methods = useForm();
  const dispatch = useDispatch();
  const searchSeller = (data) => {
    const carcterInicial = parseInt(data.text.substring(0, 1), 10);
    if (isNaN(carcterInicial)) {
      data.by = "name";
    } else {
      data.by = "cuil";
    }
    dispatch(getSellersByTextRequest(data));
  };
  const sellers = useSelector((state) => state.searchSellers);
  return (
    <SearchSellerComponent
      methods={methods}
      onSubmit={searchSeller}
      list={sellers}
    />
  );
}

export default SearchSellerContainer;
