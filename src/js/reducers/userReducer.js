"use strict"

const userReducer = (state=[], action) => {
	switch(action.type) {
		case "CHANGE_NAME": {
			state = {...state, name: action.payload}
			break;
		}
	}
	switch(action.type) {
		case "CHANGE_AGE": {
			state = {...state, age: action.payload}
			break;
		}
	}

	switch(action.type) {
		case "CHANGE_USER": {
			state = {...state, user: action.payload}
			break;
		}
	}

	return state;	
};

module.exports = userReducer;
