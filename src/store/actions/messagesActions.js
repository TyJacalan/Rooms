import * as api from "../api/messagesAPI";
import * as types from "../constants/messagesConstants";

export async function sendMessageAction(messageData) {
  try {
    const response = await api.sendMessage(messageData);

    const { error } = response;

    if (error) {
      return {
        type: types.ACTION_FAIL,
        payload: error,
      };
    } else {
      return {
        type: types.SEND_DIRECT_MESSAGE,
        payload: messageData,
      };
    }
  } catch (error) {
    return {
      type: types.ACTION_FAIL,
      payload: types.ERROR_MESSAGE,
    };
  }
}

export async function receiveMessageAction(receiverData) {
  try {
    const response = await api.receiveMessage(receiverData);
    const { error, messages } = response;

    if (error) {
      return {
        type: types.ACTION_FAIL,
        payload: error,
      };
    } else {
      return {
        type: types.RECEIVE_DIRECT_MESSAGE,
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
