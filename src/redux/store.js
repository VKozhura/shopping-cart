import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { initialState } from "./initialState";
import productReducer from "./product-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	productReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);
window.store = store;
