import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
		super();
		this.state = {name: "Natasha"};
	}

	render() {
    setTimeout(() => {
      this.setState({name: "Jonathon"});
    }, 3000)
		return (
      <div>
      {this.state.name}
        <Header />
        <Footer />
      </div>
	  );
	}
}
