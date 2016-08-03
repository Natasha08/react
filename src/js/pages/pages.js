import React from "react";
import TodoList from "../components/todo-list";
import store from "../store";
import Actions from '../actions/page';
import { browserHistory } from 'react-router'
import Pages from '../actions/page';


let defaultPage = null;
let pages = [];


var Page = React.createClass({

  componentDidMount: function() {
    this.unsubscribe = store.subscribe(this.forceUpdate.bind(this));

  },

  componentWillUnmount: function() {
    this.unsubscribe();
  },

  render: function() {
    let props = this.props;

    if (! props.name && ! props.default) {
      throw new Error('Please specify name prop or default');
    }
    pages = _.uniq([...pages, props.name]);

    if(store.getState().currentPage === props.name) {
      return (
        <div className='page' id={props.name} >
          { props.children }
        </div>
      );
    } else return null;
  }
});

let navigate = function(pageName) {
  let selectedPage = _.includes(pageName ? pageName : pageName);
  let hash = selectedPage ? '#' + selectedPage : ' ';

  if(selectedPage !== store.getState().currentPage) {
    window.history.pushState(selectedPage, null, hash);
    store.dispatch(Actions.setPage(selectedPage));
  }
}

var link = _.partial(_.partial, navigate);

let navigateDefault = function(pageName) {
  if(defaultPage === null) {
    defaultPage = pageName
		browserHistory.push('todos');
    navigate(window.location.hash.toString().replace(/^#/, ''));
  }
}

let active = function(pageName) {
  return pageName === store.getState().currentPage;
}

window.onpopstate = function(event) {
  navigate(event.state);
};

export default Object.assign(Page, {
  link, navigate, navigateDefault, active
});
