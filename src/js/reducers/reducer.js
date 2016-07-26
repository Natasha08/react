import { combineReducers } from "redux";
import tags from "./tags";
import todoTags from "./todo-tags";
import todos from "./todos";

//similar to start, error if variable not declared
var rootReducer;

// const foodCombineReducer = combineReducers({
// 	foods: foodItemsReducer,
// 	todos
// })

// THIS CORRECTLY ADDS THE TAG_ID AND TODO_ID TO FOODTAG
// const todoTagCombineReducer = combineReducers({
// 	tags,
// 	todos,
// 	todoTags
// })

export default rootReducer = combineReducers({

  tags,
	todos,
	todoTags
})
