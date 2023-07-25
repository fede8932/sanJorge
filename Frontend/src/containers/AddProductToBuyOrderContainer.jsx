import React from "react";
import AddProductToOrder from "../components/addProductToOrder/AddProductToOrder";
import { useForm } from "react-hook-form";

function AddProductToBuyOrderContainer(props){
    const methods = useForm()
    return <AddProductToOrder {...props} methods={methods} />
}

export default AddProductToBuyOrderContainer;