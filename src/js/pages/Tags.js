import React from "react";
import store from "../store";
import Pages from "../actions/page";
import TagList from "../components/tag-list";

let pageName = 'Tags';

export default class Tags extends React.Component {
	setPage(pageName) {
	 store.dispatch(Pages.setPage({name:pageName}));
	}

	componentWillMount() {
		this.setPage(pageName);
	}

	render() {
		    let state = store.getState();
		return (
      <div>
        Tags Page

				<TagList />
      </div>
	  );
	}
}
