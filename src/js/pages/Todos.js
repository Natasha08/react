import React from "react";
import TodoList from "../components/todo-list";
import store from "../store";

export default class Todo extends React.Component {

	render() {
		return (
      <div>
        Todo Page

				<TodoList />
      </div>
	  );
	}
}
