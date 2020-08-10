import { USER_TYPES } from "../types";
import { signUp, signIn } from "../../utils/api";

export const setUser = (user) => ({
  type: USER_TYPES.SET_USER,
  payload: user,
});

export const setToken = (token) => ({
  type: USER_TYPES.SET_TOKEN,
  payload: token,
});

export const setUserType = (type) => ({
  type: USER_TYPES.SET_TYPE,
  payload: type,
});

export const setLoading = (state) => ({
  type: USER_TYPES.LOADING,
  payload: state,
});

export const signUpUser = (
  name,
  password,
  teacherCode,
  studentCode,
  schoolCode,
  role
) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await signUp(
      name,
      password,
      teacherCode,
      studentCode,
      schoolCode,
      role
    );
    console.log("response", response);
    dispatch(setLoading(false));
    dispatch(setUser(response.user));
    dispatch(setUserType(response.user.role));
    dispatch(setToken(response.token))
    dispatch(setLoading(false));
  };
};

export const signInUser = (code, name, type) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await signIn(code, name, type);
    dispatch(setUser(response.user));
    dispatch(setUserType(response.user.role));
    dispatch(setToken(response.token))
    
    console.log("sigin", code, name, type);
    console.log('signin response', response)
    dispatch(setLoading(false));
  };
};
