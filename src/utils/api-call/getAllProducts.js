import { instanceAxios } from "../interceptor";

export const getAllProducts = async () => {
    return await instanceAxios.get(`products`)
}
