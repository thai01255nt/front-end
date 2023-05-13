import { Dispatch } from "react"
import { ClientActionTypes, LOAD_CLIENTS_PAGING_REQUEST, LOAD_CLIENTS_PAGING_SUCCESS, LOAD_CLIENTS_PAGING_FAILURE, LOAD_CLIENT_DETAIL_REQUEST, LOAD_CLIENT_DETAIL_SUCCESS, LOAD_CLIENT_DETAIL_FAILURE } from "./types"
import { clientService } from "../../services"

export const loadClientPagination = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch<ClientActionTypes>) => {
        dispatch({
            type: LOAD_CLIENTS_PAGING_REQUEST,
        })
        await clientService.loadClientPagination(page = page, pageSize = pageSize).then((res) => {
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
                return
            }
        )
        return
    }
}

export const loadClientDetail = (idClient: string) => {
    return async (dispatch: Dispatch<ClientActionTypes>) => {
        dispatch({
            type: LOAD_CLIENT_DETAIL_REQUEST,
        })
        await clientService.loadClientDetail(idClient).then((res) => {
            dispatch({
                type: LOAD_CLIENT_DETAIL_SUCCESS,
                payload: res.data
            });
            return {}
        },
            (error) => {
                dispatch({
                    type: LOAD_CLIENT_DETAIL_FAILURE,
                    payload: error.data
                })
                return
            }
        )
        return
    }
}
