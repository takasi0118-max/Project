"use client";

import { useEffect, useState } from "react";
import { getUserName } from "@/lib/auth";

export default function MemberPage() {
  const [name, setName] = useState("");

  useEffect(() => {
    const n = getUserName();
    if (n) setName(n);
  }, []);

  return (
    <div className="text-2xl font-bold">
      {name} さん、ようこそ！
    </div>
  );
}