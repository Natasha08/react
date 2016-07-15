import React from "react";
import { Link } from "react-router";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to React!"
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
        <Link to = "about"><button>about</button></Link>
        <Link to = "projects"><button>projects</button></Link>
        <Footer />
      </div>
	  );
	}
}
