import { SETUSERID } from "../actionTypes";
const initialState = {
  userId: null,
};

const setUserIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETUSERID:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};
export default setUserIdReducer;
