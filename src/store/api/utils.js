import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

function authInterceptor(req) {
  const profile = JSON.parse(localStorage.getItem("profile")) || null;

  if (profile) {
    req.headers["access-token"] = profile?.access_token || "";
    req.headers.client = profile.client || "";
    req.headers.expiry = profile.expiry || "";
    req.headers.id = profile.data.id || "";
    req.headers.uid = profile.uid || "";
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
    return { error: error, data: null };
  } catch (err) {
    throw new Error("An unexpected error occurred.");
  }
}
