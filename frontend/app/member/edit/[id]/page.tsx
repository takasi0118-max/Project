"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Task, TaskCreateRequest } from "@/lib/types/task";
import { getTaskById, updateTask } from "@/lib/api/task";
import PrimaryButton from "@/components/ui/PrimaryButton";
import BackButton from "@/components/ui/BackButton";

export default function EditPage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const [task, setTask] = useState<Task | null>(null);

  // ★ 初期データ取得
  useEffect(() => {
    getTaskById(id).then((data) => setTask(data));
  }, [id]);

  if (!task) return <div>読み込み中...</div>;

  // ★ 更新処理
  const handleUpdate = async () => {
    const req: TaskCreateRequest = {
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
      dueDate: task.dueDate,
      assignedTo: task.assignedTo,
    };

    try {
      await updateTask(id, req);
      router.push("/member");
    } catch (e) {
      alert("更新に失敗しました");
    }
  };

  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <h1 className="text-xl font-bold mb-3">タスク編集</h1>

      <input
        className="border p-2 w-full mb-3"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />

      <textarea
        className="border p-2 w-full mb-3"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />

      <select
        className="border p-2 w-full mb-3"
        value={task.status}
        onChange={(e) => setTask({ ...task, status: e.target.value })}
      >
        <option value="未着手">未着手</option>
        <option value="実行中">実行中</option>
        <option value="完了">完了</option>
      </select>

      <select
        className="border p-2 w-full mb-3"
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option value="低">低</option>
        <option value="中">中</option>
        <option value="高">高</option>
      </select>

      <input
        type="date"
        className="border p-2 w-full mb-3"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
      />

      <input
        className="border p-2 w-full mb-3"
        value={task.assignedTo}
        onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
      />

      <PrimaryButton onClick={handleUpdate}>更新</PrimaryButton>
      <BackButton onClick={() => router.push("/member")}>戻る</BackButton>
    </div>
  );
}