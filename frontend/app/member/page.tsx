"use client";

import { useEffect, useState } from "react";
import { getUserName } from "@/lib/auth";

export default function MemberPage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");


  useEffect(() => {
    const n = getUserName();
    const r = localStorage.getItem("role");
    if (n) setName(n);
    if (r) setRole(r);
  }, []);

  return (
    <div className="text-2xl font-bold">
      {name} さん、ようこそ！<br />
      あなたの権限：{role === "ADMIN" ? "管理者" : "一般ユーザー"}
    </div>
  );
}