import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const createBuyOrder= async (objInfo) => {
  try {
    const { data } = await axios.post(`${apiUrl}/api/purchase/order/${objInfo.supplier}`);
    return data.id;
  } catch (error) {
    throw error;
  }
};
