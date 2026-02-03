"use client";

import Input from "@/components/Input";
import { useSign } from "../hooks/useSign";

export default function SignPage() {
  const { name, email, password, setName, setEmail, setPassword, handleSign } = useSign();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h1 className="text-[25px] leading-[1.5] font-bold mb-5">新規登録</h1>

        <Input
          type="text"
          placeholder="名前"
          value={name}
          onChange={setName}
        />

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
          onClick={handleSign}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          新規登録
        </button>
      </div>
    </div>
  );
}
