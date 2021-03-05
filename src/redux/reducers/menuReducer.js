import { SETMENU } from "../actionTypes";

const initialstate = {
  menu: true,
};

const menuReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SETMENU:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
};
export default menuReducer;
