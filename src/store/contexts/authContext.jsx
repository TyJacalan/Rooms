import { createContext, useContext, useReducer } from "react";

import authReducer from "../reducers/authReducer";
import * as actions from "../actions/authActions";
import * as types from "../constants/authConstants";

const initialState = {
  userData: null,
  accessToken: null,
  expiry: null,
  uid: null,
  signInError: null,
  signUpError: null,
  toastMessage: null,
};

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  console.log(state);

  const value = {
    ...state,
    signInAction: async (formState, navigate) => {
      const result = await actions.signInAction(formState, navigate);
      dispatch(result);
    },
    signUpAction: async (formState, navigate) => {
      const result = await actions.signUpAction(formState, navigate);
      dispatch(result);
    },
    clearMessageAction: async () => {
      dispatch({ type: types.CLEAR_MESSAGE });
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
