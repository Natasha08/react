"use strict"

import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";

const app = document.getElementById('app');
ReactDom.render(<Provider store={store}>
	<Router history = {hashHistory}>
	  <Route path= "/" component = {Layout}>\
		  <IndexRoute component = {Home}></IndexRoute>
			<Route path = "/" component = {Home}></Route>
			<Route path = "about" component = {About}></Route>
			<Route path = "projects" component = {Projects}></Route>
		</Route>
	</Router>
	</Provider>,
	app);
