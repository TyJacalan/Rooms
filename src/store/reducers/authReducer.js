import * as types from "../constants/authConstants";

export default function authReducer(state, action) {
  const { type, payload } = action;
  console.log("type:", type, "payload:", payload);

  switch (type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        signInError: null,
        signUpErrors: {},
        toastMessage: payload ? payload : null,
      };

    case types.SIGNUP_FAIL:
      return {
        ...state,
        toastMessage: null,
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
        toastMessage: payload ? payload.toastMessage : null,
      };

    case types.SIGNIN_FAIL:
      return {
        ...state,
        toastMessage: null,
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
        toastMessage: payload ? payload : null,
      };

    case types.CLEAR_MESSAGE:
      return {
        ...state,
        toastMessage: null,
        signInError: null,
        signUpErrors: {},
      };

    default:
      return state;
  }
}
