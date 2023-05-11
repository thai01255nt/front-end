export const LOAD_CLIENTS_PAGING_REQUEST = 'LOAD_CLIENT_PAGING_REQUEST'
export const LOAD_CLIENTS_PAGING_SUCCESS = 'LOAD_CLIENT_PAGING_SUCCESS'
export const LOAD_CLIENTS_PAGING_FAILURE = 'LOAD_CLIENT_PAGING_FAILURE'

export const LOAD_CLIENT_DETAIL_REQUEST = 'LOAD_CLIENT_DETAIL_REQUEST'
export const LOAD_CLIENT_DETAIL_SUCCESS = 'LOAD_CLIENT_DETAIL_SUCCESS'
export const LOAD_CLIENT_DETAIL_FAILURE = 'LOAD_CLIENT_DETAIL_FAILURE'

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

export interface IClientDetail {
    expectedPNL: {
        dateBuy: string
        dateSell: string
        ticker: string
        quantity: number
        quantityAvailable: number
        priceBuy: number
        priceSell: number
        // price: number
        totalValueBuy: number
        totalValueSell: number
        totalValueLoan: number
        costBuy: number
        costSell: number
        nDayLoan: number
        nDayAdvance: number
        costLoanFromDayLoan: number
        costLoanFromDayAdvance: number
        costLoan: number
        pnl: number
        depositRatio: number
        minDeposit: number
    }[]
    realisedPNL: {
        dateBuy: string
        dateSell: string
        ticker: string
        quantity: number
        quantityAvailable: number
        priceBuy: number
        priceSell: number
        // price: number
        totalValueBuy: number
        totalValueSell: number
        totalValueLoan: number
        costBuy: number
        costSell: number
        nDayLoan: number
        nDayAdvance: number
        costLoanFromDayLoan: number
        costLoanFromDayAdvance: number
        costLoan: number
        pnl: number
        depositRatio: number
        minDeposit: number
    }[]
    deposit: {
        deposit: number
    }[]
    portfolio: {
        ticker: string
        quantity: number
        quantityAvailable: number
        priceBuy: number
        priceSell: number
        // price: number
        totalValueBuy: number
        totalValueSell: number
        pnl: number
    }[]
    summary: {
        expectedPNL: Record<string, number>
        realisedPNL: Record<string, number>
        deposit: Record<string, number>
        assets: Record<string, number>
    }
    errors?: ErrorResponse
}

interface LoadClientDetailRequest {
    type: typeof LOAD_CLIENT_DETAIL_REQUEST
}

interface LoadClientDetailSuccess {
    type: typeof LOAD_CLIENT_DETAIL_SUCCESS
    payload: IClientDetail
}

interface LoadClientDetailFailure {
    type: typeof LOAD_CLIENT_DETAIL_FAILURE
    payload: IClientDetail
}

export interface ClientState {
    loading: boolean,
    pagination: IClientPagination,
    detail?: IClientDetail
}

export type ClientActionTypes =
    | LoadClientPagingRequest
    | LoadClientPagingSuccess
    | LoadClientPagingFailure
    | LoadClientDetailRequest
    | LoadClientDetailSuccess
    | LoadClientDetailFailure
    