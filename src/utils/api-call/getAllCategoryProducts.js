import instance from "../interceptor";

export const getAllCategoryProducts = async () => {
    return await instance.get(`product_categories`)
}