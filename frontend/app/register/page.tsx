"use client";

import Input from "@/components/ui/Input";
import { useRegister } from "@/features/register/hooks/useRegister";
import { useRouter } from "next/navigation";

export default function SignPage() {
  const router = useRouter();
  const { name, email, password, setName, setEmail, setPassword, handleSign } = useRegister();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-5">新規登録</h1>

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
          className="w-full bg-blue-500 text-white p-2 rounded mb-3"
        >
          新規登録
        </button>

        <div className="text-center text-sm">
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => router.push("/login")}
          >
            ログインへ戻る
          </span>
        </div>


      </div>
    </div>
  );
}
