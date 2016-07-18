"use strict"

const workoutsReducer = (state=[], action) => {

	switch(action.type) {
		case "ADD_WORKOUTS": {
			state = {...state, workouts: action.payload}
			break;
		}
	}	
	return state;
};

module.exports = workoutsReducer;