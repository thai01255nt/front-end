
import { applyMiddleware, combineReducers, createStore } from "redux"
import { accountReducer } from "./account/reducers"
import { clientReducer } from "./clients/reducers"
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
import { setAuthToken } from "../helpers/set-auth-token";

const persistConfig = {
    key: 'root',
    storage,
    whilelist: ['account'],
}

const rootReducer = combineReducers({
    account: accountReducer,
    client: clientReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export type AppState = ReturnType<typeof rootReducer>
const configureStore = () => {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares)
    return createStore(persistedReducer, middlewareEnhancer)
}

const store = configureStore()
const persistedStore = persistStore(store)

let currentState = store.getState() as AppState

store.subscribe(() => {
    let previousState = currentState
    currentState = store.getState() as AppState
    if (previousState.account.token !== currentState.account.token) {
        const token = currentState.account.token
        if (token) {
            setAuthToken(token)
        }
    }
})
export { store, persistedStore }
