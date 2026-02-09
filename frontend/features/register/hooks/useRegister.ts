"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerApi } from "@/lib/api/auth";
import { saveUser } from "@/lib/auth";

export const useRegister = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const data = await registerApi(name, email, password);

      saveUser(data.token, data.name, data.role);
      router.push("/member");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    handleRegister,
  };
};