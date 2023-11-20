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
    case types.SEND_MESSAGE:
      return {
        ...state,
        retrievedDirectMessages: payload
          ? [...state.retrievedDirectMessages, payload]
          : state.retrievedDirectMessages,
      };
    case types.RETRIEVE_MESSAGE:
      return {
        ...state,
        retrievedDirectMessages: payload ? payload : [],
      };
    case types.CREATE_ROOM:
      return {
        ...state,
        toastMessage: payload ? payload : null,
      };
    case types.ADD_USER_TO_ROOM:
      return {
        ...state,
        toastMessage: payload ? payload : null,
      };
    case types.GET_ROOMS:
      return {
        ...state,
        roomsList: payload ? payload : [],
      };
    case types.GET_ROOMS_FAIL:
      return {
        ...state,
        roomsError: payload ? payload : null,
      };
    case types.GET_ROOM_DETAILS:
      return {
        ...state,
        retrievedRoomMessages: payload ? payload : [],
      };

    case types.ACTION_FAIL:
      return {
        ...state,
        toastMessage: payload ? payload : null,
      };
    case types.SET_ROOM_DATA:
      return {
        ...state,
        roomData: payload ? payload : null,
      };
    case types.SET_TOAST_MESSAGE:
      return {
        ...state,
        toastMessage: payload ? payload : null,
      };
    case types.CLEAR_MESSAGE:
      return {
        ...state,
        toastMessage: null,
      };

    default:
      return state;
  }
}
