import React, { useEffect, useState } from "react";
import SellerFormComponent from "../components/sellerFormComponent/SellerFormComponent";
import { getSuppliers } from "../request/supplierRequest";

function SellerFormContainer(props) {
  const [supplierList, setSupplierList] = useState([]);
  useEffect(() => {
    async function fetchSuppliers() {
      const suppliers = await getSuppliers();
      setSupplierList(suppliers);
    }
    fetchSuppliers();
  }, []);
  return <SellerFormComponent {...props} suppliers={supplierList} />;
}

export default SellerFormContainer;
