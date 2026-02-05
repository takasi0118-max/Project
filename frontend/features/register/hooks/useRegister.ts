"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerApi } from "@/lib/api/auth";

export const useRegister = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSign = async () => {
    try {
      const message = await registerApi(name, email, password);
      alert(message);
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
    handleSign,
  };
};