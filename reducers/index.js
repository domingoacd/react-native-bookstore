import counterReducer from './counter';
import loggedReducer from './isLogged';
import books from './books';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  books
});

export default rootReducer;