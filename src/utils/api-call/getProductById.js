import instance from "../interceptor";

export const getProductById= async (id) => {
    return await instance.get(`products/${id}`)
}