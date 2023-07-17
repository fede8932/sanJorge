import React from "react";
import AddBrandComponent from "../components/addBrand/AddBrandComponent";
import { useForm } from "react-hook-form";

function AddBrandContainer(props) {
  const methods = useForm();
  const addBrand = (data) => {
    console.log(data);
  };
  return <AddBrandComponent methods={methods} onSubmit={addBrand} {...props} />;
}

export default AddBrandContainer;
