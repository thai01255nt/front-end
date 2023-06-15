import axios, { AxiosResponse } from "axios";
import { CommonConsts } from "../commons/consts";

export const api = axios.create({
    baseURL: CommonConsts.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})
