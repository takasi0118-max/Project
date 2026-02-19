"use client";

import { TaskCreateRequest } from "@/lib/types/task";

export async function createTask(data:TaskCreateRequest) {
    const res = await fetch("http://localhost:8081/tasks", {
        method: "POST",
        credentials: "include",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(data),
    });

if (!res.ok) {
    throw new Error("タスクの作成に失敗しました。")
}

return res.json();
}