"use client";

import { useState } from 'react'
import { useRouter } from "next/navigation";
import BackButton from '@/components/ui/BackButton';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { createTask } from '@/lib/api/task';

export default function NewPage() {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [status,setStatus] = useState("TODO");
    const [priority,setPriority] = useState("MEDIUM");
    const [dueDate,setDueDate] = useState("");
    const [assignedTo,setAssignedTo] = useState("");
    const router = useRouter();

    const handleCreate = async () => {
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
            <option value="TODO">未着手</option>
            <option value="DOING">実行中</option>
            <option value="DONE">完了</option>
        </select>

        <select
            className='border p-2 w-full mb-3'
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
         >
            <option value="MEDIUM">中</option>
            <option value="LOW">低</option>
            <option value="HIGH">高</option>
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
