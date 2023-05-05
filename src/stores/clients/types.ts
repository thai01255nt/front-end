export const LOAD_CLIENTS_PAGING_REQUEST = 'LOAD_CLIENT_PAGING_REQUEST'
export const LOAD_CLIENTS_PAGING_SUCCESS = 'LOAD_CLIENT_PAGING_SUCCESS'
export const LOAD_CLIENTS_PAGING_FAILURE = 'LOAD_CLIENT_PAGING_FAILURE'

type ErrorResponse = Record<string, Array<string>>
export interface IClient {
    id: string
    nameBroker: string
    idClient: number
    nameClient: string
    interestRate: number
    costBuy: number
    costSell: number
}

type IClientPagination = {
    total: number,
    page: number,
    pageSize: number,
    data?: IClient[],
    errors?: ErrorResponse
}

interface LoadClientPagingRequest {
    type: typeof LOAD_CLIENTS_PAGING_REQUEST
}

interface LoadClientPagingSuccess {
    type: typeof LOAD_CLIENTS_PAGING_SUCCESS
    payload: IClientPagination
}

interface LoadClientPagingFailure {
    type: typeof LOAD_CLIENTS_PAGING_FAILURE
    payload: IClientPagination
}

export interface ClientState {
    loading: boolean,
    payload: IClientPagination
}

export type ClientActionTypes =
    | LoadClientPagingRequest
    | LoadClientPagingSuccess
    | LoadClientPagingFailure
