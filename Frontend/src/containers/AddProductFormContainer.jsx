import React, { useEffect } from "react";
import AddProductFormComponent from "../components/addProductForm/AddProductFormComponent";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSupplierRequest } from "../redux/supplier";
import { getBrandRequest } from "../redux/brand";
import { productCreateRequest } from "../redux/product";
import Swal from "sweetalert2";

function AddProductFormContainer(props) {
  const dispatch = useDispatch();
  const methods = useForm();
  const { data } = useSelector((state) => state.supplier);
  const brands = useSelector((state) => state.brand);
  const productStatus = useSelector((state) => state.product.loading);
  const addProduct = (data) => {
    dispatch(productCreateRequest(data))
    .then((res) => {
      if (res.error) {
        Swal.fire({
          title: "Error!",
          text: "No se pudo guardar tu registro",
          icon: "error",
          confirmButtonText: "Cerrar",
        });
        return;
      }
      Swal.fire({
        icon: "success",
        title: "Registrado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
      methods.reset();
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        title: "Error!",
        text: "No se pudo registrar",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    });
  };
  useEffect(() => {
    dispatch(getSupplierRequest());
    dispatch(getBrandRequest());
  }, []);
  return (
    <AddProductFormComponent
      {...props}
      methods={methods}
      suppliers={data}
      brands={brands.data}
      onSubmit={addProduct}
      status={productStatus}
    />
  );
}

export default AddProductFormContainer;
