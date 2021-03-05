import { SETALBUMID } from "../actionTypes";

const initialstate = {
  albumId: null,
};

const albumIdReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SETALBUMID:
      return {
        ...state,
        albumId: action.payload,
      };
    default:
      return state;
  }
};
export default albumIdReducer;
