import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const getMovementsRequest = async (dataSearch) => {
  try {
    const { data } = await axios.get(
      `${apiUrl}/api/movement/${dataSearch.text}`
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
