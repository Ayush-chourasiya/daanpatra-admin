import {
  SETUSERID,
  SETALBUMID,
  SETADDBUTTON,
  SETTODOS,
  APPENDTODO,
  SETLOGOUTBUTTON,
  SETSIDEBAR,
  SETMENU,
} from "../actionTypes";

export const setUserId = (payload) => {
  return {
    type: SETUSERID,
    payload,
  };
};

export const setAlbumId = (payload) => {
  return {
    type: SETALBUMID,
    payload,
  };
};

export const setAddButton = (payload) => {
  return {
    type: SETADDBUTTON,
    payload,
  };
};
export const setLogoutButton = (payload) => {
  return {
    type: SETLOGOUTBUTTON,
    payload,
  };
};

export const setTodos = (payload) => {
  return {
    type: SETTODOS,
    payload,
  };
};
export const appendTodo = (payload) => {
  return {
    type: APPENDTODO,
    payload,
  };
};
export const setSidebar = (payload) => {
  return {
    type: SETSIDEBAR,
    payload,
  };
};
export const setMenu = (payload) => {
  return {
    type: SETMENU,
    payload,
  };
};
