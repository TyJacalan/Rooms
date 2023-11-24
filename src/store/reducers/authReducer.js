import * as types from "../constants/authConstants";

export default function authReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        signInError: null,
        signUpErrors: {},
        authMessage: payload ? payload : null,
      };

    case types.SIGNUP_FAIL:
      return {
        ...state,
        authMessage: null,
        signInError: null,
        signUpErrors: payload ? payload : {},
      };

    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        userData: payload ? payload.user : null,
        accessToken: payload ? payload.accessToken : null,
        expiry: payload ? payload.expiry : null,
        uid: payload ? payload.uid : null,
        signInError: null,
        authMessage: payload ? payload.authMessage : null,
      };

    case types.SIGNIN_FAIL:
      return {
        ...state,
        authMessage: null,
        signUpErrors: {},
        signInError: payload ? payload : null,
      };

    case types.LOGOUT:
      return {
        ...state,
        userData: null,
        accessToken: null,
        expiry: null,
        uid: null,
        signInError: null,
        signUpErrors: {},
        authMessage: payload ? payload : null,
      };

    case types.CLEAR_MESSAGE:
      return {
        ...state,
        authMessage: null,
        signInError: null,
        signUpErrors: {},
      };

    default:
      return state;
  }
}
