import { Dispatch } from "react"
import { UserActionTypes, LOAD_USERS_PAGING_REQUEST, LOAD_USERS_PAGING_SUCCESS, LOAD_USERS_PAGING_FAILURE } from "./types"
import { userService } from "../../services"

export const loadUserPagination = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch<UserActionTypes>) => {
        dispatch({
            type: LOAD_USERS_PAGING_REQUEST,
        })
        await userService.loadUserPagination(page = page, pageSize = pageSize).then((res) => {
            dispatch({
                type: LOAD_USERS_PAGING_SUCCESS,
                payload: res.data
            });
            return {}
        },
            (error) => {
                dispatch({
                    type: LOAD_USERS_PAGING_FAILURE,
                    payload: error.data
                })
                return
            }
        )
        return
    }
}
