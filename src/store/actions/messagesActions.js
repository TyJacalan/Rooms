import * as api from "../api/messagesAPI";
import * as types from "../constants/messagesConstants";

export async function sendMessageAction(messageData) {
  const profile = JSON.parse(localStorage.getItem("profile")) || null;

  try {
    const response = await api.sendMessage(messageData);

    const { error, data } = response;

    if (error) {
      return {
        type: types.ACTION_FAIL,
        payload: error,
      };
    } else {
      const modifiedData = {
        ...data.data,
        sender: {
          uid: profile ? profile.uid : null,
          id: profile ? profile.data.id : null,
        },
      };

      return {
        type: types.SEND_MESSAGE,
        payload: modifiedData,
      };
    }
  } catch (error) {
    return {
      type: types.ACTION_FAIL,
      payload: types.ERROR_MESSAGE,
    };
  }
}

export async function retrieveMessagesAction(receiverData) {
  try {
    const response = await api.retrieveMessages(receiverData);
    const { error, messages } = response;

    if (error) {
      return {
        type: types.ACTION_FAIL,
        payload: error,
      };
    } else {
      return {
        type: types.RETRIEVE_MESSAGE,
        payload: messages,
      };
    }
  } catch (error) {
    return {
      type: types.ACTION_FAIL,
      payload: types.ERROR_MESSAGE,
    };
  }
}

export async function getUserListAction() {
  try {
    const response = await api.getUserList();

    const { error, usersData } = response;

    if (error) {
      return {
        type: types.ACTION_FAIL,
        payload: error,
      };
    } else {
      return {
        type: types.GET_USER_LIST,
        payload: usersData,
      };
    }
  } catch (error) {
    return {
      type: types.ACTION_FAIL,
      payload: types.ERROR_MESSAGE,
    };
  }
}

export async function createRoomAction(roomData) {
  try {
    const response = await api.createRoom(roomData);

    const { error } = response;

    if (error) {
      return {
        type: types.ACTION_FAIL,
        payload: error,
      };
    } else {
      return {
        type: types.CREATE_ROOM,
        payload: types.CREATE_ROOM_SUCCESS_MESSAGE,
      };
    }
  } catch (error) {
    return {
      type: types.ACTION_FAIL,
      payload: types.ERROR_MESSAGE,
    };
  }
}

export async function getRoomsAction() {
  try {
    const response = await api.getRooms();

    const { error, rooms } = response;

    if (error) {
      return {
        type: types.GET_ROOMS_FAIL,
        payload: error,
      };
    } else {
      return {
        type: types.GET_ROOMS,
        payload: rooms,
      };
    }
  } catch (error) {
    return {
      type: types.ACTION_FAIL,
      payload: types.ERROR_MESSAGE,
    };
  }
}

export async function getRoomsDetailsAction(channelId) {
  try {
    const response = await api.getRoomsDetails(channelId);

    const { error, roomDetails } = response;

    if (error) {
      return {
        type: types.ACTION_FAIL,
        payload: error,
      };
    } else {
      return {
        type: types.GET_ROOM_DETAILS,
        payload: roomDetails,
      };
    }
  } catch (error) {
    return {
      type: types.ACTION_FAIL,
      payload: types.ERROR_MESSAGE,
    };
  }
}

export async function addRoomMemberAction(addMemberRequest) {
  try {
    const response = await api.addRoomMember(addMemberRequest);

    const { error } = response;

    if (error) {
      return {
        type: types.ACTION_FAIL,
        payload: error,
      };
    } else {
      return {
        type: types.ADD_USER_TO_ROOM,
        payload: types.ADD_USER_SUCCESS_MESSAGE,
      };
    }
  } catch (error) {
    return {
      type: types.ACTION_FAIL,
      payload: types.ERROR_MESSAGE,
    };
  }
}
