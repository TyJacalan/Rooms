import { API, handleApiError } from "./utils";

export async function signIn(formData) {
  try {
    const response = await API.post("/auth/sign_in", formData);

    const { headers, data } = response;

    const profile = {
      ...data,
      access_token: headers["access-token"],
      client: headers["client"],
      expiry: headers["expiry"],
      uid: headers["uid"],
    };

    return { error: null, profile };
  } catch (error) {
    return handleApiError(error);
  }
}

export async function signUp(formData) {
  try {
    const response = await API.post("/auth/", formData);

    return { error: null, data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
}
