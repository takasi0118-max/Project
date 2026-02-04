"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const useRegister = () => {
  const router = useRouter();
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

    const message = await res.text();
    
    if (res.ok) {
      alert(message);
      router.push("/member");
    } else {
      alert(message);
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
