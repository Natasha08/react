"use strict"

export default function foodItemsReducer(state = {
	fetching: false,
	fetched: false,
	details_thunk: [],
	details_promise: [],
	error: null
}, action) {

	switch(action.type) {
		case "CHANGE_FOOD_ITEMS": {
			state = {...state, items: action.payload}
			break;
		}
	}
	return state;
};
module.exports = foodItemsReducer;
