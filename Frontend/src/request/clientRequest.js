import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const clientRegister = async (datos) => {
  try {
    const { name, lastName, email, ...dataClient } = datos;
    const dataUser = {
      roleId: 4,
      name: name,
      lastName: lastName,
      email: email,
      password: `${lastName}1234`,
    };
    const userId = await axios.post(`${apiUrl}/api/users`, dataUser);
    dataClient.userId = userId.data;
    dataClient.altura = Number(dataClient.altura);
    dataClient.codigoPostal = Number(dataClient.codigoPostal);
    await axios.post(`${apiUrl}/api/client`, dataClient);
    return "Registrado";
  } catch (error) {
    throw error;
  }
};

export const getClients = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/client`);
    return data;
  } catch (error) {
    throw error;
  }
};
