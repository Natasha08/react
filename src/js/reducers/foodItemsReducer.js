"use strict"

const foodItemsReducer = (state=[], action) => {

	switch(action.type) {
		case "CHANGE_FOOD_ITEMS": {
			state = {...state, foodItems: action.payload}
			break;
		}
	}	
	return state;
};
module.exports = foodItemsReducer;