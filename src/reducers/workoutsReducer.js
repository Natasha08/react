"use strict"

export default function workoutsReducer(state = {
	fetching: false,
	fetched: false,
	details_thunk: [],
	details_promise: [],
	error: null
}, action) {

	switch(action.type) {
		case "ADD_WORKOUTS": {
			state = {...state, details: action.payload}
			break;
		}
	}
	return state;
};

module.exports = workoutsReducer;
