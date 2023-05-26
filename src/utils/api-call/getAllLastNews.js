import { instanceAxios } from "../interceptor";

    export const getAllLastNews = async () => {
        return await instanceAxios.get("lastnews")
    };