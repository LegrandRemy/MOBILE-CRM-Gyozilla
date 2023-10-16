import { instanceAxios } from "../interceptor"

export const getOrdersByFranchisePeriod = async (idFranchise, period) =>{
    return await instanceAxios.get(`orders/franchise/${idFranchise}/period/${period}`)
}