import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const createBrand = async (brandData) => {
  try {
    const brandDate = {
      name: brandData.name,
      code: brandData.code,
    };
    const { data } = await axios.get(
      `${apiUrl}/api/supplier/supplier?razonSocial=${brandData.supplierName}`
    );
    await axios.post(`${apiUrl}/api/brand?supplierId=${data.id}`, brandDate);
    return "Registrado";
  } catch (error) {
    throw error;
  }
};

export const getBrands = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/brand`);
    const brands = data.map((brand) => {
      return { text: brand.name, value: brand.id };
    });
    return brands;
  } catch (error) {
    throw error;
  }
};
export const getBrandsByData = async (text) => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/brand/search?data=${text}`);
    return data;
  } catch (error) {
    throw error;
  }
};
export const getBrandsBySupplier = async (rz) => {
  try {
    const { data } = await axios.get(
      `${apiUrl}/api/brand/search/supplier?razonSocial=${rz}`
    );
    const brands = data.map((brand) => {
      return { text: brand.name, value: brand.id };
    });
    return brands;
  } catch (error) {
    throw error;
  }
};
export const addSupplierToBrand = async (infoBS) => {
  try {
    const { brandId, ...listSupplierId } = infoBS;
    const { data } = await axios.post(
      `${apiUrl}/api/brand/add/proveedor?brandId=${brandId}`,
      listSupplierId
    );
    return data;
  } catch (error) {
    throw error;
  }
};
export const deleteSupplierToBrand = async (infoBS) => {
  try {
    const { brandId, supplierId } = infoBS;
    const { data } = await axios.delete(
      `${apiUrl}/api/brand/delete/proveedor?brandId=${brandId}&supplierId=${supplierId}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
export const addBrandToTable = async (datos) => {
  const { data } = await axios.post(`${apiUrl}/api/discounts`, datos);
  return data.customerDiscounts;
};
export const delBrandToTable = async (ids) => {
  const { brandId, clientId } = ids;
  const { data } = await axios.delete(
    `${apiUrl}/api/discounts/${brandId}/${clientId}`
  );
  return data.customerDiscounts;
};
export const resetBrandToTable = async () => {
  return [];
};
