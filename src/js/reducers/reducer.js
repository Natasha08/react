import { combineReducers } from "redux";
import foodItemsReducer from "./foodItemsReducer";
import userReducer from "./userReducer";
import workoutsReducer from "./workoutsReducer";
import tags from "./tags";


//similar to start, error if variable not declared
var rootReducer;

export default rootReducer = combineReducers({
	user: userReducer,
	foodItems: foodItemsReducer,
	workouts: workoutsReducer,
	tags: tags 
})
