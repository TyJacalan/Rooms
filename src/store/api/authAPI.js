import { API, handleApiError } from "./utils";

export async function signIn(formData) {
  try {
    const response = await API.post("/auth/sign_in", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { headers, data } = response;

    const profile = {
      ...data,
      access_token: headers["access-token"],
      expiry: headers["expiry"],
      uid: headers["uid"],
    };

    console.log(headers);

    return { error: null, profile };
  } catch (error) {
    return handleApiError(error);
  }
}
