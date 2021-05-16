import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import search from "./search";

const allReducers = combineReducers({
  Game: gameReducer,
  Search: search,
});

export default allReducers;
