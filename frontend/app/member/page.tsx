"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Task } from "@/lib/types/task";
import TaskCard from "@/components/task/TaskCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function MemberPage() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);

  // ★ DB からタスクを取得
  useEffect(() => {
    fetch("http://localhost:8081/tasks", {
      credentials: "include", // ← SESSION Cookie を送る
    })
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const handleEdit = (id: number) => {
    router.push(`/member/edit/${id}`);
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleCreate = () => {
    router.push("/member/new/");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-end">
        <PrimaryButton onClick={handleCreate}>
          ＋ 新規タスク
        </PrimaryButton>
      </div>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}