import { combineReducers } from "redux";
import userReducer from "./userReducer";
import workoutsReducer from "./workoutsReducer";
import tags from "./tags";
import foodItemsReducer from "./foodItemsReducer";
import food_tag from "./foods-tag";

//similar to start, error if variable not declared
var rootReducer;

const foodCombineReducer = combineReducers({
	foods: foodItemsReducer,
	food_tag: food_tag
})

export default rootReducer = combineReducers({


	user: userReducer,
	foodItems: foodCombineReducer,
	workouts: workoutsReducer,
	tags: tags
})
