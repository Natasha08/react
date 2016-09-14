import React from "react";
import ContentEditable from "react-contenteditable";
import _ from 'lodash';
import { connect } from "react-redux";
import store from 'store';
import Checkbox from './utility/checkbox';
import List from './utility/list';
import Item from './utility/item';
import TodoActions from 'actions/todo';
import { Link } from "react-router";
import Page from "pages/pages";
import { saveTodos } from "actions/saveTodoRepository";

export default React.createClass({
  addTodo: function(evt) {
    console.log('EVT', evt);
    store.dispatch(TodoActions.create(evt.target.value));
    evt.target.value = '';
  },

  saveTodo: function(evt) {
    console.log("SAVE_TODO_TEXT", evt.target.value)
    store.dispatch(saveTodos(evt.target.value));
    evt.target.value = '';
  },

  check: function(id) {
    return () => store.dispatch(TodoActions.toggle(id));
  },

  showTagList: function(id, text) {
    return function() {
      store.dispatch(TodoActions.setCurrent(id, text));
    }
  },

  componentDidMount: function() {
    let forceUpdate = this.forceUpdate.bind(this);

    this.unsubscribe = store.subscribe(function() {
      forceUpdate();
    });
  },

  componentWillUnmount: function() {
    this.unsubscribe();
  },

  renderItems: function(item) {
    let id = item.id;
    let text = item.text;

    return (
      <Item key={ id} ContentEditable={true}>
        <Checkbox checked = { item.completed } onCheck={ this.check(id) } id={id} />
        {text}
        {' '}
        {console.log("ITEM_TEXT", text)}

        <Link to = 'todotags'><button onClick={ this.showTagList(id, text) }>tags</button></Link>
      </Item>
   );
 },

  catchEnter: function(evt) {
    if( evt.keyCode == '13' ) {
      // evt.preventDefault();
      console.log("CATCH_ENTER_TEXT", evt.target.value);
      this.saveTodo(evt);
      return true;
    }
  },

  render: function() {
        let state = store.getState();
    return (
      <List>
        <label htmlFor="new todo"></label>
        <input id="new todo" type="text" onBlur = { this.addTodo } onKeyDown = { this.catchEnter }  placeholder = "new todo" />
         {store.getState().todos.map(this.renderItems)}
         {state.todoRepository.todos.map(this.renderItems)}
     </List>
    );
  }
})
