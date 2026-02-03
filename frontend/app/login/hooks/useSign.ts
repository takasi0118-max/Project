"use client";

import { useState } from "react";

export const useSign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSign = async () => {
    const res = await fetch("http://localhost:8081/api/members/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const result = await res.json();
    alert(result.message ?? "登録成功");
  };


  return {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    handleSign,
  };
};
