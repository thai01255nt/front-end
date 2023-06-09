import {
    ClientState,
    ClientActionTypes,
    LOAD_CLIENTS_PAGING_REQUEST,
    LOAD_CLIENTS_PAGING_SUCCESS,
    LOAD_CLIENTS_PAGING_FAILURE,
    LOAD_CLIENT_DETAIL_REQUEST,
    LOAD_CLIENT_DETAIL_SUCCESS,
    LOAD_CLIENT_DETAIL_FAILURE,
    ClientDetailState,
} from "./types"
const initialClientState: ClientState = {
    loading: false,
    pagination: {
        total: 0,
        page: 1,
        pageSize: 10,
        data: [],
    },
}
const initialClientDetailState: ClientDetailState = {
    loading: false,
}

const clientReducer = (state: ClientState = initialClientState, action: ClientActionTypes
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
const clientDetailReducer = (state: ClientDetailState = initialClientDetailState, action: ClientActionTypes
): ClientDetailState => {
    switch (action.type) {

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
                ...state,
                loading: false,
                detail: {}
            }
        }
        default:
            return state
    }
}

export { clientReducer, clientDetailReducer }
