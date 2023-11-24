import * as api from "../api/authAPI";
import * as types from "../constants/authConstants";

export async function signInAction(formData, navigate) {
  try {
    const response = await api.signIn(formData);
    const { error, profile } = response;

    if (error) {
      return {
        type: types.SIGNIN_FAIL,
        payload: error.response.data.errors,
      };
    } else {
      localStorage.setItem("profile", JSON.stringify(profile));
      navigate("/");
      return {
        type: types.SIGNIN_SUCCESS,
        payload: { ...profile, authMessage: types.SIGNIN_SUCCESS_MESSAGE },
      };
    }
  } catch (error) {
    return {
      type: types.SIGNIN_FAIL,
      payload: types.ERROR_MESSAGE,
    };
  }
}

export async function signUpAction(formData, navigate) {
  try {
    localStorage.removeItem("profile");
    const response = await api.signUp(formData);

    const { error } = response;

    if (error) {
      return {
        type: types.SIGNUP_FAIL,
        payload: error.response.data.errors,
      };
    } else {
      navigate("/");
      return {
        type: types.SIGNUP_SUCCESS,
        payload: types.SIGNUP_SUCCESS_MESSAGE,
      };
    }
  } catch (error) {
    return {
      type: types.SIGNUP_FAIL,
      payload: types.ERROR_MESSAGE,
    };
  }
}

export async function logOutAction() {
  try {
    localStorage.removeItem("profile");

    return {
      type: types.LOGOUT,
    };
  } catch (error) {
    return {
      type: types.LOGOUT,
      payload: types.ERROR_authMessage,
    };
  }
}
