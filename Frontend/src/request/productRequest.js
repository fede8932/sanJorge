import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const createProduct = async (productData) => {
  console.log(productData);
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
