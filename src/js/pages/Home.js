import React from "react";
import store from "../store";
import Pages from "../actions/page";

let pageName = 'Home';

export default class Home extends React.Component {
	setPage(pageName) {
	 store.dispatch(Pages.setPage({name:pageName}));
	}

	componentWillMount() {
		this.setPage(pageName);
	}

	render() {

		let state = store.getState();
		let name = state.name;
		return (
      <div>
        Home Page
		{	console.log("HOME", store.getState().currentPage)}
      </div>
	  );
	}
}
