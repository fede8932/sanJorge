import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const suplierRegister = async (datos) => {
  try {
    const { repComent, repPhone, repEmail, lastName, name, ...dataSup } = datos;
    dataSup.altura = Number(dataSup.altura);
    dataSup.codigoPostal = Number(dataSup.codigoPostal);
    dataSup.codigoPostal = Number(dataSup.codigoPostal);
    const { data } = await axios.post(`${apiUrl}/api/supplier`, dataSup);
    const dataRep = {
      supplierId: data,
      name: name,
      apellido: lastName,
      email: repEmail,
      telefono: repPhone,
      comentarios: repComent,
    };
    await axios.post(`${apiUrl}/api/representative`, dataRep);
    return "ok";
  } catch (error) {
    throw error;
  }
};