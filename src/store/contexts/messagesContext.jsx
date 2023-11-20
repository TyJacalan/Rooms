import { createContext, useContext, useReducer } from "react";

import messagesReducer from "../reducers/messagesReducer";
import * as actions from "../actions/messagesActions";
import * as types from "../constants/messagesConstants";

const initialState = {
  directMessages: [],
  retrievedDirectMessages: [],
  retrievedRoomMessages: [],
  usersList: [],
  friendsList: [],
  roomData: null,
  roomsList: [],
  roomsError: null,
  toastMessage: null,
};

const MessagesContext = createContext();

export default function MessagesProvider({ children }) {
  const [state, dispatch] = useReducer(messagesReducer, initialState);

  const value = {
    ...state,
    sendMessageAction: async (messageData) => {
      dispatch(await actions.sendMessageAction(messageData));
    },
    retrieveMessagesAction: async (receiverData) => {
      dispatch(await actions.retrieveMessagesAction(receiverData));
    },
    getUserListAction: async () => {
      dispatch(await actions.getUserListAction());
    },
    createRoomAction: async (roomData) => {
      dispatch(await actions.createRoomAction(roomData));
    },
    getRoomsAction: async () => {
      dispatch(await actions.getRoomsAction());
    },
    getRoomsDetailsAction: async (channelId) => {
      dispatch(await actions.getRoomsDetailsAction(channelId));
    },
    addRoomMemberAction: async (addMemberRequest) => {
      dispatch(await actions.addRoomMemberAction(addMemberRequest));
    },
    setRoomData: (roomData) => {
      dispatch({ type: types.SET_ROOM_DATA, payload: roomData });
    },
    setToastMessage: (message) => {
      dispatch({ type: types.SET_TOAST_MESSAGE, payload: message });
    },
    clearMessageAction: () => {
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
