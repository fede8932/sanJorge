import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const createBuyOrder = async (objInfo) => {
  try {
    const { data } = await axios.post(
      `${apiUrl}/api/purchase/order/${objInfo.supplier}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
export const addOrderItem = async (dataOrder) => {
  try {
    const { productId, brandId, orderId, cantidad } = dataOrder;
    const productsInOrder = await axios.get(
      `${apiUrl}/api/purchase/order/items/${orderId}`
    );
    const rep = productsInOrder.data.map((item) => {
      if (item.productId == productId && item.brandId == brandId) {
        return true;
      } else {
        return false;
      }
    });
    if (rep.includes(true)) {
      throw new Error("El producto ya esta en el listado");
    } else {
      const { data } = await axios.post(
        `${apiUrl}/api/purchase/order/items/${orderId}?productId=${productId}&brandId=${brandId}&cantidad=${cantidad}`
      );
      return data;
    }
  } catch (error) {
    throw error;
  }
};
export const deleteOrderItem = async (dataOrder) => {
  try {
    const { orderItemId } = dataOrder;
    const { data } = await axios.delete(`${apiUrl}/api/purchase/order/items/${orderItemId}`);
    return data;
  } catch (error) {
    throw error;
  }
};
export const getBuyOrder = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/purchase/order/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
export const updateOrderItem = async (dataItem) => {
  try {
    const { id, editCamp } = dataItem;
    const { data } = await axios.put(
      `${apiUrl}/api/purchase/order/items/${id}?cantidad=${editCamp}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
export const updatePriceOrderItem = async (dataItem) => {
  try {
    const { id, editCamp } = dataItem;
    const { data } = await axios.put(
      `${apiUrl}/api/purchase/order/items/price/${id}?price=${editCamp}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
export const updateStatusOrder = async (dataItem) => {
  try {
    const { id, status } = dataItem;
    const { data } = await axios.put(
      `${apiUrl}/api/purchase/order/status/${id}?status=${status}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
