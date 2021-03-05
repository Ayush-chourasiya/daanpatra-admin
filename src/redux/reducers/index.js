import { combineReducers } from "redux";
import setUserIdReducer from "../reducers/setUserIdReducer";
import albumIdReducer from "../reducers/albumIdReducer";
import addButtonReducer from "../reducers/addButtonReducer";
import todoReducer from "../reducers/todoReducer";
import logoutButtonReducer from "../reducers/logoutButtonReducer";
import sidebarReducer from "../reducers/sidebarReducer";
import menuReducer from "../reducers/menuReducer";

const rootReducer = combineReducers({
  setUserIdReducer,
  albumIdReducer,
  addButtonReducer,
  todoReducer,
  logoutButtonReducer,
  sidebarReducer,
  menuReducer,
});
export default rootReducer;
