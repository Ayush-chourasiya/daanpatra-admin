import { SETADDBUTTON } from "../actionTypes";

const initialState = {
  addButton: false,
};

const addButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETADDBUTTON:
      return {
        ...state,
        addButton: action.payload,
      };
    default:
      return state;
  }
};

export default addButtonReducer;
