import React from "react";
import TodoTagList from "components/todo-tag-list";
import store from "store";
import Pages from "actions/page";

let pageName = 'TodoTags';

export default class TodoTags extends React.Component {
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
        Todo Tag List Page

				<TodoTagList />
      </div>
	  );
	}
}
