import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "https://api-gyozilla.onrender.com/api/";

// Création d'une instance Axios
const instanceAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instanceAxios.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("@token");

    if (token) {
      // console.log(token, 'gettoken');
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instanceAxios.interceptors.response.use(
  async (res) => {
    if (res.data.token) {
      await AsyncStorage.setItem("@token", res.data.token);
    }
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        AsyncStorage.removeItem("@token");
      }
    }
    if (err.response.status === 403 && err.response.data) {
      AsyncStorage.removeItem("@token");

      if (err.response.data.error !== "2 - Aucune correspondance") {
      }
    }
    return err.response;
  }
);

export { instanceAxios };
