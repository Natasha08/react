"use strict"

import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import { fetchFoodItems } from "../actions/foodAction";
import { fetchUser } from "../actions/userAction";
import { fetchUserThunk} from "../actions/userActionThunk";
import  Tag  from "../actions/tag";
import Food from "../actions/todo";
import FoodTag from "../actions/food-tag"
import store from '../store';

import Footer from "../components/Footer";
import Header from "../components/Header";

@connect((store) => {
  return {
    user: store.user.details_promise,
    userThunk: store.user.details_thunk,
    tag: store.tag,
    foodItems: store.foodItems,
    foodTag_id: store.foodTag
  };
})


export default class Layout extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchUser())
    this.props.dispatch(fetchUserThunk())
    //this.props.dispatch(Tag.create({ text: 'tag-id'} ))
    //this.props.dispatch(Food.create({ text: 'food-id' }))
    this.props.dispatch(fetchFoodItems())
    this.props.dispatch(FoodTag.create({ text: 'food-tag-id'}))
  }

  constructor() {
    super();
    this.state = {
      title: "Welcome to React & Redux!"
    };
  }

  changeTitle(title) {
    this.setState({title})
  }

	render() {

		return (
      <div>
        <Header changeTitle = {this.changeTitle.bind(this)} title = {this.state.title} />
        {this.props.children}
        <Link to = "/"><button>Home</button></Link>
        <Link to = "todos"><button>Todos</button></Link>
        <Link to = "tags"><button>Tags</button></Link>
        <Footer />

      </div>
	  );
	}

}
