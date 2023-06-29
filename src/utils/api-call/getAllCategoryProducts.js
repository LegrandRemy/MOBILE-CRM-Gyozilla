import { instanceAxios } from "../interceptor";

export const getAllCategoryProducts = async () => {
    return await instanceAxios.get(`product_categories`)
}