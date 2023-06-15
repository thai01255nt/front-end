import {
    UserState,
    UserActionTypes,
    LOAD_USERS_PAGING_REQUEST,
    LOAD_USERS_PAGING_SUCCESS,
    LOAD_USERS_PAGING_FAILURE,
} from "./types"
const initialUserState: UserState = {
    loading: false,
    pagination: {
        total: 0,
        page: 1,
        pageSize: 10,
        data: [],
    },
}


const userReducer = (state: UserState = initialUserState, action: UserActionTypes
): UserState => {
    switch (action.type) {
        case LOAD_USERS_PAGING_REQUEST: {
            return { ...state, loading: true }
        }
        case LOAD_USERS_PAGING_SUCCESS: {
            return {
                ...state,
                loading: false,
                pagination: action.payload,
            }
        }
        case LOAD_USERS_PAGING_FAILURE: {
            return {
                ...state,
                loading: false,
                pagination: {
                    ...state.pagination,
                }
            }
        }
        default:
            return state
    }
}

export { userReducer }
