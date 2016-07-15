import React from "react";
import ReactDom from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";

const app = document.getElementById('app');
ReactDom.render(
	<Router history = {hashHistory}>
	  <Route path= "/" component = {Layout}>\
		  <IndexRoute component = {Home}></IndexRoute>
			<Route path = "/" component = {Home}></Route>
			<Route path = "about" component = {About}></Route>
			<Route path = "projects" component = {Projects}></Route>
		</Route>
	</Router>,
	app);
