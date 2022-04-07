import { createStore } from "redux";
import { initialState } from "./initialState";
import itemsReducer from "./product-reducer";

export const store = createStore(
	itemsReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.store = store;
