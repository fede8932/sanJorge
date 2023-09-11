import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const getSellers = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/seller`);
    const arraySeller = data.map((seller) => {
      return {
        text: `${seller.user.name} ${seller.user.lastName}`,
        value: seller.id,
      };
    });
    return arraySeller;
  } catch (error) {
    throw error;
  }
};

export const createSellers = async (objData) => {
  try {
    const { name, lastName, email, ...dataSeller } = objData;
    const dataUser = {
      name: name,
      lastName: lastName,
      email: email,
      password: `${lastName}1234`,
      roleId: 3,
    };
    const { data } = await axios.post(`${apiUrl}/api/users`, dataUser);
    console.log(data);
    dataSeller.userId = data;
    dataSeller.altura = Number(dataSeller.altura);
    dataSeller.codigoPostal = Number(dataSeller.codigoPostal);
    dataSeller.comisionBase = parseFloat(dataSeller.comisionBase) / 100;
    dataSeller.comisionOferta = parseFloat(dataSeller.comisionOferta) / 100;
    console.log("seller", dataSeller);
    await axios.post(`${apiUrl}/api/seller`, dataSeller);
    return "Registrado";
  } catch (error) {
    throw error;
  }
};

export const getSellersByText = async (dataSearch) => {
  try {
    const { data } = await axios.get(
      `${apiUrl}/api/seller/data?text=${dataSearch.text}&by=${dataSearch.by}&page=${dataSearch.page}&pageSize=${dataSearch.pageSize}&orderByColumn=${dataSearch.orderByColumn}`
    );
    let list = data.sellers;
    while (list.length < 10) {
      list.push({
        user: { name: "", lastName: "", id: "", status: "" },
        cuil: "",
      });
    }
    data.sellers = list;
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateSellerById = async (dataUpdate) => {
  try {
    const { id, ...infoUpdate } = dataUpdate;
    const { data } = await axios.put(
      `${apiUrl}/api/seller/update/${id}`,
      infoUpdate
    );
    return data;
  } catch (error) {
    throw error;
  }
};
