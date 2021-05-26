import { combineReducers, createStore } from "redux";
import ModalReducer from '../reducers'

export const rootReducer = combineReducers({
    ModalReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer)