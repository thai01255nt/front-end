import { api } from "../helpers"


const loadClientPagination = (page: number, pageSize: number, brokerName: string | null) => {
    return api.get(`/clients?page=${page}&pageSize=${pageSize}&brokerName=${brokerName}`)
}

const loadClientDetail = (idClient: string) => {
    return api.get(`/clients/${idClient}`)
}

const loadMangement = (brokerName: string, page:number, pageSize:number) => {
    return api.get(`/clients/management/management/${brokerName}?page=${page}&pageSize=${pageSize}`)
}

const loadPortfilio = (brokerName: string) => {
    return api.get(`/clients/management/portfolio/${brokerName}`)
}


export const clientService = {
    loadClientPagination,
    loadClientDetail,
    loadMangement,
    loadPortfilio
}
