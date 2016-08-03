import React from "react";
import ContentEditable from "react-contenteditable";
import _ from 'lodash';
import { connect } from "react-redux";
import store from '../store';
import Checkbox from './utility/checkbox';
import List from './utility/list';
import Item from './utility/item';
import TodoActions from '../actions/todo';
import { Link } from "react-router";
import Page from "../pages/pages";

export default React.createClass({
  addTodo: function(evt) {
    store.dispatch(TodoActions.create(evt.target.value));
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
      evt.preventDefault();

      this.addTodo(evt);
      return true;
    }
  },

  render: function() {
        let state = store.getState();
    return (
      <List>
      {console.log("TODOS", store.getState().todos)}
      {	console.log("CURRENT_TODO", store.getState().currentTodo)}
          {	console.log("FILTERED_TAGS", store.getState().filteredTags)}
        <input type="text" onBlur = { this.addTodo } onKeyDown = { this.catchEnter }  placeholder = "new todo" />
         {store.getState().todos.map(this.renderItems)}
     </List>
    );
  }
})
