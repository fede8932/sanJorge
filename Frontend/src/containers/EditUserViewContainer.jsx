import React from "react";
import EditUserViewComponent from "../components/editUserView/EditUserViewComponent";
import { useForm } from "react-hook-form";
import { UpdateSellersRequest } from "../redux/searchSeller";
import { useDispatch, useSelector } from "react-redux";

function EditUserViewContainer(props) {
  const { seller, close } = props;
  const { loading } = useSelector((state) => state.searchSellers);
  const methods = useForm();
  const dispatch = useDispatch();
  const updateSeller = (data) => {
    const { ...sellerData } = data;
    sellerData.altura = Number(sellerData.altura);
    sellerData.codigoPostal = Number(sellerData.codigoPostal);
    sellerData.comisionBase = Number(sellerData.comisionBase);
    sellerData.comisionOferta = Number(sellerData.comisionOferta);
    sellerData.id = seller.id;
    dispatch(UpdateSellersRequest(sellerData)).then(() => {
      close();
    });
  };
  return (
    <EditUserViewComponent
      {...props}
      update={updateSeller}
      methods={methods}
      loading={loading}
    />
  );
}

export default EditUserViewContainer;
