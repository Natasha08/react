import React from "react";
import TodoTagList from "../components/todo-tag-list";
import store from "../store";

export default class TodoTags extends React.Component {

	render() {
		return (
      <div>
        Todo Tag List Page

				<TodoTagList />
      </div>
	  );
	}
}