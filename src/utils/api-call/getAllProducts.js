import instance from "../interceptor";

export const getAllProducts = async () => {
    return await instance.get(`products`)
}