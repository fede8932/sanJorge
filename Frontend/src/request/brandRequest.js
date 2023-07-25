import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const createBrand = async (brandData) => {
  try {
    const brandDate = {
      name: brandData.name,
      code: brandData.code,
    }
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
