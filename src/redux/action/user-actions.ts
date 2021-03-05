import { SIGNIN } from "../actionTypes/user-action-types";

export const signin = (payload) => {
  return {
    type: SIGNIN,
    payload,
  };
};
