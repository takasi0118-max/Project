import React from "react";

type LoginTitleProps = {
  children: React.ReactNode;
};

export const LoginTitle: React.FC<LoginTitleProps> = ({ children }) => {
  return (
    <h1 className="text-2xl font-bold mb-4">
      {children}
    </h1>
  );
};
