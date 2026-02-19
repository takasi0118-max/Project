import { apiClient } from "./client";

const BASE_URL = "http://localhost:8081";

export const loginApi = (email: string, password: string) => {
  return apiClient(`${BASE_URL}/api/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
};

export const registerApi = (name: string, email: string, password: string) => {
  return apiClient(`${BASE_URL}/api/members/register`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
};