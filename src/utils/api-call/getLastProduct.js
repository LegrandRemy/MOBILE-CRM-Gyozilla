import { instanceAxios } from "../interceptor";

    export const getLastProduct = async () => {
        return await instanceAxios.get("products/lastProduct");
    };