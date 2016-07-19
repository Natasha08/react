"use strict"

export default function foodItemsReducer(state = {
	fetching: false,
	fetched: false,
	items: [],
	error: null
}, action) {

	switch(action.type) {
		case "FETCH_FOODITEMS": {
			return {
 			 ...state,
 			 fetching: false,
 			 fetched: true,
 			 items: action.payload
 		 }
 	  break;
		}
		case "FETCH_FOODITEMS_ERROR": {
			return {...state, fetching: false, error: action.payload}
			break;
		}
	}
	return state;

	};

//FOR ASYNC fetching

// switch(action.type) {
// 	case "FETCH_FOODITEMS_START": {
// 		return {...state, fetching: true}
// 		break;
// 	}
// 	case "FETCH_FOODITEMS_ERROR": {
// 		return {...state, fetching: false, error: action.payload}
// 		break;
// 	}
//  case "RECEIVE_FOODITEMS": {
// 	 return {
// 		 ...state,
// 		 fetching: false,
// 		 fetched: true,
// 		 items: action.payload
// 	 }
//   break;
// }
// }
// return state;
//
// };


module.exports = foodItemsReducer;
