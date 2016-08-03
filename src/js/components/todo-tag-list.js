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

  // componentWillMount: function() {
  //   return { currentTodo: store.getState().currentTodo }
  // },
  //
  getInitialState: function() {
    return {selectedTag: ''};
  },

  check: function(id) {
    return () => store.dispatch(TodoTagActions.toggle(id));
  },

  edit: function(id) {
    let edit = _.debounce(function(text) {
      store.dispatch(TagActions.update(id, {text}));
    }, 500);

    return evt => edit(evt.target.value);
  },

  addTag: function(evt) {
    let actionArgs = {
      text: evt.target.value,
      todo_id:  store.getState().currentTodo.id
    };

    if(this.getTag(evt.target.value)) {
      actionArgs.tag_id = this.getTag(evt.target.value).id;
    }

    store.dispatch(TodoTagActions.create(actionArgs));

    evt.target.value = '';
    this.setState({selectedTag: ''});
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
       todo_id:  store.getState().currentTodo.id
     };

     if(this.getTag(this.state.selectedTag)) {
       actionArgs.tag_id = this.getTag(this.state.selectedTag).id;
     }

     store.dispatch(TodoTagActions.create(actionArgs))

     evt.target.value = '';
     this.setState({selectedTag: ''});
   },

  catchEnter: function(evt) {
    if( evt.keyCode == '13' ) {
      evt.preventDefault();

      this.addTag(evt);
      this.setTagFromSelection(evt);
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


// { store.getState().filteredTags.map(this.renderItems) }
 render: function() {
     let currentTodo = store.getState().currentTodo;
     let state = store.getState();
   return (

     <div>
       <h3>{store.getState().currentTodo.text}</h3>
       <List>

          <input ref = "entry" type="text" onBlur = { this.addTag } onKeyDown = { this.catchEnter }  placeholder = "new todo-tag" />
          {console.log("filterTags", state.filteredTags) }
          {console.log("state", state)}
          {console.log("state_currenttodo", currentTodo)}
         { store.getState().filteredTags.map(this.renderItems) }
       </List>
     </div>
   );
 }
});
