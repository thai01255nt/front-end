import {
    ClientState,
    ClientActionTypes,
    LOAD_CLIENTS_PAGING_REQUEST,
    LOAD_CLIENTS_PAGING_SUCCESS,
    LOAD_CLIENTS_PAGING_FAILURE,
    LOAD_CLIENT_DETAIL_REQUEST,
    LOAD_CLIENT_DETAIL_SUCCESS,
    LOAD_CLIENT_DETAIL_FAILURE,
} from "./types"
const initialState: ClientState = {
    loading: false,
    pagination: {
        total: 0,
        page: 1,
        pageSize: 10,
        data: [],
    },
}

const clientReducer = (state: ClientState = initialState, action: ClientActionTypes
): ClientState => {
    switch (action.type) {
        case LOAD_CLIENTS_PAGING_REQUEST: {
            return { ...state, loading: true }
        }
        case LOAD_CLIENTS_PAGING_SUCCESS: {
            return {
                ...state,
                loading: false,
                pagination: action.payload,
            }
        }
        case LOAD_CLIENTS_PAGING_FAILURE: {
            return {
                ... state,
                loading: false,
                pagination: {
                    ...state.pagination,
                    errors: action.payload.errors
                }
            }
        }

        case LOAD_CLIENT_DETAIL_REQUEST: {
            return { ...state, loading: true }
        }
        case LOAD_CLIENT_DETAIL_SUCCESS: {
            return {
                ...state,
                loading: false,
                detail: action.payload,
            }
        }
        case LOAD_CLIENT_DETAIL_FAILURE: {
            return {
                ... state,
                loading: false,
                detail: {
                    ...state.detail,
                    errors: action.payload.errors
                }
            }
        }
        default:
            return state
    }
}

export { clientReducer }
