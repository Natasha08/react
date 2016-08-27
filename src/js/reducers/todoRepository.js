"use strict"

export default function todoRepositoryReducer(state = {
	fetching: false,
	fetched: false,
	todos: [],
	error: null
}, action) {

switch(action.type) {
	case "FETCH_TODOS_START": {
		return {...state, fetching: true}
		break;
	}
	case "FETCH_TODOS_ERROR": {
		return {...state, fetching: false, error: action.payload}
		break;
	}
 case "RECEIVE_TODOS": {
	 return {
		 ...state,
		 fetching: false,
		 fetched: true,
		 todos: action.payload
	 }
  break;
}
}
return state;

};
