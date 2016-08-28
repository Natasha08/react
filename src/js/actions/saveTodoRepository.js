"use strict "

import axios from "axios";

export function saveTodos(text) {
  return function(dispatch) {
      dispatch({type: "SAVE_TODOS_START"})

      axios.post("http://localhost:3000/todos", {
          text: text
      })
    	.then((response) => {
    		dispatch({type: "SAVE_TODOS", payload: response.data})
    	})
    	.catch((error) => {
    		dispatch({type: "SAVE_TODOS_ERROR", payload: error})
    	})
  }
}
