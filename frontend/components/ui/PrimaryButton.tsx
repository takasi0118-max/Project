"use client";

import { ReactNode } from "react";
import BaseButton from "./BaseButton";

type PrimaryButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function PrimaryButton({
  children,
  onClick,
  type = "button",
}: PrimaryButtonProps) {
  return (
    <BaseButton
      type={type}
      onClick={onClick}
      className="bg-blue-500 text-white hover:bg-blue-600"
    >
      {children}
    </BaseButton>
  );
}