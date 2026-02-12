"use client";

import { ReactNode } from "react";
import BaseButton from "./BaseButton";

type DangerButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function DangerButton({
  children,
  onClick,
  type = "button",
}: DangerButtonProps) {
  return (
    <BaseButton
      type={type}
      onClick={onClick}
      className="bg-red-500 text-white hover:bg-red-600"
    >
      {children}
    </BaseButton>
  );
}