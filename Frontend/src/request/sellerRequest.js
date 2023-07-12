import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const getSellers = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/seller`);
    const arraySeller = data.map((seller) => {
      return {text: `${seller.user.name} ${seller.user.lastName}`, value: seller.id}
    });
    return arraySeller;
  } catch (error) {
    throw error;
  }
};
