import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const createProduct = async (productData) => {
  try {
    const productDate = {
      article: productData.code,
      description: productData.name,
      listPrice: parseFloat(productData.listPrice),
      costPercentage: parseFloat(productData.costProcent),
      salePercentage: parseFloat(productData.sellProcent),
    };
    await axios.post(`${apiUrl}/api/productos?brandId=${productData.brandId}&stock=${productData.cantidad}&stockMin=2`, productDate);
    return "Registrado";
  } catch (error) {
    throw error;
  }
};

export const searchProduct = async (productData) => {
  try {
    const products = await axios.get(`${apiUrl}/api/productos/search?data=${productData}`);
    return products.data;
  } catch (error) {
    throw error;
  }
};