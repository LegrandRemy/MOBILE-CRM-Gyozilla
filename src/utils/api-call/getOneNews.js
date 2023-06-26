import { instanceAxios } from "../interceptor";

    export const getOneNew = async (id) => {
        return await instanceAxios.get(`news/${id}`)
    };