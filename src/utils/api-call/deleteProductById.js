import { instanceAxios } from "../interceptor";

    export const deleteProductById = async (id) => {
        return await instanceAxios.delete(`products/${id}`)
    };