import { apiClient } from "./client";

const BASE_URL = "http://localhost:8081/api";

export const loginApi = (email: string, password: string) => {
  return apiClient(`${BASE_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

export const registerApi = (name: string, email: string, password: string) => {
  return apiClient(`${BASE_URL}/members/register`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
};