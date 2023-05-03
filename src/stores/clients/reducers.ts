import jwt from 'jwt-decode'
import {
    ClientState,
    ClientActionTypes,
    LOAD_CLIENTS_PAGING_REQUEST,
    LOAD_CLIENTS_PAGING_SUCCESS,
    LOAD_CLIENTS_PAGING_FAILURE,
} from "./types"
const initialState: ClientState = {
    loading: false,
    total: 0,
    page: 1,
    pageSize: 10,
    data: [],
    errors: null,
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
                ...action.payload,
            }
        }
        case LOAD_CLIENTS_PAGING_FAILURE: {
            return {
                ... state,
                loading: false,
                ... action.payload
            }
        }
        default:
            return state
    }
}

export { clientReducer }
