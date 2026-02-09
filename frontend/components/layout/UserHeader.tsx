"use client";

import { useEffect, useState } from "react";

export default function UserHeader() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const n = localStorage.getItem("name");
    const r = localStorage.getItem("role");

    if (n) setName(n);
    if (r) setRole(r);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");

    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between items-center text-2xl font-bold p-2 border-b mb-4">
      <div className="text-xl">
        {name} さん、ようこそ！　
        あなたの権限：{role === "ADMIN" ? "管理者" : "一般ユーザー"}
      </div>

      <button
        onClick={handleLogout}
        className="text-lg bg-gray-400 text-white px-2 py-2 rounded hover:bg-gray-600"
      >
        ログアウト
      </button>
    </div>
  );
}