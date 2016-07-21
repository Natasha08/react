import { combineReducers } from "redux";
import userReducer from "./userReducer";
import workoutsReducer from "./workoutsReducer";
import tag_id from "./tags";
import foodTag_id from "./food-tags"
import foodItemsReducer from "./foodItemsReducer";
import food_id from "./foods";

//similar to start, error if variable not declared
var rootReducer;

const foodCombineReducer = combineReducers({
	foods: foodItemsReducer,
	food_id: food_id
})

// THIS CORRECTLY ADDS THE TAG_ID AND FOOD_ID TO FOODTAG
const foodTagCombineReducer = combineReducers({
	tag_id: tag_id,
	food_id: food_id,
	foodTag_id: foodTag_id
})

export default rootReducer = combineReducers({

	user: userReducer,
	foodItems: foodCombineReducer,
	workouts: workoutsReducer,
	tag: tag_id,
	foodTag: foodTagCombineReducer
})
