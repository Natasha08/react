"use strict"

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import rootReducer from "./reducers/reducer";


import _ from 'lodash';

import composeReducer from '../lib/compose-reducer';

let currentObject = composeReducer({
  SET_CURRENT: function(state, action) {
    console.log(state, action, _.pick(action, 'model_type', 'id'));
    return _.pick(action, 'model_type', 'id');
  },

  DEFAULT: _.partial(_.identity, {})
});

let filteredTags = function(state, action) {
  if(state.currentObject) {
    if (state.currentObject.model_type === 'Todo') {
      let tagIds = _.map(_.filter(state.todoTags, {
        todo_id: state.currentObject.id
      }), 'tag_id');

      return _.filter(state.tags, function(tag) {
        return _.includes(tagIds, tag.id);
      });
    }
  }

  return [];
};

let currentTodo = composeReducer({
  DEFAULT: {text: 'None selected'},
  SET_CURRENT: function(state, action) {
    if (state.currentObject.model_type === 'Todo') {
      return _.find(state.todos, {id: state.currentObject.id})
    }
  }
})

let resolveClientRelations = function(store, action) {
  return {
    todoTags: _.map(store.todoTags, function(todoTag) {
      let state = todoTag;

      if(state.todo_ExternalId && state.todo_id === undefined) {
        let todo = _.find(store.todos, {externalId: state.todo_ExternalId});
        state = Object.assign({}, state, {todo_id: todo && todo.id });
      }

      if(state.todo_id && state.todo_ExternalId === undefined) {
        let todo = _.find(store.todos, {id: state.todo_id});
        state = Object.assign({}, state, {todo_ExternalId: todo && todo.externalId});
      }

      if(state.tag_ExternalId && state.tag_id === undefined) {
        let tag = _.find(store.tags, {externalId: state.tag_ExternalId});
        state = Object.assign({}, state, {tag_id: tag && tag.id });
      }

      if(state.tag_id && state.tag_ExternalId === undefined) {
        let tag = _.find(store.tags, {id: state.tag_id});
        state = Object.assign({}, state, {tag_ExternalId: tag && tag.externalId});
      }

      return state;
    })
  };
}


//declared variable to remove console error (store undefined)
var store;

//error middleware
const error = (store) => (next) => (action) => {
	try {
		next(action);
	} catch(e) {
		console.log("This is an error", e);
	}
};

const middleware = applyMiddleware(logger(), promise(), thunk, error);

export default store = createStore(rootReducer, middleware);

store.subscribe(() => {
	console.log("store changed", store.getState());
})
