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

export default React.createClass({
  addTodo: function(evt) {
    store.dispatch(TodoActions.create(evt.target.value));
    evt.target.value = '';
  },

  check: function(id) {
    return () => store.dispatch(TodoActions.toggle(id));
  },

  showTagList: function(id) {
    return function() {
      store.dispatch(TodoActions.setCurrent(id));
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
    return (
      <Item key={ item.id} ContentEditable={true}>
        <Checkbox checked = { item.completed } onCheck={ this.check(item.id) } id={item.id} />
        {item.text}
        {' '}
        <Link to = "todotags"><button onClick={ this.showTagList(item.id) }>tags</button></Link>
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
    return (
      <List>
      {console.log("TODOS", store.getState().todos)}
        <input type="text" onBlur = { this.addTodo } onKeyDown = { this.catchEnter }  placeholder = "new todo" />
         {store.getState().todos.map(this.renderItems)}
     </List>
    );
  }
})
