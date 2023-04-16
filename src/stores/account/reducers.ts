import jwt from 'jwt-decode'
import { AccountState, AccountActionTypes, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT } from "./types"
const initialState: AccountState = { loading: false }
const accountReducer = (state: AccountState = initialState, action: AccountActionTypes
): AccountState => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return { ...state, loading: true }
        }
        case LOGIN_SUCCESS: {
            console.log("token", jwt(action.payload.token))
            return { ...state, loading: false, token: action.payload.token, user: jwt(action.payload.token) }
        }
        case LOGIN_FAILURE: {
            return { ...state, loading: false, error: action.payload.error, token: undefined, user: undefined }
        }
        case LOG_OUT: {
            return { ...state, error: undefined, token: undefined, user: undefined }
        }
        default:
            return state
    }
}

export { accountReducer }
