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

  return (
    <div>
      
    </div>
  );
}