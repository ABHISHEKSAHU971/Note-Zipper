import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
} from "../Constant/userConstant.js";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { Loader: true };
    case USER_LOGIN_SUCCESS:
      return { Loader: true, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { Loader: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
