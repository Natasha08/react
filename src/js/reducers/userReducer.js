"use strict"

export default function userReducer(state = {
	fetching: false,
	fetched: false,
	details_thunk: [],
	details_promise: [],
	error: null
}, action) {

	switch(action.type) {
		case "FETCH_USERS_PENDING": {
			return {...state, fetching: true}
			break;
		}
		case "FETCH_USERS_REJECTED": {
			return {...state, fetching: false, error: action.payload}
			break;
		}
	 case "FETCH_USERS_FULFILLED": {
		 return {
			 ...state,
			 fetching: false,
			 fetched: true,
			 details_promise: action.payload.data
		 }
	  break;
	 }
	 return state;
	}

switch(action.type) {
	case "FETCH_USERS_START": {
		return {...state, fetching: true}
		break;
	}
	case "FETCH_USERS_ERROR": {
		return {...state, fetching: false, error: action.payload}
		break;
	}
 case "RECEIVE_USERS": {
	 return {
		 ...state,
		 fetching: false,
		 fetched: true,
		 details_thunk: action.payload
	 }
  break;
}
}
return state;

};


module.exports = userReducer;
