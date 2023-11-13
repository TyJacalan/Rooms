import { API, handleApiError } from "./utils";

export async function signIn(formData) {
  try {
    const response = await API.post("/auth/sign_in", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return { error: null, profile: response.data };
  } catch (error) {
    return handleApiError(error);
  }
}
