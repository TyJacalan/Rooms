import { API, handleApiError } from "./utils";

export async function sendMessage(messageData) {
  try {
    const response = await API.post("/messages", messageData);

    return { error: null, data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
}

export async function receiveMessage({ receiver_id, receiver_class }) {
  try {
    const request = `/messages?receiver_id=${receiver_id}&receiver_class=${receiver_class}`;

    const response = await API.get(request);
    return { error: null, messages: response.data.data };
  } catch (error) {
    return handleApiError(error);
  }
}
