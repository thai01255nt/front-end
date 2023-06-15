export const LOAD_USERS_PAGING_REQUEST = 'LOAD_USERS_PAGING_REQUEST'
export const LOAD_USERS_PAGING_SUCCESS = 'LOAD_USERS_PAGING_SUCCESS'
export const LOAD_USERS_PAGING_FAILURE = 'LOAD_USERS_PAGING_FAILURE'


type ErrorResponse = Record<string, Array<string>>
type IUser = {
    id: number
    email: string
    adminNameBroker?: string
    role: string
}
type IUserPagination = {
    total: number,
    page: number,
    pageSize: number,
    data?: IUser[],
    errors?: ErrorResponse
}

interface LoadUserPagingRequest {
    type: typeof LOAD_USERS_PAGING_REQUEST
}

interface LoadUserPagingSuccess {
    type: typeof LOAD_USERS_PAGING_SUCCESS
    payload: IUserPagination
}

interface LoadUserPagingFailure {
    type: typeof LOAD_USERS_PAGING_FAILURE
    payload: IUserPagination
}

export interface UserState {
    loading: boolean,
    pagination: IUserPagination,
}


export type UserActionTypes =
    | LoadUserPagingRequest
    | LoadUserPagingSuccess
    | LoadUserPagingFailure
