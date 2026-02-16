"use client";

import { ReactNode } from "react";
import BaseButton from "./BaseButton";

type BackButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function BackButton({
  children,
  onClick,
  type = "button",
}: BackButtonProps) {
  return (
    <BaseButton
      type={type}
      onClick={onClick}
      className="bg-gray-500 text-white hover:bg-gray-600"
    >
      {children}
    </BaseButton>
  );
}