import { combineReducers, createStore } from "redux";

const foodItemsReducer = require('./reducers/foodItemsReducer');
const userReducer = require('./reducers/userReducer');
const workoutsReducer = require('./reducers/workoutsReducer');

const reducers = combineReducers({
	user: userReducer,
	foodItems: foodItemsReducer,
	workouts: workoutsReducer
})

const store = createStore(reducers);

store.subscribe(() => {
	console.log("store changed", store.getState());
})

	const foodItems =  [{ food_name: 'banana' }, { food_name: 'apple' }, { food_name: 'pear' }];
	const workouts = [{ Workout_A: [] }, { workout_B: [] }];
	const user = [{ username: 'natasha' }, { user_email: 'natasha08@me.com '}];
	const userCreate = (newValue) => {
	user.push(newValue);

}

store.dispatch({type: "CHANGE_USER", payload: user})
//store.dispatch({type: "CHANGE_AGE", payload: userCreate({age: 33})})
store.dispatch({type: "ADD_WORKOUTS", payload: workouts})
store.dispatch({type: "CHANGE_FOOD_ITEMS", payload: foodItems})





// import React from "react";
// import ReactDom from "react-dom";
// import {Router, Route, IndexRoute, hashHistory} from "react-router";

// import About from "./pages/About";
// import Home from "./pages/Home";
// import Layout from "./components/Layout";
// import Projects from "./pages/Projects";

// const app = document.getElementById('app');
// ReactDom.render(
// 	<Router history = {hashHistory}>
// 	  <Route path= "/" component = {Layout}>\
// 		  <IndexRoute component = {Home}></IndexRoute>
// 			<Route path = "/" component = {Home}></Route>
// 			<Route path = "about" component = {About}></Route>
// 			<Route path = "projects" component = {Projects}></Route>
// 		</Route>
// 	</Router>,
// 	app);
