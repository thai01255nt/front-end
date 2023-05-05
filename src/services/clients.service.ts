import { api } from "../helpers"


const loadClientPagination = (page: number, pageSize: number) => {
    return api.get(`/clients?page=${page}&${pageSize}`)
}

export const clientService = {
    loadClientPagination
}
