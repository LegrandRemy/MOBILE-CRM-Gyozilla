export const getProducts = async () => {
  return await instanceAxios.get("products").then((res) => res.data);
};

export const getEntrees = async () => {
  console.log(res.data);
  return await instanceAxios.get("entrees").then((res) => res.data);
};
export const getPlats = async () => {
  console.log(res.data);
  return await instanceAxios.get("plats").then((res) => res.data);
};
export const getDesserts = async () => {
  console.log(res.data);
  return await instanceAxios.get("desserts").then((res) => res.data);
};
export const getBoissons = async () => {
  console.log(res.data);
  return await instanceAxios.get("boissons").then((res) => res.data);
};
