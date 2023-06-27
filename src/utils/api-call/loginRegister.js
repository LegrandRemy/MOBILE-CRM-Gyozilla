import { instanceAxios } from "../interceptor";

export const login = async (values) => {
    return await instanceAxios.post("token", values)
}