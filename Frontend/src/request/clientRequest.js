import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const clientRegister = async (datos) => {
  try {
    const { name, lastName, email, ...dataClient } = datos;
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
    const dataRequest = {
      Client: dataClient,
    };
    const client = await axios.post(`${apiUrl}/api/client`, dataRequest);
    return client.data;
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
    const { data } = await axios.get(
      `${apiUrl}/api/client/data?text=${dataSearch}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getClientByData = async (dataSearch) => {
  try {
    const { data } = await axios.get(
      `${apiUrl}/api/client/dataclient?text=${dataSearch}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateClientById = async (dataUpdate) => {
  try {
    const { id, ...infoUpdate } = dataUpdate;
    const { data } = await axios.put(
      `${apiUrl}/api/client/update/${id}`,
      infoUpdate
    );
    return data;
  } catch (error) {
    throw error;
  }
};
