import { combineReducers } from "redux";
import gameReducer from "./gameReducer";

const allReducers = combineReducers({
  Game: gameReducer,
});

export default allReducers;
