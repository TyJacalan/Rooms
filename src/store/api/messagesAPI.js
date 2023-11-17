import { API, handleApiError } from "./utils";

export async function sendMessage(messageData) {
  try {
    const response = await API.post("/messages", messageData);

    return { error: null, data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
}

export async function retrieveMessages({ receiver_id, receiver_class }) {
  try {
    const request = `/messages?receiver_id=${receiver_id}&receiver_class=${receiver_class}`;

    const response = await API.get(request);
    return { error: null, messages: response.data.data };
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getUserList() {
  try {
    const response = await API.get("/users");

    return { error: null, usersData: response.data.data };
  } catch (error) {
    return handleApiError(error);
  }
}

export async function createRoom(roomData) {
  try {
    const response = await API.post("/channels", roomData);

    return { error: response.data.errors };
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getRooms() {
  try {
    const response = await API.get("/channels");

    return { error: null, rooms: response.data };
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getRoomsDetails(channelID) {
  try {
    const response = await API.get(`/channels/${channelID}`);

    return { error: null, roomDetails: response.data };
  } catch (error) {
    return handleApiError(error);
  }
}

export async function addRoomMember(addMemberRequest) {
  try {
    const response = await API.post("/channel/add_member", addMemberRequest);

    return { error: response.data.errors };
  } catch (error) {
    return handleApiError(error);
  }
}
