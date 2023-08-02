import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const createProduct = async (productData) => {
  try {
    const productDate = {
      product: {
        article: productData.code,
        description: productData.name,
      },
      price: {
        price: parseFloat(productData.listPrice),
        sellPercentage: parseFloat(productData.sellProcent),
        salePercentage: parseFloat(productData.saleProcent),
      },
    };
    await axios.post(
      `${apiUrl}/api/productos?brandId=${productData.brandId}&stock=${productData.cantidad}&stockMin=2`,
      productDate
    );
    return "Registrado";
  } catch (error) {
    throw error;
  }
};

export const searchProduct = async (productData) => {
  try {
    const products = await axios.get(
      `${apiUrl}/api/productos/search?data=${productData.dataSearch}&supplierId=${productData.supplierId}`
    );
    return products.data;
  } catch (error) {
    throw error;
  }
};
export const searchProductPage = async (productData) => {
  try {
    const { data } = await axios.get(
      `${apiUrl}/api/productos/search/prod?data=${productData.dataSearch}&cant=${productData.cant}&page=${productData.page}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
export const searchOneProduct = async (productData) => {
  try {
    const { data } = await axios.get(
      `${apiUrl}/api/productos/search/prod?data=${productData.dataSearch}&cant=${productData.cant}&page=${productData.page}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};