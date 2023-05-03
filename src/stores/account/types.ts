export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGGIN_FAILURE';

export const LOG_OUT = 'LOG_OUT';

type ErrorResponse = Record<string, Array<string>>

type AuthenticatedUser = {
    id: string
    email: string
    roleCode: number
    adminBorkerID: string
}
type LoginRequest = {
    type: typeof LOGIN_REQUEST
    payload: {
        email: string
        password: string
    }
}
type LoginSuccess = {
    type: typeof LOGIN_SUCCESS
    payload: {
        token: string
    }
}
interface LoginFailure {
    type: typeof LOGIN_FAILURE
    payload: {
        errors: ErrorResponse
    }
}
interface Logout {
    type: typeof LOG_OUT
}
export interface AccountState {
    user?: AuthenticatedUser
    loading: boolean
    errors?: ErrorResponse
    token?: string
}

export type AccountActionTypes = LoginRequest | LoginSuccess | LoginFailure | Logout
