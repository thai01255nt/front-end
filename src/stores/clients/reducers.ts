import {
    ClientState,
    ClientActionTypes,
    LOAD_CLIENTS_PAGING_REQUEST,
    LOAD_CLIENTS_PAGING_SUCCESS,
    LOAD_CLIENTS_PAGING_FAILURE,
} from "./types"
const initialState: ClientState = {
    loading: false,
    payload: {
        total: 0,
        page: 1,
        pageSize: 10,
        data: [],
    }
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
                payload: action.payload,
            }
        }
        case LOAD_CLIENTS_PAGING_FAILURE: {
            return {
                ... state,
                loading: false,
                payload: {
                    ...state.payload,
                    errors: action.payload.errors
                }
            }
        }
        default:
            return state
    }
}

export { clientReducer }
