import React from "react";
import ContentEditable from "react-contenteditable";
import _ from 'lodash';
import { connect } from "react-redux";
import store from '../store';
import Checkbox from './utility/checkbox';
import List from './utility/list';
import Item from './utility/item';
import TagActions from '../actions/tag';

export default React.createClass({

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

  render() {
    return (
      <List>
       {console.log("TODO-TAGS", store.getState().tags)}
         <input type="text" onBlur = { this.addTag } onKeyDown = { this.catchEnter }  placeholder = "new tag" />
          {store.getState().tags.map(this.renderItems)}
      </List>
    );
  }

});
