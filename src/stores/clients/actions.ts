import { Dispatch } from "react"
import { ClientActionTypes, LOAD_CLIENTS_PAGING_REQUEST, LOAD_CLIENTS_PAGING_SUCCESS, LOAD_CLIENTS_PAGING_FAILURE } from "./types"
import { clientService } from "../../services"

export const loadClientPagination = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch<ClientActionTypes>) => {
        dispatch({
            type: LOAD_CLIENTS_PAGING_REQUEST,
        })
        let error = await clientService.loadClientPagination(page=page, pageSize=pageSize).then((res) => {
                dispatch({
                    type: LOAD_CLIENTS_PAGING_SUCCESS,
                    payload: res.data
                });
                return {}
            },
            (error) => {
                dispatch({
                    type: LOAD_CLIENTS_PAGING_FAILURE,
                    payload: error.data
                })
                return error.data.errors
            }
        )
        return error
    }
}
