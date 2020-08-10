import { USER_TYPES } from "../types";

const INITIAL_STATE = {
  user: null,
  token: null,
  loggedIn: false,
  loading: false,
  type: "student",
  error: "",
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_TYPES.SET_USER: {
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    }
    case USER_TYPES.LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case USER_TYPES.SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case USER_TYPES.SET_TYPE: {
      return {
        ...state,
        type: action.payload,
      };
    }
    case USER_TYPES.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export default userReducer;
