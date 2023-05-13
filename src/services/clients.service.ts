import { api } from "../helpers"


const loadClientPagination = (page: number, pageSize: number) => {
    return api.get(`/clients?page=${page}&${pageSize}`)
}

const loadClientDetail = (idClient: string) => {
    return api.get(`/clients/${idClient}`)
}

export const clientService = {
    loadClientPagination,
    loadClientDetail
}
