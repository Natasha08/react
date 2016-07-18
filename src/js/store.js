"use strict"

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import rootReducer from "./reducers/reducer";

//declared variable to remove console error (store undefined)
var store;

//error middleware
const error = (store) => (next) => (action) => {
	try {
		next(action);
	} catch(e) {
		console.log("This is an error", e);
	}
};

const middleware = applyMiddleware(logger(), promise(), thunk, error);

export default store = createStore(rootReducer, middleware);

store.subscribe(() => {
	console.log("store changed", store.getState());
})
