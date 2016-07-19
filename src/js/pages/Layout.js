"use strict"

import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userAction";
import { fetchUserThunk} from "../actions/userActionThunk";
import  Tags  from "../actions/tag";
import Footer from "../components/Footer";
import Header from "../components/Header";

@connect((store) => {
  return {
    user: store.user.details_promise,
    userThunk: store.user.details_thunk,
    tags: store.tags
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
    this.props.dispatch(fetchUserThunk())
    this.props.dispatch(Tags.create())
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
        {console.log("REACT-PROMISE LOG", this.props.user)}
        {console.log("THUNK LOG", this.props.userThunk)}
        {console.log("Tag Reducer", this.props.tags)}
        <Header changeTitle = {this.changeTitle.bind(this)} title = {this.state.title} />
        {this.props.children}
        <Link to = "/"><button>Home</button></Link>
        <Link to = "about"><button>about</button></Link>
        <Link to = "projects"><button>projects</button></Link>
        <Footer />
      </div>
	  );
	}
}
