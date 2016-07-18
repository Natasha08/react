import { combineReducers } from "redux";
import foodItemsReducer from "./foodItemsReducer";
import userReducer from "./userReducer";
import workoutsReducer from "./workoutsReducer";

var reducer;

export default reducer = combineReducers({
	user: userReducer,
	foodItems: foodItemsReducer,
	workouts: workoutsReducer
})
