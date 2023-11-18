import React, { useEffect, useState } from "react";
import AddProductFormComponent from "../components/addProductForm/AddProductFormComponent";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSupplierRequest } from "../redux/supplier";
import { getBrandByRSRequest } from "../redux/brand";
import { productCreateRequest, productsFileCreateRequest } from "../redux/product";
import Swal from "sweetalert2";
import LoadingSpinner from "../commonds/loading/LoadingSpinner";
import AddProductsFormComponent from "../components/addProductsForm/AddProductsFormComponent";

function AddProductFormContainer(props) {
  const { view } = props;
  const [uploadFile, setUploadFile] = useState({
    products: [],
    loading: false,
  });
  const [selectStatus, setSelectStatus] = useState(true);
  const dispatch = useDispatch();
  const methods = useForm();
  const suppliers = useSelector((state) => state.supplier);
  const brands = useSelector((state) => state.brand);
  const productStatus = useSelector((state) => state.product.loading);
  const addProduct = (data) => {
    if (data.cantidad === "") {
      data.cantidad = 0;
    }
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
  const addFileProduct = (data) => {
    const products = uploadFile.products.map((prod) => {
      const newProduct = {
        code: prod.CODIGO,
        name: prod.DESCRIPCION,
        marca: prod.MARCA,
        listPrice: prod.PRECIO,
        cantidad: 0,
        intCode: "",
        notas: "",
        salePorcent: data.salePorcent,
        sellPorcemt: data.sellPorcent,
        supplierName: data.supplierName,
      };
      return newProduct;
    });
    if (data.cantidad === "") {
      data.cantidad = 0;
    }
    dispatch(productsFileCreateRequest(products))
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
  const activeSelect = (razonSocial) => {
    dispatch(getBrandByRSRequest(razonSocial)).then(() => {
      setSelectStatus(false);
    });
  };
  useEffect(() => {
    dispatch(getSupplierRequest());
  }, []);
  return (
    <>
      {suppliers.loading ? (
        <LoadingSpinner loading={suppliers.loading} />
      ) : (
        <>
          {view !== "group" ? (
            <AddProductFormComponent
              {...props}
              methods={methods}
              suppliers={suppliers.data}
              brands={brands.data}
              onSubmit={addProduct}
              status={productStatus}
              selectStatus={selectStatus}
              setSelectStatus={activeSelect}
            />
          ) : (
            <AddProductsFormComponent
              {...props}
              methods={methods}
              suppliers={suppliers.data}
              brands={brands.data}
              onSubmit={addFileProduct}
              status={productStatus}
              selectStatus={selectStatus}
              setSelectStatus={activeSelect}
              setAddProducts={setUploadFile}
              addProducts={uploadFile}
            />
          )}
        </>
      )}
    </>
  );
}

export default AddProductFormContainer;
