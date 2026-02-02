"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await res.json();
    if (result.message === "ログイン成功！") {
        alert("ログイン成功！")
        router.push("/member");
    } else {
        alert("メールアドレスまたはパスワードが違います");
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
