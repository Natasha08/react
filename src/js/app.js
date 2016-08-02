"use strict"

import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import Todos from "./pages/Todos";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Tags from "./pages/Tags";
import TodoTags from "./pages/TodoTags";

const app = document.getElementById('app');

ReactDom.render(<Provider store={store}>
	<Router history = {browserHistory}>
	  <Route path= "/" component = {Layout}>
		  <IndexRoute component = {Home}></IndexRoute>
			<Route path = "/" component = {Home}></Route>
			<Route path = "todos" component = {Todos}></Route>
			<Route path = "tags" component = {Tags}></Route>
			<Route path = "todotags" component = {TodoTags}></Route>
		</Route>
	</Router>
	</Provider>,
	app);
