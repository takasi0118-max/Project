"use client";

type InputProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export default function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full p-2 border rounded mb-3`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
