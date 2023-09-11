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

export const getSuppliers = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/supplier`);
    const arraySupplier = data.map((supplier) => {
      return { text: supplier.razonSocial, value: supplier.razonSocial };
    });
    return arraySupplier;
  } catch (error) {
    throw error;
  }
};

export const getSuppliersInfo = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/supplier`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getInfoSuppliers = async (razonSocial) => {
  try {
    const { data } = await axios.get(
      `${apiUrl}/api/supplier/supplier?razonSocial=${razonSocial}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getSuppliersByData = async (searchData) => {
  try {
    const { text, page, pageSize, orderByColumn } = searchData;
    const { data } = await axios.get(
      `${apiUrl}/api/supplier/data?text=${text}&page=${page}&pageSize=${pageSize}&orderByColumn=${orderByColumn}`
    );
    let list = data.suppliers;
    while (list.length < 10) {
      list.push({
        id: "",
        cuit: "",
        razonSocial: "",
        currentAcount: { acountNumber: "", resume: "" },
        representative: [],
      });
    }
    data.suppliers = list;
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateSupplierStatusRequest = async (id) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/api/supplier/update/status/${id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateSupplierRequest = async (dataEdit) => {
  try {
    const { id, ...sendInfo } = dataEdit;
    const { data } = await axios.put(
      `${apiUrl}/api/supplier/update/${id}`,
      sendInfo
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const addRepresentativeRequest = async (dataRepresentative) => {
  try {
    const { data } = await axios.post(
      `${apiUrl}/api/representative`,
      dataRepresentative
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteRepSupplierRequest = async (id) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/api/representative/delete/${id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateRepSupplierRequest = async (newData) => {
  const { id, ...updateData } = newData;
  try {
    const { data } = await axios.put(
      `${apiUrl}/api/representative/update/${id}`,
      updateData
    );
    return data;
  } catch (error) {
    throw error;
  }
};
