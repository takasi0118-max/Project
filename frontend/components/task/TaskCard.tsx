"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import DangerButton from "@/components/ui/DangerButton";

export default function TaskCard({
  task,
  onEdit,
  onDelete,
}: {
  task: {
    id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
    dueDate: string;
    assignedTo: string;
  };
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <div className="border p-4 rounded shadow-sm bg-white hover:shadow-md transition">
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