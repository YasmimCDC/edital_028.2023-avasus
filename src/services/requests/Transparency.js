import api from "../api";


const getTransparencyData = async () => {
  try {
    const res = await api.get("transparecia");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getTransparencyData }