export  const LOGGIN_REQUEST = 'LOGIN_REQUEST';
export  const LOGGIN_SUCCESS = 'LOGGIN_SUCCESS';
export  const LOGGIN_FAILURE = 'LOGGIN_FAILURE';

export  const LOG_OUT = 'LOG_OUT';

type AuthenticatedUserType = {
    _id: string
    firstName: string
    lastName: string
    email: string
}
type LoginRequestType = {
    type: typeof LOGGIN_REQUEST
    payload: {
        email: string
        password: string
    }
}

type ErrorResponse = Record<string, Array<string>>

export class AuthenticatedUser {
    constructor({...rest}: AuthenticatedUserType) {
        Object.assign(this, rest)
    }

}


interface LoginRequest {

}

interface LoginSuccess {
    type: typeof LOGGIN_SUCCESS
    payload: {
        token: string
    }
}

interface LoginFailure {
    type: typeof LOGGIN_FAILURE
    payload: {
        error: ErrorResponse
    }
}

interface Logout {
    type: typeof LOG_OUT
}

export type AccountActionType = LoginRequest | LoginSuccess | LoginFailure | Logout

export interface AccountState {
    user: AuthenticatedUser | null
    loading: boolean
    error: ErrorResponse | null
    token: string | null
}