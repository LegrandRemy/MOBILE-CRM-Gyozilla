import { instanceAxios } from "../interceptor"

export const addProduct = async (values)=>{
    return await instanceAxios.post('products', values);
}