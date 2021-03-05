import { SETTODOS, APPENDTODO } from "../actionTypes";

const initialstate = {
  todos: [],
};

const todoReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SETTODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case APPENDTODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
export default todoReducer;
