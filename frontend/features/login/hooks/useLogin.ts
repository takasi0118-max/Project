"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginApi } from "@/lib/api/auth";

export const useLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const message = await loginApi(email, password);
      alert(message);
      router.push("/member");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
  };
};