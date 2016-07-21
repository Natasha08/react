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

render() {
  return (
    <div>
      				<h3>tag-list page</h3>
              <input type="text" placeholder = "new tag" />
              <li>
                {console.log("store tag", store.getState().foodItems.foods.items)}
                {console.log("foodItems", this.props)}
              </li>
    </div>
);
}
});


// import ContentEditable from "react-contenteditable";
// import _ from 'lodash';
//
// import store from 'store';
//
// import Checkbox from 'components/utility/checkbox';
// import List from 'components/utility/list';
// import Item from 'components/utility/item';
//
// import TagActions from 'actions/tag';
//
// export default React.createClass({
//   getDefaultProps: function() {
//     return {
//       tags: []
//     }
//   },
//
//   check: function(id) {
//     this.props.onCheck(id);
//   },
//
//   addTag: function(evt) {
//     store.dispatch(TagActions.create(evt.target.value));
//
//     evt.target.value = '';
//   },
//
//   editTag: function(id) {
//     let edit = _.debounce(function(text) {
//       store.dispatch(TagActions.update(id, {text}));
//     }, 1000);
//
//     return evt => edit(evt.target.value);
//   },
//
//   renderItems: function(item) {
//     return (
//       <Item key={ item.id} >
//         <ContentEditable
//           html={item.text} // innerHTML of the editable div
//           disabled={false}       // use true to disable edition
//           onChange={ this.editTag(item.id) } // handle innerHTML change
//         />
//       </Item>
//     );
//   },
//
//   catchEnter: function(evt) {
//     if( evt.keyCode == '13' ) {
//       evt.preventDefault();
//
//       this.addTag(evt);
//     }
//   },
//
//   componentDidMount: function() {
//     this.unsubscribe = store.subscribe(_.bind(this.forceUpdate, this));
//   },
//
//   componentWillUnmount: function() {
//     this.unsubscribe();
//   },
//
//   render: function() {
//     return (
//       <List>
//         <input type="text" onBlur = { this.addTag } onKeyDown = { this.catchEnter }  placeholder = "new tag" />
//         {store.getState().tags.map(this.renderItems)}
//       </List>
//     );
//   }
// });
