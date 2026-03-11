"use client";

import { useState } from 'react'
import { useRouter } from "next/navigation";
import BackButton from '@/components/ui/BackButton';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { createTask } from '@/lib/api/task';

export default function NewPage() {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [status,setStatus] = useState("未着手");
    const [priority,setPriority] = useState("中");
    const [dueDate,setDueDate] = useState("");
    const [assignedTo,setAssignedTo] = useState("");
    const router = useRouter();

    const handleCreate = async () => {
        if (!title.trim()) {
            alert("タイトルを入力してください。")
            return;
        } else if (!description.trim()) {
            alert("詳細を入力してください。")
            return;
        } else if (!dueDate.trim()) {
            alert("期限を入力してください。")
            return;
        } else if (!assignedTo.trim()) {
            alert("担当者を入力してください。")
            return;
        }
        try {
            await createTask({
                title,
                description,
                status,
                priority,
                dueDate,
                assignedTo,
            });

            router.push("/member");
        } catch (e) {
            alert("登録に失敗しました。")
        }
    }
    const handleBack = async () => {
        router.push("../member/")
    }

  return (
    <div className="border p-4 rounded shadow-sm bg-white hover:shadow-md transition">
        <div className="text-xl font-bold mb-3">新規タスク</div>
        <input
            className='border p-2 w-full mb-3'
            placeholder="タイトル"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />

        <input
            className='border p-2 w-full mb-3'
            placeholder="詳細"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
         />

        <select
            className='border p-2 w-full mb-3'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
         >
            <option value="未着手">未着手</option>
            <option value="実行中">実行中</option>
            <option value="完了">完了</option>
        </select>

        <select
            className='border p-2 w-full mb-3'
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
         >
            <option value="低">低</option>
            <option value="中">中</option>
            <option value="高">高</option>
        </select>

        <input
            type="date"
            className="border p-2 w-full mb-3"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
        /> 

        <input
        className="border p-2 w-full mb-3"
        placeholder="担当者"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        />

        <PrimaryButton onClick={handleCreate}>作成</PrimaryButton>
        <BackButton onClick={handleBack}>一覧へ戻る</BackButton>

    </div>
  )
}
