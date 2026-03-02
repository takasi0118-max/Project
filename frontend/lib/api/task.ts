import { Task, TaskCreateRequest } from "@/lib/types/task";

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

export async function getTaskById(id: number): Promise<Task> {
  const res = await fetch(`http://localhost:8081/tasks/${id}`, {
    credentials: "include",
  });
  return res.json();
}

export async function updateTask(id: number, data: TaskCreateRequest) {
  const res = await fetch(`http://localhost:8081/tasks/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("更新に失敗しました");
  }

  return res.json();
}