import { Dispatch } from "react"
import { AccountActionTypes, AccountState, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "./types"
import { userService } from "../../services"
import { history } from "../../helpers"
import { useSelector } from "react-redux"
import { AppState } from ".."
import { AxiosResponse } from "axios"

export const login = (email: string, password: string, from: string) => {
    return async (dispatch: Dispatch<AccountActionTypes>) => {
        dispatch({
            type: LOGIN_REQUEST,
            payload: {
                email: email,
                password: password,
            }
        })
        let error = await userService.login(email, password).then((res) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {token: res.data.data.token}
                });
                history.push(from)
                return {}
            },
            (error) => {
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: { error: error.data.errors }
                })
                return error.data.errors
            }
        )
        return error
    }
}

export const logout = (): AccountActionTypes => {
    return { type: LOG_OUT }
}