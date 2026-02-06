"use client";

export const saveUser = (token: string, name: string) => {
  localStorage.setItem("token", token);
  localStorage.setItem("name", name);
};

export const getUserName = () => {
  return localStorage.getItem("name");
};

export const clearUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
};