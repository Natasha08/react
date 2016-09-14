"use strict "

import axios from "axios";
import foodItems from "../models/food";

export function fetchFoodItems() {
  return {
    type: "FETCH_FOODITEMS",
    payload: foodItems
  }
}
