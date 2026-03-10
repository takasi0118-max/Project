"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import DangerButton from "@/components/ui/DangerButton";
import { Task } from "@/lib/types/task";

export default function TaskCard({
  task,
  onEdit,
  onDelete,
}: {
  task: Task;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}) {

  const diffDays = Math.ceil(
    (new Date(task.dueDate).getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24)
  );

  let bgColor = "bg-white";

  if (diffDays <= 3) {
    bgColor = "bg-red-200";
  } else if (diffDays <= 7) {
    bgColor = "bg-yellow-200";
  }

  return (
    <div className={`border p-4 rounded shadow-sm hover:shadow-md transition ${bgColor}`}>
      <div className="text-xl font-bold mb-1">{task.title}</div>

      <div className="text-sm text-gray-600 mb-3">{task.description}</div>

      <div className="flex flex-wrap gap-4 text-sm mb-4">
        <span className="px-2 py-1 bg-gray-100 rounded">
          ステータス: {task.status}
        </span>
        <span className="px-2 py-1 bg-gray-100 rounded">
          優先度: {task.priority}
        </span>
        <span className="px-2 py-1 bg-gray-100 rounded">
          期限: {task.dueDate}
        </span>
        <span className="px-2 py-1 bg-gray-100 rounded">
          担当者: {task.assignedTo}
        </span>
      </div>

      <div className="flex gap-2">
        <PrimaryButton onClick={() => onEdit(task.id)}>編集</PrimaryButton>
        <DangerButton onClick={() => onDelete(task.id)}>削除</DangerButton>
      </div>
    </div>
  );
}