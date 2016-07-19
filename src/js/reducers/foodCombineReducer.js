import { combineReducers } from "redux";
import foodItemsReducer from "./foodItemsReducer";
import foods_tag from "./foods-tag";

var foodCombineReducer;

export default foodCombineReducer = combineReducers({
	foods: foodItemsReducer,
	foods_tag: foods_tag
})
