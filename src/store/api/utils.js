import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

function authInterceptor(req) {
  const accessToken = JSON.parse(localStorage.getItem("profile"))?.accessToken;
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
}

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(authInterceptor);

export async function handleApiError(error) {
  try {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "Invalid login credentials.";
    const data = null;

    return { error: errorMessage, data };
  } catch (err) {
    throw new Error("An unexpected error occurred.");
  }
}
