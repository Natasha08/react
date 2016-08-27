"use strict "

import axios from "axios";

export function fetchTodos() {
  return function(dispatch) {
      axios.get("http://localhost:3000/todos")
    	.then((response) => {
    		dispatch({type: "RECEIVE_TODOS", payload: response.data})
    	})
    	.catch((error) => {
    		dispatch({type: "FETCH_TODOS_ERROR", payload: error})
    	})
  }
}
