"use strict"

import composeReducer from 'compose-reducer';

export default function(state = {
	fetching: false,
	fetched: false,
	text: [],
	error: null
}, action) {

switch(action.type) {
	case "SAVE_TODOS_START": {
		return {...state, fetching: true}
		break;
	}
	case "SAVE_TODOS_ERROR": {
		return {...state, fetching: false, error: action.payload}
		break;
	}
 case "SAVE_TODOS": {
	 return {
		 ...state,
		 fetching: false,
		 fetched: true,
		 text: action.payload
	 }
  break;
}
}
return state;

};
