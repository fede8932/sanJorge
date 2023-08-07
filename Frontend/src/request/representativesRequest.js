import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const getRepresentativesBySupplier = async (razonSocial) => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/representative/${razonSocial}`);
    const representatives = data.map((rep) => {
      return { text: `${rep.name} ${rep.apellido}`, value: rep.id };
    });
    return representatives;
  } catch (error) {
    throw error;
  }
};