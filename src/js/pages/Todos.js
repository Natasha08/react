import React from "react";
import TodoList from "components/todo-list";
import store from "store";
import Actions from 'actions/page';
import { browserHistory } from 'react-router'
import Pages from 'actions/page';
import {fetchTodos} from "actions/todoRepository";


let pageName = 'Todos';

export default class Home extends React.Component {
  setPage(pageName) {
   store.dispatch(Pages.setPage({name:pageName}));
  }
  getTodo() {
    store.dispatch(fetchTodos());
  }
  componentWillMount() {
    this.setPage(pageName);
    this.getTodo();
  }

	render() {
    let state = store.getState();
		return (
      <div>
        Todos Page

      <TodoList />
      </div>
	  );
	}
}
