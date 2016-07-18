"use strict"

import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import food_profile from "./models/User";
import workout_details from "./models/workout_details";
import reducer from "./reducers/reducer";

//declared variable to remove console error (store undefined)
var store;

//basic logger middleware
	// const logger = (store) => (next) => (action) => {
	// 		console.log("action fired", action);
	// 		next(action);
	// };

//error middleware
const error = (store) => (next) => (action) => {
	try {
		next(action);
	} catch(e) {
		console.log("This is an error", e);
	}
};

const middleware = applyMiddleware(logger(), promise(), thunk, error);

export default store = createStore(reducer, middleware);

store.subscribe(() => {
	console.log("store changed", store.getState());
})
