"use client";

import { ReactNode } from "react";

type BaseButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function BaseButton({
  children,
  onClick,
  className = "",
  type = "button",
}: BaseButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-10
        py-7
        rounded
        font-medium
        transition
        duration-200
        ${className}
      `}
    >
      {children}
    </button>
  );
}