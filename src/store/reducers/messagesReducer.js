import * as types from "../constants/messagesConstants";

export default function messagesReducer(state, action) {
  const { type, payload } = action;
  console.log("type: ", type, "payload: ", payload);

  switch (type) {
    case types.GET_USER_LIST:
      return {
        ...state,
        usersList: payload ? payload : [],
      };
    case types.SEND_DIRECT_MESSAGE:
      return {
        ...state,
        directMessages: payload
          ? [...state.directMessages, payload]
          : state.directMessages,
      };
    case types.RECEIVE_DIRECT_MESSAGE:
      return {
        ...state,
        retrievedDirectMessages: payload ? payload : [],
      };
    case types.SEND_ROOM_MESSAGE:
    case types.RECEIVE_ROOM_MESSAGE:
      return {
        ...state,
        roomMessages: payload ? payload : [],
      };
    case types.CREATE_ROOM:
      return {
        ...state,
        roomMessages: payload ? payload : null,
        toastMessage: payload ? payload : null,
      };
    case types.ACTION_FAIL:
      return {
        ...state,
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
