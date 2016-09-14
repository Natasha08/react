"use strict"

import React from "react";
import { Link, browserHistory } from "react-router";
import { connect } from "react-redux";
import store from 'store';
import Tags from 'actions/tag';
import Todos from 'actions/todo';
import TodoTags from 'actions/todo-tag';
import Pages from 'actions/page';
import Footer from "components/Footer";
import Header from "components/Header";
import Page from 'pages/pages';
import Radium from 'radium';

var Menu = require('react-burger-menu').slide
// let pageName = 'Home';
let RadiumLink = Radium(Link);
let title = "Your Epic List Starts Here";

export default class Layout extends React.Component {

  changeTitle(title) {
    this.setState({title})
  }

	render() {
		return (
      <div>
        <div>
          <Menu isOpen = {false}>
            <RadiumLink className="menu-item" to="">Home</RadiumLink>
            <RadiumLink className="menu-item todos" to="/todos">Todos</RadiumLink>
            <RadiumLink className="menu-item" to="/tags">Tags</RadiumLink>
          </Menu>
        </div>
        <Header changeTitle = {this.changeTitle.bind(this)} title = {title}/>
        {this.props.children}
        <Footer />
       </div>
	  );
	}
}
