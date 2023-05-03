import { Dispatch } from "react"
import { ClientActionTypes, ClientState, LOAD_CLIENTS_PAGING_REQUEST, LOAD_CLIENTS_PAGING_SUCCESS, LOAD_CLIENTS_PAGING_FAILURE } from "./types"
import { clientService } from "../../services"
import { history } from "../../helpers"
import { useSelector } from "react-redux"
import { AppState } from ".."
import { AxiosResponse } from "axios"

export const load_client_pagination = (userID: number, page: number, pageSize: number) => {
    return async (dispatch: Dispatch<ClientActionTypes>) => {
        dispatch({
            type: LOAD_CLIENTS_PAGING_REQUEST,
        })
        let error = await clientService.load_client_pagination(userID=userID, page=page, pageSize=pageSize).then((res) => {
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
                    payload: { errors: error.data.errors }
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