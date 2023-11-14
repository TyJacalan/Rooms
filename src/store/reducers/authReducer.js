import * as types from "../constants/authConstants";

export default function authReducer(state, action) {
  const { type, payload } = action;
  console.log("type:", type, "payload:", payload);

  switch (type) {
    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: payload ? payload : null,
      };
    case types.SET_USER_DATA:
      return {
        ...state,
        userData: payload ? payload : null,
      };

    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        signInError: null,
        signUpError: null,
        toastMessage: payload ? payload : null,
      };

    case types.SIGNUP_FAIL:
      return {
        ...state,
        toastMessage: null,
        signInError: null,
        signUpError: payload ? payload : null,
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
        signUpError: null,
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
        signUpError: null,
        toastMessage: null,
      };

    case types.GET_USER_PREFERENCES_SUCCESS:
      return {
        ...state,
        userPreferences: payload ? payload : null,
        toastMessage: null,
      };

    case types.GET_USER_PREFERENCES_FAIL:
      return {
        ...state,
        userPreferences: null,
        toastMessage: payload ? payload : null,
      };

    case types.CLEAR_MESSAGE:
      return {
        ...state,
        toastMessage: null,
        signInError: null,
        signUpError: null,
      };

    default:
      return state;
  }
}
