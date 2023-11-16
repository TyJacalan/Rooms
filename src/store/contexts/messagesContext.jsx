import { createContext, useContext, useReducer } from "react";

import messagesReducer from "../reducers/messagesReducer";
import * as actions from "../actions/messagesActions";
import * as types from "../constants/messagesConstants";

const initialState = {
  directMessages: [],
  retrievedDirectMessages: [],
  retrievedRoomMessages: [],
  toastMessage: null,
};

const MessagesContext = createContext();

export default function MessagesProvider({ children }) {
  const [state, dispatch] = useReducer(messagesReducer, initialState);

  const value = {
    ...state,
    sendMessageAction: async (messageData) => {
      const result = await actions.sendMessageAction(messageData);
      dispatch(result);
    },
    receiveMessageAction: async (receiverData) => {
      const result = await actions.receiveMessageAction(receiverData);
      dispatch(result);
    },
    clearMessageAction: async () => {
      dispatch({ type: types.CLEAR_MESSAGE });
    },
  };

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
}

export function useMessagesContext() {
  return useContext(MessagesContext);
}
