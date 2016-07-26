import React from "react";
import ContentEditable from "react-contenteditable";
import _ from 'lodash';
import { connect } from "react-redux";
import store from '../store';
import Checkbox from './utility/checkbox';
import List from './utility/list';
import Item from './utility/item';
import TagActions from '../actions/tag';
import TodoTagActions from '../actions/todo-tag';
import TodoActions from '../actions/todo';

export default React.createClass({

  getDefaultProps: function() {
    return {
      todos: []
    }
  },

  getInitialState: function() {
    return {selectedTag: ''};
  },

  check: function(id) {
    return () => store.dispatch(TodoActions.toggle(id));
  },

  edit: function(id) {
    let edit = _.debounce(function(text) {
      store.dispatch(TagActions.update(id, {text}));
    }, 500);

    return evt => edit(evt.target.value);
  },

  addTag: function(evt) {
    store.dispatch(TagActions.create(evt.target.value));

    evt.target.value = '';
  },

  catchEnter: function(evt) {
    if( evt.keyCode == '13' ) {
      evt.preventDefault();

      this.addTag(evt);
    }
  },

  handleChange: function(evt){
    this.setState({html: evt.target.value});
  },

  renderItems: function(item) {
    return (
      <Item key={ item.id} ContentEditable={true}>
        {item.text}
      </Item>
   );
 },
 componentDidMount: function() {
  this.unsubscribe = store.subscribe(_.bind(this.forceUpdate, this));
 },

 componentWillUnmount: function() {
  this.unsubscribe();
 },

 getTag: function(value) {
   let currentEntry = new RegExp('\^' + value);

   return _.find(store.getState().tags,function(tag) {
     return currentEntry.test(tag.text);
   });
 },

 setTagFromSelection: function(evt) {
   let actionArgs = {
     text: this.state.selectedTag,
     todo_id: store.getState().currentObject.id
   };

   if(this.getTag(this.state.selectedTag)) {
     actionArgs.tag_id = this.getTag(this.state.selectedTag).id;
   }

   store.dispatch(TodoTagActions.create(actionArgs))

   this.refs.entry.value = '';
   this.setState({selectedTag: ''});
 },

 render: function() {
   return (
     <div>
       <h3>{store.getState().currentTodo.text}</h3>
       <List>
          {console.log("TODO-TAGS", store.getState().tags)}
         <input ref="entry" type="text" onKeyDown = { this.catchKey } placeholder = "new tag" />
         <div onClick={ this.setTagFromSelection }>{this.state.selectedTag}</div>
         { store.getState().filteredTags.map(this.renderItems) }
       </List>
     </div>
   );
 }
});
