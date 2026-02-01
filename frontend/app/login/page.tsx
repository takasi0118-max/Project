"use client";

import { useState } from "react";
import Input from "@/components/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await res.json();
    alert(result.message);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h1 className="text-[25px] leading-[1.5] font-bold mb-5">ログイン!</h1>


        <Input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={setEmail}
        />

        <Input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={setPassword}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          ログイン!
        </button>
      </div>
    </div>
  );
}
