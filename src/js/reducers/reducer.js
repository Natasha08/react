import { combineReducers } from "redux";
import userReducer from "./userReducer";
import workoutsReducer from "./workoutsReducer";
import tags from "./tags";
import foodTag_id from "./food-tags"
import foodItemsReducer from "./foodItemsReducer";
import todos from "./todos";

//similar to start, error if variable not declared
var rootReducer;

const foodCombineReducer = combineReducers({
	foods: foodItemsReducer,
	todos
})

// THIS CORRECTLY ADDS THE TAG_ID AND TODO_ID TO FOODTAG
const foodTagCombineReducer = combineReducers({
	tags,
	todos,
	foodTag_id
})

export default rootReducer = combineReducers({

	user: userReducer,
	foodItems: foodCombineReducer,
	workouts: workoutsReducer,
	foodTag: foodTagCombineReducer,
  tags,
	todos
})
