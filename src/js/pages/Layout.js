"use strict"

import React from "react";
import { Link, browserHistory } from "react-router";
import { connect } from "react-redux";

import store from '../store';
import Tags from '../actions/tag';
import Todos from '../actions/todo';
import TodoTags from '../actions/todo-tag';
import Pages from '../actions/page';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Page from '../pages/pages';
import Radium from 'radium';

var Menu = require('react-burger-menu').slide
// let pageName = 'Home';
let RadiumLink = Radium(Link);
let title = "Welcome to React & Redux!";
@connect((store) => {
  return {

  };
})

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
            <RadiumLink className="menu-item" to="/todos">Todos</RadiumLink>
            <RadiumLink className="menu-item" to="/tags">Tags</RadiumLink>
          </Menu>
        </div>
        <Header changeTitle = {this.changeTitle.bind(this)} title = {title}/>
        <Link to = "/"><button className={ Page.active() ? 'active' : null }>Home</button></Link>
        <Link to = "/todos"><button className={ Page.active() ? 'active' : null }>Todos</button></Link>
        <Link to = "/tags"><button className={ Page.active() ? 'active' : null }>Tags</button></Link>
        {this.props.children}
        <Footer />
       </div>
	  );
	}

}
