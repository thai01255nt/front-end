import { api } from "../helpers"


const loadClientPagination = (page: number, pageSize: number) => {
    return api.get(`/clients?page=${page}&${pageSize}`)
}

const getClient = (clientID: number) => {
    return api.get(`/clients?${clientID}`)
}

export const clientService = {
    loadClientPagination,
    getClient
}
