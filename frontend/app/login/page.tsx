"use client";

import Input from "@/components/ui/Input";
import { useLogin } from "@/features/login/hooks/useLogin";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { email, password, setEmail, setPassword, handleLogin } = useLogin();

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-5">ログイン!</h1>

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
          className="w-full bg-blue-500 text-white p-2 rounded mb-3"
        >
          ログイン!
        </button>

        <div
          className="text-sm mb-3"
        >
          会員登録がまだの方はこちら
        </div>

        <button
          onClick={() => router.push("./register")}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          新規登録
        </button>
      </div>
    </div>
  );
}
