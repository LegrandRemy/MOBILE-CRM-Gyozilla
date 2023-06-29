import { instanceAxios } from "../interceptor";

export const getProductById = async (id) => {
  return await instanceAxios.get(`products/${id}`);
};
