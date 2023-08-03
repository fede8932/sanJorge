import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const clientRegister = async (datos) => {
  try {
    const client = datos.Client;
    const discount = datos.CustomerDiscounts;
    const { name, lastName, email, ...dataClient } = client;
    const dataUser = {
      name: name,
      lastName: lastName,
      email: email,
      password: `${lastName}1234`,
      roleId: 4,
    };
    const userId = await axios.post(`${apiUrl}/api/users`, dataUser);
    dataClient.userId = userId.data;
    dataClient.altura = Number(dataClient.altura);
    dataClient.codigoPostal = Number(dataClient.codigoPostal);
    console.log("dataClient", dataClient)
    const dataRequest = {
      Client: dataClient,
      CustomerDiscounts: discount
    }
    console.log("dataClient", dataRequest)
    await axios.post(`${apiUrl}/api/client`, dataRequest);
    return "Registrado";
  } catch (error) {
    throw error;
  }
};

export const getClients = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/client`);
    const arrayClients = data.map((client) => {
      return { text: client.razonSocial, value: client.razonSocial };
    });
    return arrayClients;
  } catch (error) {
    throw error;
  }
};

export const getClientsByData = async (dataSearch) => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/client/data?text=${dataSearch}`);
    return data;
  } catch (error) {
    throw error;
  }
};
