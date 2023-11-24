import { createContext, useContext, useReducer } from "react";

import authReducer from "../reducers/authReducer";
import * as actions from "../actions/authActions";
import * as types from "../constants/authConstants";

const initialState = {
  userData: null,
  accessToken: null,
  signInError: null,
  signUpErrors: {},
  authMessage: null,
};

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const value = {
    ...state,
    signInAction: async (formState, navigate) => {
      dispatch(await actions.signInAction(formState, navigate));
    },
    signUpAction: async (formState, navigate) => {
      dispatch(await actions.signUpAction(formState, navigate));
    },
    logOutAction: async () => {
      dispatch(await actions.logOutAction());
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
