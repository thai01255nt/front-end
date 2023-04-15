
import { applyMiddleware, combineReducers, createStore } from "redux"
import { accountReducer } from "./account/reducers"
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
    whilelist: ['account'],
}

const rootReducer = combineReducers({
    account: accountReducer
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
export { store, persistedStore }
