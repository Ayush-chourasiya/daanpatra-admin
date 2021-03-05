import { SETLOGOUTBUTTON } from "../actionTypes";

const initialState = {
  logoutButton: true,
};

const logoutButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETLOGOUTBUTTON:
      return {
        ...state,
        logoutButton: action.payload,
      };
    default:
      return state;
  }
};

export default logoutButtonReducer;
