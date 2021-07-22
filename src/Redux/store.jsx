import {combineReducers, createStore, applyMiddleware} from "redux";
import authReducer from "./auth-reducer";
import moviesReducer from "./movies-reducer";
import thunkMidleware from "redux-thunk"

let reducers = combineReducers({
    authorization: authReducer,
    movies: moviesReducer
});

let store = createStore(reducers, applyMiddleware(thunkMidleware));

export default store;