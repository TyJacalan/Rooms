import { createContext, useContext, useReducer } from "react";

import authReducer from "../reducers/authReducer";

const initialState = {
  userData: null,
  refreshToken: null,
  accessToken: null,
  signInError: "test",
  signUpError: null,
  toastMessage: null,
};

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const value = {
    ...state,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
