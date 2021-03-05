import { SETSIDEBAR } from "../actionTypes";

const initialstate = {
  sidebar: false,
};

const sidebarReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SETSIDEBAR:
      return {
        ...state,
        sidebar: action.payload,
      };
    default:
      return state;
  }
};
export default sidebarReducer;
