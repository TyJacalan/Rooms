import * as types from "@/store/constants/authConstants";

export default function authReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: payload ? payload : null,
      };
    case types.SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: payload ? payload : null,
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
        refreshToken: payload ? payload.refreshToken : null,
        signInError: null,
        toastMessage: payload ? payload : null,
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
        refreshToken: null,
        accessToken: null,
        signInError: null,
        signUpError: null,
        toastMessage: null,
      };

    case types.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: payload ? payload.accessToken : null,
        refreshToken: payload ? payload.refreshToken : null,
      };

    case types.REFRESH_TOKEN_FAIL:
      return {
        ...state,
        userData: null,
        refreshToken: null,
        accessToken: null,
        signUpError: [],
        signInError: null,
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
