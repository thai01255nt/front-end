import { api } from "../helpers"


const load_client_pagination = (userID: number, page: number, pageSize: number) => {
    return api.get(`/users/${userID}?page=${page}&${pageSize}`)
}

export const clientService = {
    load_client_pagination
}
