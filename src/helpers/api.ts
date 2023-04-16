import axios, { AxiosResponse } from "axios";
import { CommonConsts } from "../commons/consts";

export const api = axios.create({
    baseURL: CommonConsts.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error): Promise<AxiosResponse> {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.response);
});
