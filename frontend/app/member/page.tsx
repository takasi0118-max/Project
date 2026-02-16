"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TaskCard from "@/components/task/TaskCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function MemberPage() {
  const router = useRouter();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "API 実装",
      description: "Spring Boot で CRUD API を作成する",
      status: "DOING",
      priority: "HIGH",
      dueDate: "2024-02-10",
      assignedTo: "田中"
    },
    {
      id: 2,
      title: "UI デザイン",
      description: "タスク管理画面のデザインを作成",
      status: "TODO",
      priority: "MEDIUM",
      dueDate: "2024-02-12",
      assignedTo: "森本"
    },
  ]);

  const handleEdit = (id: number) => {
    router.push("/member/edit/")
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleCreate = () => {
    router.push("/member/new/")
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">

      {/* 新規追加ボタン */}
      <div className="flex justify-end">
        <PrimaryButton onClick={handleCreate}>
          ＋ 新規タスク
        </PrimaryButton>
      </div>

      {/* タスク一覧 */}
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