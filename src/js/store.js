"use strict"

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import tags from "./reducers/tags";
import todoTags from "./reducers/todo-tags";
import todos from "./reducers/todos";
import name from "./reducers/page";
import currentObject from "./reducers/currentObject";
import currentTodo from "./reducers/currentTodo";
import _ from 'lodash';

import composeReducer from '../lib/compose-reducer';



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

const rootReducer = (state = {}, action) => {
  //if(action.type === 'INIT') state = action.state || {};

  let firstPass = {
    tags: tags(state.tags, action),
    todos: todos(state.todos, action),
    todoTags: todoTags(state.todoTags, action),
    currentPage: name(state.currentPage, action),
    currentObject: currentObject(state.currentObject, action),
    filteredTags: state.filteredTags,
    currentTodo: state.currentTodo
  };

  return Object.assign(firstPass, {
    filteredTags: filteredTags(firstPass, action, 'filteredTags'),
   currentTodo: currentTodo(firstPass, action, 'currentTodo')
  });
}

//error middleware
let error = (store) => (next) => (action) => {
	try {
		next(action);
	} catch(e) {
		console.log("This is an error", e);
	}
};

let middleware = applyMiddleware(logger(), promise(), thunk, error);
let store = createStore(rootReducer, middleware);

export default store;

// store.subscribe(() => {
// 	console.log("store changed", store.getState());
// })
