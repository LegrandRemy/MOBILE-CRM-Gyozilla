import { instanceAxios } from "../interceptor";

export const login = async (values) => {
    return await instanceAxios.post("token", values)
}

export const isUserExist = async (values) => {
    return await instanceAxios.get(`customers/exist/${values}`)
}

export const signUp = async (values) => {
    return await instanceAxios.post("customers", values)
}

