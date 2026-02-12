"use client";

import { useState } from "react";
import TaskCard from "@/components/task/TaskCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function MemberPage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "API 実装",
      description: "Spring Boot で CRUD API を作成する",
      status: "DOING",
      priority: "HIGH",
      dueDate: "2024-02-10",
    },
    {
      id: 2,
      title: "UI デザイン",
      description: "タスク管理画面のデザインを作成",
      status: "TODO",
      priority: "MEDIUM",
      dueDate: "2024-02-12",
    },
  ]);

  const handleEdit = (id: number) => {
    console.log("編集:", id);
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleCreate = () => {
    console.log("新規タスク作成へ移動");
    // 例: router.push("/member/task/new")
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