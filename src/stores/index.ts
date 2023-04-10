
import { applyMiddleware, combineReducers, createStore } from "redux"
import { accountReducer } from "./account/reducers"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    account: accountReducer
})

export type AppState = ReturnType<typeof rootReducer>
export default function configureStore() {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares)
    return createStore(rootReducer, middlewareEnhancer)
}
