"use strict "

import axios from "axios";

export function fetchUserThunk() {
  return function(dispatch) {
      axios.get("http://rest.learncode.academy/api/wstern/users")
    	.then((response) => {
    		dispatch({type: "RECEIVE_USERS", payload: response.data})
    	})
    	.catch((error) => {
    		dispatch({type: "FETCH_USERS_ERROR", payload: error})
    	})
  }
}
