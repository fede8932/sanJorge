import React, { useEffect } from "react";
import SearchSellerComponent from "../components/searchSeller/SearchSellerComponent";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSellersByTextRequest } from "../redux/searchSeller";
import seller from "../redux/seller";

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
    data.page = 1;
    data.pageSize = 10;
    data.orderByColumn = "id";
    dispatch(getSellersByTextRequest(data));
  };
  const result = useSelector((state) => state.searchSellers);
  useEffect(() => {
    const data = {
      text: "null",
      by: "cuil",
      page: 1,
      pageSize: 10,
      orderByColumn: "id",
    };
    dispatch(getSellersByTextRequest(data));
  }, []);
  return (
    <SearchSellerComponent
      methods={methods}
      onSubmit={searchSeller}
      result={result}
    />
  );
}

export default SearchSellerContainer;
